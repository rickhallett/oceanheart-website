import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" />

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-0"
      >
        <Logo />
      </motion.div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 tracking-tight">
            <span className="block">Beyond the mind.</span>
            <span className="block text-brand-500">Into the heart.</span>
            <span className="block">Into life.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-xl md:text-2xl text-neutral-600 leading-relaxed"
        >
          There is a space beyond the endless chatter of thoughts.
          A space where you're not at war with yourself.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brand-500 border border-transparent rounded-md shadow-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200 hover:shadow-xl"
          >
            Begin Your Journey
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          onClick={scrollToNextSection}
          className="absolute bottom-0 transform -translate-x-1/2 text-neutral-400 hover:text-brand-500 transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
    </section>
  );
};

export default Hero;