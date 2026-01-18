import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import princeAbout from '@/assets/prince-about.jpg';

const stats = [
  { value: 7, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Brands Served' },
  { value: 500, suffix: '+', label: 'Students Trained' },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span className="text-4xl md:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              
              {/* Main Image */}
              <div className="relative glass-card rounded-3xl overflow-hidden p-2">
                <img
                  src={princeAbout}
                  alt="Prince I. Ellis"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6"
              >
                <p className="text-3xl font-bold gradient-text-accent">7+</p>
                <p className="text-sm text-muted-foreground">Years of<br />Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Me</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Building the Future,{' '}
              <span className="gradient-text">One Product at a Time</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <strong className="text-foreground">Prince I. Ellis</strong>, a multidisciplinary tech expert with deep expertise in software engineering, full-stack development, mobile app development, cybersecurity, UI/UX design, product design, branding, and tech education.
              </p>
              <p>
                As the Founder of <span className="text-primary">SparkMedia Productions</span>, Co-Founder of <span className="text-accent">ManageX Africa</span>, and creator of <span className="text-primary">Techitup Hub Academy</span> and <span className="text-accent">Jobsteer Nigeria</span>, I build scalable, secure, and user-focused digital solutions for brands globally.
              </p>
            </div>

            {/* Titles */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Tech Entrepreneur', 'Software Engineer', 'Full-Stack Developer', 'UI/UX Designer'].map((title, index) => (
                <motion.span
                  key={title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium"
                >
                  {title}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center glass-card rounded-2xl p-6"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
