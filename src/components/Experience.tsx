import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, MapPin, Calendar, TrendingUp, Cpu, Users } from 'lucide-react';
import { useState } from 'react';

export const Experience = ({ data }: { data: any }) => {
  const [activeTab, setActiveTab] = useState<'technical' | 'leadership'>('technical');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const experiences = activeTab === 'technical' ? data.experience.technical : data.experience.leadership_ops;

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Experience</h2>
            <div className="mt-4 h-1 w-20 bg-blue-500" />
          </div>

          <div className="flex p-1 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
            <button
              onClick={() => { setActiveTab('technical'); setExpandedIndex(0); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'technical' 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Cpu className="h-4 w-4" />
              Technical
            </button>
            <button
              onClick={() => { setActiveTab('leadership'); setExpandedIndex(0); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'leadership' 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Users className="h-4 w-4" />
              Leadership & Ops
            </button>
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {experiences.map((exp: any, index: number) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                    expandedIndex === index 
                      ? 'border-blue-500/50 bg-blue-500/5' 
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="flex w-full flex-col p-6 text-left md:flex-row md:items-center md:justify-between"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        expandedIndex === index ? 'bg-blue-500 text-white' : 'bg-white/5 text-blue-400'
                      }`}>
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-blue-400/80 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-zinc-500 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.dates}
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedIndex === index ? "auto" : 0, 
                      opacity: expandedIndex === index ? 1 : 0 
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="h-px w-full bg-white/10 mb-6" />
                      <ul className="space-y-4">
                        {exp.bullets.map((bullet: string, bIndex: number) => (
                          <li key={bIndex} className="flex gap-4 text-zinc-300 leading-relaxed">
                            <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span className="text-sm md:text-base">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.metrics && (
                        <div className="mt-8 flex flex-wrap gap-3">
                          {exp.metrics.map((metric: string, mIndex: number) => (
                            <div key={mIndex} className="flex items-center gap-2 rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-400 border border-blue-500/20">
                              <TrendingUp className="h-4 w-4" />
                              {metric}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
