import { motion } from 'motion/react';

export const Skills = ({ data }: { data: any }) => {
  const skillCategories = [
    { name: "Languages", items: data.skills.languages },
    { name: "ML / AI", items: data.skills.ml_ai },
    { name: "Computer Vision", items: data.skills.computer_vision },
    { name: "Data", items: data.skills.data },
    { name: "Tools", items: data.skills.tools },
    { name: "Domains", items: data.skills.domains },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">Technical Arsenal</h2>
          <div className="mt-4 h-1 w-20 bg-blue-500" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="mb-6 text-lg font-bold uppercase tracking-widest text-blue-400">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill: string, sIndex: number) => (
                  <motion.span
                    key={sIndex}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
