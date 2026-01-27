Appcast template usage (manual update)

1) Copy appcast.template.json to appcast.json and appcastdev.json (if starting fresh).
2) Replace placeholders:
   - __VERSION__ = product version (e.g., 1.0.0.0)
   - __SERVICE_VERSION__ = service version (usually same as __VERSION__)
   - __MIN_VERSION__ = minimum supported version (e.g., 1.0.0.0)
   - __ARCHIVE_URL__/__ARCHIVE_MD5__ = portable archive
   - __ISS_URL__/__ISS_MD5__ = Inno Setup installer
   - __MSI_URL__/__MSI_MD5__ = MSI installer
   - __SERVICE_URL__/__SERVICE_MD5__ = update service archive (if used)
3) For dev channel, point URLs to the dev tag (e.g., releases/download/dev/).

Notes:
- Keep version values numeric with dots only.
- url2 is optional fallback (leave empty if not needed).
