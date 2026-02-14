# Security Policy

## Wallet Security

Mutant Intelligence takes wallet security seriously. Here's what you need to know:

### What We Access

- **Read-only wallet connection**: We only verify NFT ownership
- **No transaction signing**: We never request transaction signatures
- **No private keys**: We never ask for or store private keys
- **No seed phrases**: We never request seed phrases

### Best Practices

1. **Verify the URL**: Always ensure you're on the official site
2. **Check wallet prompts**: Only approve connection requests, never transactions
3. **Use a hardware wallet**: For maximum security, use a hardware wallet
4. **Disconnect when done**: Disconnect your wallet after use

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

1. **Do not** open a public issue
2. Email security concerns to the project maintainer
3. Include detailed steps to reproduce the issue
4. Allow time for the issue to be addressed before disclosure

## Smart Contract Interactions

This application interacts with the following verified contracts:

- **MAYC Contract**: `0x60E4d786628Fea6478F785A6d7e704777c86a7c6`
- **Network**: Ethereum Mainnet

We only perform read operations (checking NFT ownership) and never initiate transactions.

## Data Privacy

- We do not store wallet addresses permanently
- Session data is stored locally in your browser
- No personal information is collected or transmitted

## Updates

This security policy may be updated periodically. Check back for the latest information.
