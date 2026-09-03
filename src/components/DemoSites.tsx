import { Camera, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const DemoSites = () => {
  const demoSite = {
    title: 'Lumina - Camera Shop Concept',
    description:
      'A scroll-driven product landing page with a frame-by-frame canvas assembly animation, built in React.',
    image: '/lumina.png',
    features: [
      'Scroll-scrubbed canvas animation custom-built without a library',
      'Component-based architecture in React',
      'Responsive design with prefers-reduced-motion support',
      'Performance-conscious WebP frame sequence with lazy loading',
    ],
    technologies: ['React', 'Vite', 'CSS', 'Canvas API'],
    liveDemoUrl: 'https://lumina-demo-website.vercel.app/',
  };

  return (
    <section id="demo-sites" className="site-section relative border-t border-slate-800/50">
      <div className="section-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow">Demo Sites</p>
          <h2 className="section-title">Experiments built to be experienced.</h2>
          <p className="section-copy">
            Interactive frontend concepts focused on motion, visual storytelling, and polished browser experiences.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="group overflow-hidden rounded-2xl border border-blue-600/40 bg-gradient-to-r from-blue-600/10 to-transparent transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
        >
          <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div className="relative min-h-[280px] overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 lg:min-h-full">
              <motion.img
                src={demoSite.image}
                alt={`${demoSite.title} preview`}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-40" />
            </div>

            <div className="flex flex-col justify-between p-6 sm:p-8">
              <div>
                <div className="mb-4 flex items-start gap-4">
                  <div className="shrink-0 rounded-lg bg-blue-600/30 p-3 text-blue-400">
                    <Camera className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {demoSite.title}
                  </h3>
                </div>

                <p className="mb-6 leading-relaxed text-slate-300">{demoSite.description}</p>

                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  What it demonstrates
                </h4>
                <ul className="mb-6 space-y-2">
                  {demoSite.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {demoSite.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-700/50 pt-6">
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={demoSite.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm sm:w-fit"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open Live Demo
                </motion.a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default DemoSites;
