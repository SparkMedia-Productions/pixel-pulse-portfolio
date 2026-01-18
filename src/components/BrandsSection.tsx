import { motion } from 'framer-motion';

const brands = [
  'De Yugovivian Integrated',
  'Nestlé Nigeria',
  'Moniepoint Nigeria',
  'Jumia Nigeria',
  'Pet Lovers SA',
  'Today Evangelical Ministries',
  'Karpra Ride UK',
  'Freshmart Nigeria',
  'Pickups Ltd',
  "William's Court Nigeria",
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Trusted By</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Brands That{' '}
            <span className="gradient-text-accent">Trust My Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I've had the privilege of working with amazing brands across different industries and continents.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* First Row */}
          <div className="flex overflow-hidden mb-6">
            <motion.div
              className="flex gap-6 animate-marquee"
              style={{ minWidth: 'max-content' }}
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`row1-${index}`}
                  className="glass-card rounded-xl px-8 py-6 min-w-[200px] flex items-center justify-center hover:border-primary/30 transition-colors duration-300"
                >
                  <span className="text-foreground font-medium text-sm whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6"
              style={{ 
                minWidth: 'max-content',
                animation: 'marquee 30s linear infinite reverse'
              }}
            >
              {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, index) => (
                <div
                  key={`row2-${index}`}
                  className="glass-card rounded-xl px-8 py-6 min-w-[200px] flex items-center justify-center hover:border-accent/30 transition-colors duration-300"
                >
                  <span className="text-foreground font-medium text-sm whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {['Global Clients', 'Enterprise Solutions', 'Trusted Partner'].map((badge, index) => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSection;
