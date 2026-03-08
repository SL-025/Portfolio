import { motion } from 'motion/react';
import { Trophy, Star, Zap } from 'lucide-react';

export const Achievements = ({ data }: { data: any }) => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">Impact & Achievements</h2>
          <p className="mt-4 text-zinc-400">Measurable results and key milestones from my career.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.achievements.map((achievement: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-white/[0.08]"
            >
              <div className="absolute -right-4 -top-4 opacity-10 transition-transform group-hover:scale-110">
                <Trophy className="h-24 w-24 text-blue-500" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Zap className="h-6 w-6" />
                </div>
                
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {achievement.item}
                </h3>
                <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                  {achievement.context}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
