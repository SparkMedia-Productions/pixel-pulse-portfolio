import { motion } from 'framer-motion';
import { Linkedin, Twitter, Instagram, Github, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: 'mailto:hello@sparkmedia.com', label: 'Email' },
];

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-display text-xl font-bold inline-block mb-2">
              <span className="gradient-text">Spark</span>
              <span className="text-foreground">Media</span>
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prince I. Ellis. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-3 glass-card rounded-xl hover:border-primary/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border/30 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built with 💙 by{' '}
            <span className="gradient-text font-medium">Prince I. Ellis</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
