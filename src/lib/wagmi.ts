import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Mutant Intelligence',
  projectId: 'mutant-intelligence-demo', // For production, get a real projectId from https://cloud.walletconnect.com
  chains: [mainnet],
  ssr: false,
});

// MAYC Contract Address on Ethereum Mainnet
export const MAYC_CONTRACT_ADDRESS = '0x60E4d786628Fea6478F785A6d7e704777c86a7c6' as const;

// ERC721 ABI for balanceOf function
export const ERC721_ABI = [
  {
    inputs: [{ name: 'owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
