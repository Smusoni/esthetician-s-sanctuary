import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";
import { mockImages } from "@/lib/mockImages";

const heroImage = mockImages.heroBeauty;
const aboutImage = mockImages.aboutBeauty;
const gallery1 = mockImages.gallery1;
const gallery2 = mockImages.gallery2;
const gallery3 = mockImages.gallery3;
const gallery4 = mockImages.gallery4;

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen min-h-[560px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Naji Beauty luxury esthetician services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/40" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-light text-secondary-foreground tracking-[0.08em] sm:tracking-[0.14em] md:tracking-[0.2em] uppercase">
              Naji Beauty
            </h1>
            <p className="font-body text-[10px] sm:text-xs md:text-sm tracking-[0.16em] sm:tracking-[0.28em] md:tracking-[0.4em] uppercase text-secondary-foreground/70 mt-4 sm:mt-6">
              Licensed Esthetician
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 sm:mt-12"
          >
            <a
              href="https://app.acuityscheduling.com/schedule/5493fd4d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.3em] uppercase border border-secondary-foreground/40 text-secondary-foreground px-6 sm:px-10 py-3 sm:py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500"
            >
              Book an Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <img
              src={aboutImage}
              alt="Naji Beauty treatment room"
              className="w-full aspect-[4/5] object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
              About the Artist
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Where skincare meets artistry
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              At Naji Beauty, every treatment is a bespoke experience. As a licensed esthetician, 
              I blend clinical-grade products with luxurious techniques to reveal your skin's 
              natural radiance. From transformative facials to precision brow work, each service 
              is tailored to your unique needs.
            </p>
            <Link
              to="/about"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300 self-start mt-4"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-secondary text-secondary-foreground py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase opacity-50 mb-4">
              Our Services
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.06em] md:tracking-[0.1em]">
              Treatments
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: "Facials", desc: "Express, Radiance, Gentleman's & more", price: "From $50" },
              { title: "Peels", desc: "Dermalogica custom peels & dermaplaning", price: "From $120" },
              { title: "PMU", desc: "Powder brows & touch-ups", price: "From $150" },
              { title: "Waxing", desc: "Full body waxing services", price: "From $15" },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="border border-secondary-foreground/10 p-5 sm:p-6 md:p-8 text-center group hover:bg-secondary-foreground/5 transition-colors duration-500"
              >
                <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.1em] sm:tracking-[0.15em] mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-xs opacity-60 mb-4 leading-relaxed">
                  {service.desc}
                </p>
                <p className="font-body text-xs tracking-[0.2em] text-gold uppercase">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-secondary-foreground/30 text-secondary-foreground px-10 py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 sm:py-20 md:py-32 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.06em] md:tracking-[0.1em]">
              Our Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[gallery1, gallery2, gallery3, gallery4].map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="overflow-hidden group"
              >
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/gallery"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase border-b border-foreground/30 pb-1 hover:border-foreground transition-colors duration-300"
            >
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-16 sm:py-20 md:py-24 px-4 sm:px-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-light tracking-[0.06em] md:tracking-[0.1em] mb-6">
            Ready to Glow?
          </h2>
          <p className="font-body text-sm opacity-60 mb-10 max-w-md mx-auto">
            Book your appointment today and experience the Naji Beauty difference.
          </p>
          <a
            href="https://app.acuityscheduling.com/schedule/5493fd4d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.3em] uppercase border border-secondary-foreground/40 text-secondary-foreground px-6 sm:px-10 py-3 sm:py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500"
          >
            Book Now
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
