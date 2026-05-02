# Orange Dummy Homepage

`[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Plasma1345/aether-landing-page)`

This project is a dummy Next.js application, designed as a template for an AI-powered application builder. It serves as a landing page showcasing modern UI/UX elements, dark/light mode functionality, and integrates robust error reporting. The application is optimized for deployment on Cloudflare Workers using OpenNext.

## Key Features

*   **Modern UI/UX**: Utilizes Shadcn UI components and custom Tailwind CSS for a sleek, responsive design.
*   **Dark/Light Mode**: Seamless theme switching with system preference detection.
*   **Smooth Animations**: Enhanced user experience with `framer-motion` for dynamic UI elements.
*   **Client-Side Error Reporting**: Integrated error boundary and a custom error reporter to capture and send client-side errors to a Next.js API endpoint for monitoring.
*   **Optimized for Cloudflare**: Built with OpenNext for efficient deployment and execution on Cloudflare Workers.
*   **TypeScript**: Fully type-safe codebase for improved developer experience and maintainability.

## Technology Stack

*   **Framework**: Next.js (v15.5.2)
*   **UI Library**: React (v18.3.1)
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS (with `tailwindcss-animate`)
*   **Component Library**: Shadcn UI
*   **Animations**: Framer Motion (v12.23.12)
*   **Deployment**: Cloudflare Workers, OpenNext
*   **Package Manager/Runtime**: Bun

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Bun](https://bun.sh/) (v1.1.20 or later recommended)
*   Node.js (LTS recommended, Bun uses its own runtime but Node.js is often a dependency for tooling)
*   [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-update/) (Cloudflare Workers CLI)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/aether-landing-page.git
    cd aether-landing-page
    ```

2.  **Install dependencies:**

    This project uses Bun as its package manager.

    ```bash
    bun install
    ```

## Development

To start the development server:

```bash
bun run dev
```

This will start the Next.js development server on `http://0.0.0.0:8001`.

### Linting

To lint the project for code quality and style issues:

```bash
bun run lint
```

### Cloudflare Types Generation

Generate Cloudflare Workers types for your environment:

```bash
bun run cf-typegen
```

This command updates `cloudflare-env.d.ts` based on your `wrangler.jsonc` bindings, ensuring type safety for your Worker environment variables and resources.

## Deployment

This project is configured to deploy to Cloudflare Workers using OpenNext.

1.  **Build and Deploy:**

    To build your Next.js application for Cloudflare Workers and deploy it:

    ```bash
    bun run deploy
    ```

    This command uses `opennextjs-cloudflare` to bundle your application into a Cloudflare Worker and deploy it. Ensure you are logged into Wrangler (`wrangler login`) and have the necessary permissions.

2.  **Preview Deployment:**

    To build and create a local preview of your Cloudflare Worker deployment:

    ```bash
    bun run preview
    ```

    This command will build your project and then use Wrangler to serve it locally, mimicking the Cloudflare Workers environment.

`[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Plasma1345/aether-landing-page)`