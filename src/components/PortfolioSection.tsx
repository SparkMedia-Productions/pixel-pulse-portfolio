import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import portfolio images
import design1 from '@/assets/portfolio/design-1.png';
import design2 from '@/assets/portfolio/design-2.png';
import design3 from '@/assets/portfolio/design-3.png';
import design4 from '@/assets/portfolio/design-4.png';
import design5 from '@/assets/portfolio/design-5.png';
import design6 from '@/assets/portfolio/design-6.jpg';
import design7 from '@/assets/portfolio/design-7.jpg';
import design8 from '@/assets/portfolio/design-8.jpg';
import design9 from '@/assets/portfolio/design-9.png';
import design10 from '@/assets/portfolio/design-10.png';
import design11 from '@/assets/portfolio/design-11.png';
import design12 from '@/assets/portfolio/design-12.png';
import design13 from '@/assets/portfolio/design-13.png';
import design14 from '@/assets/portfolio/design-14.png';
import design15 from '@/assets/portfolio/design-15.png';
import design16 from '@/assets/portfolio/design-16.png';
import design17 from '@/assets/portfolio/design-17.png';
import design18 from '@/assets/portfolio/design-18.png';
import design19 from '@/assets/portfolio/design-19.jpg';

const portfolioItems = [
  { id: 1, image: design1, title: 'Pizza Jungle - Restaurant Flyer', category: 'Food & Beverage' },
  { id: 2, image: design2, title: 'Kilimanjaro Kiligrill - Food Promotion', category: 'Food & Beverage' },
  { id: 3, image: design3, title: 'NUSA Football Match - Event Flyer', category: 'Sports & Events' },
  { id: 4, image: design4, title: 'Match Day - Sports Poster', category: 'Sports & Events' },
  { id: 5, image: design5, title: 'Football Match - Stadium Design', category: 'Sports & Events' },
  { id: 6, image: design6, title: 'SKNOW Whiskey - Brand Campaign', category: 'Product Design' },
  { id: 7, image: design7, title: 'SKNOW August - Seasonal Design', category: 'Product Design' },
  { id: 8, image: design8, title: 'SKNOW Products - Brand Display', category: 'Product Design' },
  { id: 9, image: design9, title: 'Nigeria Markets - Hiring Post', category: 'Social Media' },
  { id: 10, image: design10, title: 'NUSA Inauguration - Event Poster', category: 'Corporate Events' },
  { id: 11, image: design11, title: 'NUSA Passport Intervention - Event Flyer', category: 'Corporate Events' },
  { id: 12, image: design12, title: 'Pleasant Purls - Brand Logo (Pink)', category: 'Logo Design' },
  { id: 13, image: design13, title: 'Pleasant Purls - Brand Logo (White)', category: 'Logo Design' },
  { id: 14, image: design14, title: 'ManageX Africa - Logo Design', category: 'Logo Design' },
  { id: 15, image: design15, title: 'Nelson Mandela Day - NUSA Celebration', category: 'Social Media' },
  { id: 16, image: design16, title: 'Mandela Day - Community Poster', category: 'Social Media' },
  { id: 17, image: design17, title: 'Karpra-Ride - Taxi Service Ad', category: 'Marketing' },
  { id: 18, image: design18, title: 'Karpra-Ride - Brand Logo', category: 'Logo Design' },
  { id: 19, image: design19, title: 'Drups Logistics - Logo Design', category: 'Logo Design' },
];

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = portfolioItems.length - 1;
      if (nextIndex >= portfolioItems.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Creative{' '}
            <span className="gradient-text">Design Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of impactful graphic designs crafted for brands across industries.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] cursor-grab active:cursor-grabbing"
              >
                <div className="glass-card rounded-2xl overflow-hidden group">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={portfolioItems[currentIndex].image}
                      alt={portfolioItems[currentIndex].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-primary text-sm font-medium">{portfolioItems[currentIndex].category}</span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        {portfolioItems[currentIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-primary'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <span className="text-muted-foreground font-mono text-sm">
              <span className="text-primary font-semibold">{String(currentIndex + 1).padStart(2, '0')}</span>
              {' / '}
              {String(portfolioItems.length).padStart(2, '0')}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
