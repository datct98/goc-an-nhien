# Node backend for Text To Speech

The TTS endpoint is implemented in `server/api/text-to-speech.post.ts`. Build this Nuxt project with the Node preset to run that route on a Node.js server.

## Build and run

```sh
npm ci
npm run build:node
NITRO_PORT=3001 npm run start:node
```

The Node server listens on port `3001` and serves `POST /api/text-to-speech`. Keep the process running with the host's service manager (for example, systemd or PM2), and put it behind HTTPS using Nginx or the host's reverse proxy.

## Connect Cloudflare Pages

Set the Pages environment variable `TTS_API_URL` to the public HTTPS URL of this backend endpoint, for example:

```text
https://api.example.com/api/text-to-speech
```

Do not set it to the Pages site's own URL; that causes the Function to call itself recursively. Redeploy the Pages project after setting the variable.

For the static frontend build, use `npm run build:pages` (or `npm run build`). For the Node backend build, use `npm run build:node`.
