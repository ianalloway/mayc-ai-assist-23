import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
interface CallToActionProps {
  show: boolean;
}
export const CallToAction = ({
  show
}: CallToActionProps) => {
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24 text-primary-foreground rounded-2xl text-center bg-blue-600">
        <h2 className="text-4xl font-bold mb-4 md:text-7xl">Activate Your MAYC AI!</h2>
        <p className="text-xl mb-10">Ready to unleash your mutant ape's AI potential?</p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
            Connect Your MAYC
          </Button>
          
          <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
            View AI Demos
          </Button>
        </div>
      </div>
    </AnimatedTransition>;
};