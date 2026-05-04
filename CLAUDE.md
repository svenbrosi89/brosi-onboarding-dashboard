# Brosi Interiors — Dealer Onboarding Tool

## Doel
Prototype van de dealer-registratietool voor `dealers.brosi-interiors.com`.
Uiteindelijk wordt dit een Next.js applicatie op Vercel. Dit HTML-prototype dient als
functionele referentie en wordt handmatig overgenomen naar de Next.js implementatie.

## Huidige staat
- Single-file vanilla HTML/JS/CSS
- Geen build-stap vereist — direct openen in browser werkt
- Doel-URL: `dealers.brosi-interiors.com`
- Stack eindproduct: Vercel (Next.js), Neon Postgres, Resend (e-mail)

## Merkrichtlijnen
- Kleuren: zie globale CLAUDE.md — donkerbruin `#3d2b1f`, bruin `#8b5e3c`, goud `#c9a96e`, zand `#e8e0d5`, wit `#faf8f5`
- Fonts: Cormorant Garamond (headings, light 300), Jost (body)
- Knoppen: border-radius 6px (iets ronder dan globaal, past bij form-context)
- Geen parallax, bounce of clip-path animaties

## Functionaliteit (prototype)
1. **Bedrijfsgegevens** — bedrijfsnaam, KvK, BTW, adres
2. **Contactpersoon** — naam, e-mail, telefoon, functie
3. **Winkelinformatie** — type, vestigingen, inkoopvolume, huidige merken
4. **Verificatie** — KvK + BTW-check (gesimuleerd in prototype), voorwaarden
5. **Bevestiging** — succes-scherm na inzending

## Talen
Eindproduct ondersteunt: NL / EN / DE

## API-integraties (eindproduct, nog niet in prototype)
- **KvK API** — `https://developers.kvk.nl` — bedrijfsgegevens ophalen op KvK-nummer
- **VIES API** — EU BTW-nummer validatie — `https://ec.europa.eu/taxation_customs/vies/`
- **Logic4** — `POST /Relations/AddUpdateCustomer` — debiteur aanmaken na goedkeuring
- **Resend** — welkomstmail na goedkeuring

## Aanpassingen doorvoeren
- Werk altijd in `index.html`
- Test door het bestand te openen in de browser (geen server nodig)
- Deploy preview: sleep de map naar `app.netlify.com/drop`

## Contact
- dealers@brosi-interiors.com
- Tel: +31 (0)541 229 899
