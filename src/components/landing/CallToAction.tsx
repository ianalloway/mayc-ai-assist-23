import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Zap, Play } from 'lucide-react';

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
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full px-8 py-6 text-base font-semibold bg-background text-foreground hover:bg-background/90 transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Connect Your MAYC
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full px-8 py-6 text-base font-semibold bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Play className="w-5 h-5 mr-2" />
            View AI Demos
          </Button>
        </div>
      </div>
    </AnimatedTransition>
  );
};
