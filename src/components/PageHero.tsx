import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative h-[65vh] min-h-[420px] md:h-[70vh] md:min-h-[500px] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-secondary/50" />
      </div>
      <div className="relative z-10 text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-secondary-foreground tracking-[0.08em] sm:tracking-[0.12em] md:tracking-[0.15em]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-body text-xs sm:text-sm md:text-base tracking-[0.1em] sm:tracking-[0.16em] md:tracking-[0.2em] uppercase text-secondary-foreground/70 mt-4 sm:mt-6"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
