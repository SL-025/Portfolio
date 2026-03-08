import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { resumeData } from './data';
import { Info } from 'lucide-react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedBackground />
          <Navbar data={resumeData} />
          
          <main>
            <Hero data={resumeData} />
            
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Achievements data={resumeData} />
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Experience data={resumeData} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Projects data={resumeData} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Skills data={resumeData} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Education data={resumeData} />
              </motion.div>

              {/* Additional Information Section */}
              <section className="py-24 px-6 bg-white/[0.01]">
                <div className="mx-auto max-w-5xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Additional Information</h2>
                    <div className="mt-4 h-1 w-16 bg-blue-500" />
                  </motion.div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {resumeData.extra.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                      >
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                          <Info className="h-4 w-4" />
                        </div>
                        <span className="text-zinc-300">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Research Section */}
              <section className="py-24 px-6">
                <div className="mx-auto max-w-5xl">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                  >
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Research</h2>
                    <div className="mt-4 h-1 w-16 bg-blue-500" />
                  </motion.div>

                  {resumeData.research.map((res, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="rounded-3xl border border-white/10 bg-blue-500/5 p-8 backdrop-blur-md"
                    >
                      <h3 className="text-2xl font-bold text-white">{res.title}</h3>
                      <p className="mt-4 text-zinc-300">{res.description}</p>
                      <p className="mt-4 text-sm font-medium text-blue-400 uppercase tracking-widest">{res.date}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>

            <footer className="py-12 px-6 text-center border-t border-white/5">
              <p className="text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} {resumeData.basics.name}. Built with React, Vite & Motion.
              </p>
            </footer>
          </main>
        </motion.div>
      )}
    </div>
  );
}
