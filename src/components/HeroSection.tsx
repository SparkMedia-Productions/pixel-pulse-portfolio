import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Code2, Smartphone, Shield, Palette, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import princeHero from '@/assets/prince-hero.jpg';

const floatingIcons = [
  { Icon: Code2, delay: 0, x: '10%', y: '20%' },
  { Icon: Smartphone, delay: 0.5, x: '85%', y: '15%' },
  { Icon: Shield, delay: 1, x: '5%', y: '70%' },
  { Icon: Palette, delay: 1.5, x: '90%', y: '65%' },
  { Icon: Database, delay: 2, x: '75%', y: '85%' },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Floating Tech Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          <div className={`p-4 glass-card rounded-xl ${index % 2 === 0 ? 'floating-icon' : 'floating-icon-delayed'}`}>
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full pulse-glow" />
              <span className="text-sm text-muted-foreground">Available for Projects</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              I Build{' '}
              <span className="gradient-text">Scalable Digital Products</span>
              {' '}That Power Brands.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full-Stack Developer • Software Engineer • Tech Entrepreneur
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Hire Me
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://wa.me/2348111333124" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto w-80 md:w-96 lg:w-full max-w-lg">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-3xl transform scale-90" />
              
              {/* Image Container */}
              <div className="relative glass-card rounded-3xl overflow-hidden p-2">
                <img
                  src={princeHero}
                  alt="Prince I. Ellis"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 top-1/4 glass-card rounded-xl p-4 hidden md:block"
              >
                <p className="text-sm font-semibold gradient-text">SparkMedia</p>
                <p className="text-xs text-muted-foreground">Productions</p>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-4 bottom-1/4 glass-card rounded-xl p-4 hidden md:block"
              >
                <p className="text-2xl font-bold gradient-text-accent">50+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 scroll-indicator">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
