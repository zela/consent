# Consent data application

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
