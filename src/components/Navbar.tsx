import { motion, useScroll, useSpring } from 'motion/react';
import { Mail, Linkedin, Github, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = ({ data }: { data: any }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? 'bg-black/80 py-4 backdrop-blur-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            SL<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-4">
              <a href={`mailto:${data.basics.email}`} className="text-zinc-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href={data.basics.links.find((l: any) => l.name === 'LinkedIn')?.url} target="_blank" className="text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 origin-left"
          style={{ scaleX }}
        />
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        className="fixed inset-0 z-50 flex flex-col bg-black p-8 md:hidden"
      >
        <div className="flex justify-end">
          <button onClick={() => setIsMenuOpen(false)} className="text-white">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="mt-20 flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-bold text-white"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 flex justify-center gap-8">
            <a href={`mailto:${data.basics.email}`} className="text-zinc-400">
              <Mail className="h-8 w-8" />
            </a>
            <a href={data.basics.links.find((l: any) => l.name === 'LinkedIn')?.url} target="_blank" className="text-zinc-400">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};
