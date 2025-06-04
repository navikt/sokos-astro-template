# sokos-up-astro-template

Kan brukes som utgangspunkt for å opprette nye server-side rendrede microfrontends til Utbetalingsportalen.

## Kom i gang

### Tilpasse templatet til ditt prosjekt

1. `CMD + Shift + F` og søk etter `sokos-up-astro-template` og erstatt dette med ditt applikasjonsnavn.
2. Tilpass innholdet i `.nais/naiserator-dev.yaml` og `.nais/naiserator-prod.yaml` til ditt prosjekt.
3. Tilpass innholdet i `.github/workflows/deploy.yaml` til ditt prosjekt.
4. Kommenter ut `deploy-prod-gcp` stegene i `.github/workflows/deploy.yaml`.

NOTE: Du bør se på konteksten i filen du endrer.

## Kjøre appen lokalt

1. Installer dependencies: `npm i`
2. Bygge sokos-up-astro-template: `npm run build`
3. Start hono mockserver: `npm run mock`
4. Med mockserver kjørende i egen terminal, start appen: `npm run dev`
5. Appen nås på http://localhost:4321/

## Henvendelser

Spørsmål knyttet til koden eller prosjektet kan stilles som issues her på github.

## For NAV-ansatte

Interne henvendelser kan sendes via Slack i kanalen [#utbetaling](https://nav-it.slack.com/archives/CKZADNFBP).
