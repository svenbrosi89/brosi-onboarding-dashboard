module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const ms  = ((req.query.ms  || '')).toUpperCase().replace(/[^A-Z]/g, '');
  const vat = ((req.query.vat || '')).trim().toUpperCase().replace(/[\s\-\.]/g, '');

  const euMs = ['AT','BE','BG','CY','CZ','DE','DK','EE','EL','ES','FI','FR','HR','HU','IE','IT','LT','LU','LV','MT','NL','PL','PT','RO','SE','SI','SK'];

  if (!ms || !vat || !euMs.includes(ms)) {
    return res.status(200).json({ valid: null, manual: true });
  }

  // Strip country prefix so VIES receives only the local part
  let vatNum = vat.startsWith(ms) ? vat.slice(ms.length) : vat;
  if (!vatNum) return res.status(200).json({ valid: false });

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const url = `https://ec.europa.eu/taxation_customs/vies/rest-api/ms/${ms}/vat/${encodeURIComponent(vatNum)}`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!response.ok) return res.status(200).json({ valid: null, manual: true, apiError: true });

    const data = await response.json();
    return res.status(200).json({ valid: data.isValid === true, name: data.name || null });
  } catch {
    return res.status(200).json({ valid: null, manual: true, apiError: true });
  }
};
