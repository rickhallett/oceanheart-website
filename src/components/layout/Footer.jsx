import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'My Journey', href: '/journey' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Work Together', href: '/work-together' },
    { name: 'Blog', href: 'https://oceanheart-ai.ghost.io' },
    { name: 'Begin Your Journey', href: '/contact' },
  ],
  secondary: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ]
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-neutral-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold text-brand-500">O.</span>
              <span className="text-lg font-medium text-neutral-900">OceanHeart</span>
            </Link>
            <p className="mt-4 text-neutral-600 text-sm leading-relaxed">
              There is a space beyond the endless chatter of thoughts.
              A space where you're not at war with yourself.
              A space where life flows naturally, vividly, authentically.
            </p>
          </div>

          {/* Navigation Column */}
          <nav className="md:col-span-4 md:ml-8">
            <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={scrollToTop}
                    className="text-neutral-600 hover:text-brand-500 text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              Start your journey towards authentic living.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-brand-500 border border-transparent rounded-md shadow-sm hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-colors duration-200"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span>© {currentYear} OceanHeart.</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-brand-500" /> in the present moment
              </span>
            </div>
            <div className="flex gap-6">
              {navigation.secondary.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className="text-sm text-neutral-500 hover:text-brand-500 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;