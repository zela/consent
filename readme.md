# Consent data application

## How to run

From the project root:

```shell
pnpm dev
```

This will run both backend (on port 8080) and frontend (on port 5173).

For other commands feel free to explore the `package.json`.

Note that for the test you need running backend. It is implemented as e2e test which runs with a headless browser with no mock.

## Tech stack in bullet points

- `pnpm` for package management
- `nx` for monorepo
- `react` for frontend
- `typescript` for static types
- `eslint` for linting
- `prettier` for formatting
- `vite` for bundling
- `tailwindcss` for styling
- `neobrutalism` for [components](https://www.neobrutalism.dev)

- [`conventional commits`](https://www.conventionalcommits.org/en/v1.0.0/) for commit message format
- feature-based approach for the project structure (a bit opinionated, yet effective)
- in `frontend/src/components/ui` components are imported via form `neobrutalism` with shadcn CLI

## Implemented

- login form
- protected route
- authentication persistence via SessionStorage (for tab reload)
- dynamic consent form rendering
- consent form output to console on submit
- an example test for the happy path

## "Nice to have", for perspective

### Hardening and scaling

- pre-commit hooks
- automated releases
- i18n
- CI / CD pipeline
- bundle analysis
- form input sanitization and validation
- consent form persistence (especially for long forms)
- api schema-based validation (Yup/Zod)
- comprehensive testing
- extensive documentation
- exhaustive error handling
  ... and so on

### Features

- forgotten password retrieval
- sign-up process
- OAuth authentication
- persistence of consent data, on the server and/or on the client
- possibility to save a draft consent form
- pagination / lazy loading / virtualization for long forms
- build-time or run-time style theming
