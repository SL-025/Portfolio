import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

export const Education = ({ data }: { data: any }) => {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">Education</h2>
              <div className="mt-4 h-1 w-16 bg-blue-500" />
            </motion.div>

            <div className="space-y-8">
              {data.education.map((edu: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-[1px] before:bg-white/10"
                >
                  <div className="absolute left-[-5px] top-2 h-[11px] w-[11px] rounded-full bg-blue-500" />
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-blue-400">{edu.degree}</p>
                  <div className="mt-2 flex items-center gap-4 text-sm text-zinc-500">
                    <span>{edu.dates}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white md:text-4xl">Certifications</h2>
              <div className="mt-4 h-1 w-16 bg-blue-500" />
            </motion.div>

            <div className="grid gap-4">
              {data.certifications.map((cert: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-zinc-300">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
