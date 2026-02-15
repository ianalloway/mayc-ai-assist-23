import { AnimatedTransition } from '@/components/AnimatedTransition';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
interface TestimonialsSectionProps {
  showTestimonials: boolean;
}
export const TestimonialsSection = ({
  showTestimonials
}: TestimonialsSectionProps) => {
  const testimonials = [{
    quote: "Finally an AI that understands the MAYC community. The alpha calls are insane.",
    name: "ApeCoin_Mike",
    role: "MAYC Holder #4521",
    rating: 5
  }, {
    quote: "Verified my mutant in seconds. Now I get exclusive insights no one else sees.",
    name: "CryptoJen",
    role: "MAYC Holder #8923",
    rating: 5
  }, {
    quote: "The market analysis helped me time my trades perfectly. Up 40% this month.",
    name: "NFT_Whale",
    role: "MAYC Holder #1247",
    rating: 5
  }, {
    quote: "Love the community features. Feels like a private club for mutant holders.",
    name: "BoredButRich",
    role: "MAYC Holder #6789",
    rating: 4
  }, {
    quote: "The AI predictions on floor price movements have been scary accurate.",
    name: "DiamondHands_Dan",
    role: "MAYC Holder #3456",
    rating: 5
  }, {
    quote: "Best investment tool for the Yuga ecosystem. Period.",
    name: "ApeFollower",
    role: "MAYC Holder #9012",
    rating: 5
  }];

  // Component to render star ratings
  const StarRating = ({
    rating
  }: {
    rating: number;
  }) => {
    return <div className="flex items-center gap-1 mb-2">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />)}
      </div>;
  };
  return <AnimatedTransition show={showTestimonials} animation="slide-up" duration={600}>
      <div className="py-16 md:py-24">
        <div className="flex flex-col items-center gap-2 mb-12 text-center">
                    <h2 className="text-4xl font-bold text-blue-600 md:text-8xl">
                      Trusted by MAYC<br />
                      holders worldwide.
                    </h2>
          
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {testimonials.map((testimonial, index) => <Card key={index} className="bg-card border border-border/50 p-6 rounded-lg shadow-sm h-full">
              <StarRating rating={testimonial.rating} />
              <p className="text-lg font-medium mb-4">{testimonial.quote}</p>
              <div className="mt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>)}
        </div>
      </div>
    </AnimatedTransition>;
};
