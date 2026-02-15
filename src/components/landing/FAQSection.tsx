import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface FAQSectionProps {
  showFAQs?: boolean;
}
export const FAQSection = ({
  showFAQs = true
}: FAQSectionProps) => {
  const [openItem, setOpenItem] = useState<string | null>("item-1");
  const faqs = [{
    id: "item-1",
    question: "What is Mutant Intelligence?",
    answer: "Mutant Intelligence transforms your Mutant Ape Yacht Club (MAYC) NFT into a unique AI assistant. Each mutant's traits influence its personality, knowledge areas, and communication style, creating a truly personalized AI experience."
  }, {
    id: "item-2",
    question: "Do I need to own a MAYC NFT to use this?",
    answer: "Yes, you need to connect a wallet that holds at least one MAYC NFT. The AI assistant's personality is derived from your specific mutant's traits, making each experience unique to your NFT."
  }, {
    id: "item-3",
    question: "How do the NFT traits affect the AI?",
    answer: "Each trait category (background, fur, eyes, mouth, clothes, etc.) influences different aspects of your AI assistant. For example, certain backgrounds might make your mutant more philosophical, while specific eye traits could make it more analytical or creative."
  }, {
    id: "item-4",
    question: "Is my wallet safe when connecting?",
    answer: "Absolutely. We use industry-standard wallet connection protocols (WalletConnect, MetaMask). We only read your wallet address and NFT ownership - we never request transaction signing or access to your funds."
  }, {
    id: "item-5",
    question: "Can I use multiple MAYC NFTs?",
    answer: "Yes! If you own multiple MAYC NFTs, you can switch between them to experience different AI personalities. Each mutant provides a unique interaction style based on its traits."
  }, {
    id: "item-6",
    question: "What can I ask my Mutant AI?",
    answer: "Your Mutant AI can help with a wide range of tasks: creative writing, coding assistance, research, brainstorming, and general conversation. Its responses will be flavored by your mutant's unique personality traits."
  }, {
    id: "item-7",
    question: "Is there a cost to use the AI features?",
    answer: "Basic features are free for MAYC holders. Premium features with extended capabilities may be available through optional subscriptions in the future."
  }, {
    id: "item-8",
    question: "How is this different from ChatGPT?",
    answer: "Unlike generic AI assistants, Mutant Intelligence creates a persistent, personalized AI companion tied to your NFT. Your mutant remembers past conversations and develops a consistent personality based on its on-chain traits."
  }];
  return <AnimatedTransition show={showFAQs} animation="slide-up" duration={600}>
      
    </AnimatedTransition>;
};
