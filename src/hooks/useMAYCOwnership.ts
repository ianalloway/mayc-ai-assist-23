import { useAccount, useReadContract } from 'wagmi';
import { MAYC_CONTRACT_ADDRESS, ERC721_ABI } from '@/lib/wagmi';

export function useMAYCOwnership() {
  const { address, isConnected } = useAccount();

  const { data: balance, isLoading, error } = useReadContract({
    address: MAYC_CONTRACT_ADDRESS,
    abi: ERC721_ABI,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: isConnected && !!address,
    },
  });

  const ownsMAYC = balance !== undefined && balance > 0n;
  const maycCount = balance !== undefined ? Number(balance) : 0;

  return {
    isConnected,
    address,
    ownsMAYC,
    maycCount,
    isLoading,
    error,
  };
}
