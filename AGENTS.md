# AGENTS.md - MAYC AI Assist

## Overview
Mutant Ape Yacht Club AI agent website and tech platform. NFT-powered AI assistant interface.

## Tech Stack
- **Framework:** React 18 + TypeScript
- **Build:** Vite
- **Styling:** Tailwind CSS + shadcn/ui (Radix primitives)
- **Package Manager:** npm (lockfile present), bun also supported
- **Containerization:** Docker + docker-compose + nginx

## Commands
```bash
npm run dev        # Start dev server
npm run build      # Production build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Project Structure
```
src/
  App.tsx          # Root component
  main.tsx         # Entry point
  pages/           # Route pages
  components/      # UI components
  contexts/        # React context providers
  hooks/           # Custom React hooks
  types/           # TypeScript type definitions
  lib/             # Utilities
  jkv/             # Key-value storage
```

## Deployment
- Dockerfile + docker-compose.yml + nginx.conf present
- Can be deployed as a static site behind nginx

## Key Conventions
- Uses shadcn/ui component library
- Has CONTRIBUTING.md and SECURITY.md
- Related to Mutant-Intel repo
- ETH Donation Address: 0xAc7C093B312700614C80Ba3e0509f8dEde03515b

## Owner
Ian Alloway (@ianalloway)
