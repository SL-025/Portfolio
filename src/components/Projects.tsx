import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export const Projects = ({ data }: { data: any }) => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white md:text-5xl">Featured Projects</h2>
          <div className="mt-4 h-1 w-20 bg-blue-500" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {data.projects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:border-blue-500/30"
            >
              <div className="p-8">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div className="flex gap-4">
                    {project.links?.map((link: any, lIndex: number) => (
                      <a
                        key={lIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.name === 'GitHub' ? <Github className="h-5 w-5" /> : <ExternalLink className="h-5 w-5" />}
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-6 text-sm text-blue-400/80">{project.date}</p>
                
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack?.split(', ').map((tech: string, tIndex: number) => (
                    <span
                      key={tIndex}
                      className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.bullets.map((bullet: string, bIndex: number) => (
                    <li key={bIndex} className="flex gap-3 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500/50" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
