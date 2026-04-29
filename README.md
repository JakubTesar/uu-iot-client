# AI Assistant FE refactor

Drop the `src` folder into the Vite React project, or copy the files one by one.

## Backend URL

Default backend URL is:

```bash
http://localhost:3000
```

Override it in `.env` if needed:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

## Important assumptions

Routes are expected to be mounted like this:

- `/users`
- `/devices`
- `/user-device-relations`
- `/assistant-configurations`
- `/device-messages`

Device messages are still loaded from backend by `deviceId`, because the supplied backend route exposes `GET /device-messages/:deviceId`. The FE then filters messages by selected configuration.

## Structure

- `src/api` — API clients
- `src/auth` — auth context + localStorage token
- `src/hooks` — data hooks
- `src/components` — reusable layout and UI components
- `src/pages` — route pages
- `src/types` — shared API types
