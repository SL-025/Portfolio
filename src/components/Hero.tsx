import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';

export const Hero = ({ data }: { data: any }) => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1, 
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 12,
              stiffness: 100,
              restDelta: 0.001
            }
          }}
          className="relative mx-auto mb-10 h-40 w-40 md:h-56 md:w-56"
        >
          {/* Futuristic Photo Frame */}
          <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20 blur-2xl" />
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-transparent to-purple-500 opacity-50" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white/10 backdrop-blur-sm">
            <img
              src={data.basics.photo}
              alt={data.basics.name}
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Orbitals */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-blue-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-dotted border-white/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium tracking-wider text-blue-400 uppercase"
        >
          {data.basics.location}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {data.basics.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed"
        >
          {data.basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            View Experience
            <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </button>
          
          <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95">
            Download Resume
            <Download className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-12 w-6 justify-center rounded-full border-2 border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
};
