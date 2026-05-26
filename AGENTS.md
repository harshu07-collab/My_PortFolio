# Repository Guidelines

## Project Structure & Module Organization
This is a React-based 3D portfolio project utilizing **Three.js** and **GSAP**.
- **`.\src\components\`**: Contains major portfolio sections and UI components.
- **`.\src\constants\index.ts`**: The primary data source for personal information, projects, and social links.
- **`.\src\context\`**: Manages global application states like loading transitions.
- **`.\public\`**: Stores 3D models (`.\public\models\`), technology icons (`.\public\images\`), and Draco decoders.
- **`.\src\assets\`**: Local asset files including background textures.

## Build, Test, and Development Commands
The project uses **Vite** as its build tool and development server.
- **`npm run dev`**: Starts the local development server.
- **`npm run build`**: Runs TypeScript type checking and generates a production build in `.\dist\`.
- **`npm run lint`**: Executes ESLint for code quality checks.
- **`npm run preview`**: Previews the production build locally.

## Coding Style & Naming Conventions
- **TypeScript**: Strict mode is enabled. Use path alias `@/` for imports from the `.\src\` directory.
- **React**: Functional components with hooks. Styling is managed via component-specific CSS files in `.\src\components\styles\`.
- **GSAP**: Animations are handled using GSAP, often integrated with `@gsap/react`.
- **Linting**: ESLint is configured with React and React Hooks plugins.

## Commit & Pull Request Guidelines
Commit messages are generally descriptive and concise (e.g., `"Update README documentation"`, `"Initial portfolio project"`). No strict prefix-based convention (like Conventional Commits) is enforced by the existing history, but maintaining clarity is encouraged.
