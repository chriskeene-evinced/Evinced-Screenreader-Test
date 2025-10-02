# Clarity: Minimalist Landing Page

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chriskeene-evinced/Evinced-Screenreader-Test)

Clarity is a single-page landing application designed with a minimalist aesthetic. It prioritizes clean layouts, generous white space, and a refined user experience. The application features a fixed navigation bar, a captivating hero section with a subtle gradient background, two distinct body sections for showcasing images and links, and an interactive modal form for user input. The entire design is fully responsive, ensuring a beautiful and functional experience across all devices. The visual identity is built upon a modern, monochrome color palette with a single accent color for interactive elements, creating a sophisticated and focused user interface.

## ✨ Key Features

-   **Modern & Minimalist UI:** Clean, spacious, and visually stunning design.
-   **Responsive Perfection:** Flawless layout and functionality on all devices, from mobile to desktop.
-   **Interactive Modal Form:** A sleek, accessible modal for user input with built-in validation.
-   **Polished Micro-interactions:** Smooth animations and hover states for a delightful user experience.
-   **Structured Content Sections:** Dedicated placeholders for an image gallery and important links.
-   **Consistent Visual Language:** Built with a strict design system for typography, spacing, and color.

## 🛠️ Technology Stack

-   **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Bun](https://bun.sh/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/clarity_landing.git
    cd clarity_landing
    ```

2.  **Install dependencies:**
    ```bash
    bun install
    ```

## 💻 Development

To start the local development server, run the following command:

```bash
bun run dev
```

This will start the Vite development server, typically available at `http://localhost:3000`. The server supports Hot Module Replacement (HMR) for a fast and efficient development workflow.

The main application logic is located in `src/pages/HomePage.tsx`. All reusable components, including the form modal, are located in the `src/components/` directory.

## 📜 Available Scripts

-   `bun run dev`: Starts the development server.
-   `bun run build`: Builds the application for production.
-   `bun run lint`: Lints the codebase using ESLint.
-   `bun run deploy`: Deploys the application to Cloudflare.

## 🌐 Deployment

This project is configured for seamless deployment to the Cloudflare network.

To deploy your application, simply run the following command:

```bash
bun run deploy
```

This command will build the project and deploy it using the Wrangler CLI.

Alternatively, you can deploy directly from your GitHub repository with a single click:

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/chriskeene-evinced/Evinced-Screenreader-Test)