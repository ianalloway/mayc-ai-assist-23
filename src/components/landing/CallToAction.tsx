import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Zap, ExternalLink } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

interface CallToActionProps {
  show: boolean;
}

export const CallToAction = ({
  show
}: CallToActionProps) => {
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
      </div>
    </AnimatedTransition>
  );
};
