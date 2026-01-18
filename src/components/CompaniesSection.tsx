import { motion } from 'framer-motion';
import { Sparkles, Users, GraduationCap, Briefcase } from 'lucide-react';

const companies = [
  {
    name: 'SparkMedia Productions',
    role: 'Owner & Founder',
    description: 'Creative & Tech Solutions agency delivering digital products, branding, and software solutions for global clients.',
    icon: Sparkles,
    color: 'from-primary to-cyan-400',
  },
  {
    name: 'ManageX Africa',
    role: 'Co-Owner & Co-Founder',
    description: 'Business & Management Solutions platform helping African businesses scale with modern tools and strategies.',
    icon: Users,
    color: 'from-accent to-orange-400',
  },
  {
    name: 'Techitup Hub Academy',
    role: 'Founder',
    description: 'Tech Education & Training institution empowering the next generation of African developers and designers.',
    icon: GraduationCap,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    name: 'Jobsteer Nigeria',
    role: 'Founder',
    description: 'Career & Job Placement Platform connecting talented professionals with top opportunities across Nigeria.',
    icon: Briefcase,
    color: 'from-violet-500 to-purple-400',
  },
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Ventures</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Companies I{' '}
            <span className="gradient-text">Own & Co-Own</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Beyond client work, I'm building companies that solve real problems and create lasting impact.
          </p>
        </motion.div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${company.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500`} />
              
              {/* Card */}
              <div className="relative glass-card rounded-3xl p-8 h-full hover:border-primary/20 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${company.color} mb-6`}>
                  <company.icon className="w-8 h-8 text-white" />
                </div>

                {/* Role Badge */}
                <div className="inline-block px-3 py-1 glass-card rounded-full text-xs font-medium text-primary mb-4">
                  {company.role}
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {company.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
