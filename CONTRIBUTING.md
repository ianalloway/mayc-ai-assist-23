# Contributing to Mutant Intelligence

Thanks for your interest in contributing to Mutant Intelligence! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/mayc-ai-assist-23.git`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`

## Development

### Prerequisites

- Node.js 18+
- npm or pnpm
- A Web3 wallet (MetaMask recommended) for testing wallet features

### Running Locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

### Testing Wallet Connection

To test MAYC ownership verification locally:

1. Connect a wallet that holds a MAYC NFT
2. The app will verify ownership via the smart contract
3. Premium features unlock automatically for verified holders

## Code Style

- TypeScript for all new code
- React functional components with hooks
- Tailwind CSS for styling
- Follow existing patterns in the codebase

## Commit Messages

Use conventional commits:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation
- `style:` Formatting
- `refactor:` Code restructuring

## Pull Requests

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` to check for issues
4. Submit a PR with a clear description

## Security

If you find a security vulnerability, please report it privately rather than opening a public issue. See [SECURITY.md](SECURITY.md) for details.

## Questions?

Open an issue or reach out on Twitter [@ianallowayxyz](https://x.com/ianallowayxyz)
