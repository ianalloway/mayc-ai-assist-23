import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Zap, ExternalLink, Heart, Copy } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useToast } from '@/components/ui/use-toast';

const ETH_DONATION_ADDRESS = "0xAc7C093B312700614C80Ba3e0509f8dEde03515b";

interface CallToActionProps {
  show: boolean;
}

export const CallToAction = ({
  show
}: CallToActionProps) => {
  const { toast } = useToast();

  const copyEthAddress = async () => {
    try {
      await navigator.clipboard.writeText(ETH_DONATION_ADDRESS);
      toast({
        title: "Address Copied!",
        description: "ETH donation address copied to clipboard",
      });
    } catch {
      toast({
        title: "Failed to copy",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24 rounded-3xl text-center relative overflow-hidden glow-mutant">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] -z-10" />
        
        <h2 className="text-4xl font-bold mb-4 md:text-6xl text-primary-foreground">
          Activate Your MAYC AI!
        </h2>
        <p className="text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
          Ready to unleash your mutant ape's AI potential? Connect your wallet and transform your NFT into a powerful AI companion.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none',
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <Button 
                          size="lg" 
                          onClick={openConnectModal}
                          className="rounded-full px-8 py-6 text-base font-semibold bg-background text-foreground hover:bg-background/90 transition-all duration-300"
                        >
                          <Zap className="w-5 h-5 mr-2" />
                          Connect Your MAYC
                        </Button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <Button 
                          size="lg" 
                          onClick={openChainModal}
                          className="rounded-full px-8 py-6 text-base font-semibold bg-destructive hover:bg-destructive/90 text-destructive-foreground transition-all duration-300"
                        >
                          Wrong Network
                        </Button>
                      );
                    }

                    return (
                      <Button 
                        size="lg" 
                        onClick={openAccountModal}
                        className="rounded-full px-8 py-6 text-base font-semibold bg-background text-foreground hover:bg-background/90 transition-all duration-300"
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        {account.displayName}
                      </Button>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
          
          <a 
            href="https://x.com/mutantintel" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 py-6 text-base font-semibold bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Explore AI Features
            </Button>
          </a>
        </div>

        {/* ETH Donation */}
        <div className="mt-12 p-4 rounded-xl bg-background/10 backdrop-blur-sm border border-primary-foreground/20 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-primary-foreground text-sm font-medium">Support Development</span>
          </div>
          <p className="text-primary-foreground/60 text-xs mb-3">
            If you find Mutant Intelligence helpful, consider donating ETH
          </p>
          <div className="flex items-center justify-center gap-2">
            <code className="px-3 py-1.5 rounded bg-background/20 text-primary-foreground text-xs font-mono">
              {ETH_DONATION_ADDRESS.slice(0, 10)}...{ETH_DONATION_ADDRESS.slice(-8)}
            </code>
            <Button 
              size="sm"
              variant="outline"
              onClick={copyEthAddress}
              className="rounded-full text-xs bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10"
            >
              <Copy className="w-3 h-3 mr-1" /> Copy
            </Button>
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};
