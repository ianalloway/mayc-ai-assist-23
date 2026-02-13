import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { useState } from 'react';
import { WaitlistModal } from '../waitlist/WaitlistModal';
import DiagramComponent from './DiagramComponent';

interface HeroSectionProps {
  showTitle: boolean;
}

export const HeroSection = ({
  showTitle
}: HeroSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'scattered' | 'convergence' | 'organized'>('scattered');
  const [heroText, setHeroText] = useState("Each MAYC NFT becomes your personal AI assistant with unique traits, personality, and specialized knowledge to help you organize, create, and innovate.");
  
  const handleSectionClick = (section: 'scattered' | 'convergence' | 'organized', text: string) => {
    setActiveSection(section);
    setHeroText(text);
  };

  const stats = [
    { value: "10K+", label: "MAYC Holders" },
    { value: "24/7", label: "AI Availability" },
    { value: "100+", label: "Unique Traits" },
    { value: "Infinite", label: "Possibilities" }
  ];

  return (
    <div className="py-20 md:py-32 flex flex-col items-center text-center relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[100px] -z-10" />
      
      <AnimatedTransition show={showTitle} animation="slide-up" duration={600}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          Powered by Advanced AI
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Unleash Your</span>
          <br />
          <span className="text-gradient-mutant">Mutant Intelligence</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed" key={heroText}>
          {heroText}
        </p>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 w-full max-w-3xl">
          {stats.map((stat, index) => (
            <div key={index} className="mutant-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Diagram */}
        <div className="mb-10">
          <DiagramComponent onSectionClick={handleSectionClick} activeSection={activeSection} />
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            onClick={() => setIsModalOpen(true)} 
            className="rounded-full px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-green transition-all duration-300"
          >
            <Zap className="w-5 h-5 mr-2" />
            Connect Your MAYC
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8 py-6 text-base font-semibold border-border hover:bg-card transition-all duration-300"
          >
            <Brain className="w-5 h-5 mr-2" />
            Explore AI Features
          </Button>
        </div>

        <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </AnimatedTransition>
    </div>
  );
};
