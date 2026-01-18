import { motion } from 'framer-motion';
import { 
  Globe, 
  Code2, 
  Smartphone, 
  Shield, 
  Palette, 
  Layers, 
  Share2, 
  GraduationCap,
  Server
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Stack Web Development',
    description: 'End-to-end web solutions with modern frameworks and scalable architecture.',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software solutions engineered for performance and reliability.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for Android and iOS.',
  },
  {
    icon: Shield,
    title: 'Cyber Security',
    description: 'Comprehensive digital protection and security auditing services.',
  },
  {
    icon: Palette,
    title: 'UI / UX Design',
    description: 'User-centered design that creates engaging digital experiences.',
  },
  {
    icon: Layers,
    title: 'Graphic & Product Design',
    description: 'Visual design and branding that communicates your message.',
  },
  {
    icon: Server,
    title: 'Prototyping & MVP',
    description: 'Rapid prototyping to validate ideas and launch faster.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Strategic social media presence that drives engagement.',
  },
  {
    icon: GraduationCap,
    title: 'Tech Education & Training',
    description: 'Comprehensive tech training programs for all skill levels.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Expertise That{' '}
            <span className="gradient-text">Drives Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to deployment, I offer comprehensive digital solutions tailored to transform your ideas into powerful products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group glass-card rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="mt-6 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
