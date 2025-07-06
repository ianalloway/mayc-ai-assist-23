import { useState } from 'react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { FeatureIllustration } from './FeatureIllustration';
import { FeatureIcon } from './FeatureIllustrations/FeatureIcon';
interface ManageSectionProps {
  show: boolean;
}
export const ManageSection = ({
  show
}: ManageSectionProps) => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const features = [{
    title: "NFT Personalities",
    description: "Each MAYC has unique traits and AI personality based on their mutant characteristics."
  }, {
    title: "Specialized Skills",
    description: "Alpha, Mega, Toxic, Radioactive, and Prismatic mutants each excel in different areas."
  }, {
    title: "Visual Intelligence",
    description: "Your MAYC AI can analyze, understand, and work with visual content and data."
  }, {
    title: "Personal Assistant",
    description: "Each NFT becomes a dedicated AI agent tailored to your specific needs and workflows."
  }, {
    title: "Trait-Based AI",
    description: "Laser Eyes for precision, Gold Teeth for wealth insights, Cyber Helmet for tech expertise."
  }, {
    title: "Collection Power",
    description: "Build a team of MAYC AI agents with complementary skills and personalities."
  }, {
    title: "Mutant Memory",
    description: "Your MAYC remembers everything and learns from your interactions over time."
  }, {
    title: "Smart Discovery",
    description: "AI-powered search that understands context and finds exactly what you need."
  }, {
    title: "Secure Vault",
    description: "Your MAYC AI keeps all data private and secure within your personal ecosystem."
  }, {
    title: "Image Analysis",
    description: "Advanced visual recognition powered by your mutant's unique perspective."
  }, {
    title: "Collaborative Apes",
    description: "Share insights and collaborate with other MAYC holders' AI agents."
  }, {
    title: "Adaptive Interface",
    description: "UI changes based on your active MAYC's personality and preferred working style."
  }];
  const handleFeatureClick = (index: number) => {
    setActiveFeature(index === activeFeature ? null : index);
  };
  return <AnimatedTransition show={show} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">MAYC AI Agents</h2>
          <p className="text-foreground max-w-3xl text-xl md:text-2xl mt-2">Each Mutant Ape becomes your personal AI assistant with unique abilities.</p>
        </div>

        <FeatureIllustration featureIndex={activeFeature} className="transition-all duration-500" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => <div key={index} className={`flex flex-col items-center text-center transition-all duration-300 ${activeFeature === index ? 'scale-105' : 'hover:scale-102'} cursor-pointer`} onClick={() => handleFeatureClick(index)}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${activeFeature === index ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-primary/10'}`}>
                <FeatureIcon index={index} size={32} />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </AnimatedTransition>;
};