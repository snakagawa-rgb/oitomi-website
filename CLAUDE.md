# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with TypeScript and Tailwind CSS. The project uses the App Router and is configured with ESLint for code quality.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Architecture

```
concept-site/
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles with Tailwind directives
│   └── components/      # Reusable React components
│       └── Button.tsx   # Example button component
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.ts       # Next.js configuration
```

## Key Technologies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and formatting

## Development Guidelines

1. Components should be placed in `src/components/` and use TypeScript
2. Pages use the App Router structure in `src/app/`
3. Tailwind classes are used for styling
4. Dark mode support is built-in using Tailwind's dark: prefix
5. The project uses the `@/*` import alias for the src directory