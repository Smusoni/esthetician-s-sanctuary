import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import aboutImage from "@/assets/about-beauty.jpg";
import servicesHero from "@/assets/services-hero.jpg";

import { fadeUp } from "@/lib/animations";

const About = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PageHero image={servicesHero} title="About" subtitle="The Artist Behind the Glow" />

      {/* Story */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
          >
            <img src={aboutImage} alt="Naji Beauty studio" className="w-full aspect-[3/4] object-cover" />
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="space-y-6"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Beauty is personal. So is every treatment.
            </h2>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Naji Beauty was founded on a simple belief: everyone deserves to feel confident in their own skin. 
              As a licensed esthetician, I combine advanced clinical techniques with a deeply personal approach 
              to skincare. Every treatment begins with understanding your skin's unique story.
            </p>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Using professional-grade products from trusted brands like Dermalogica, each service is 
              customized to address your specific concerns — whether that's brightening, anti-aging, 
              acne management, or simply maintaining a healthy glow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-secondary text-secondary-foreground py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase opacity-50 mb-4">For New Clients</p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-[0.1em]">What to Expect</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: "01",
                title: "Consultation",
                desc: "We start with a skin analysis and discuss your goals. Virtual consultations are available for $10 if you're unsure which service is right for you."
              },
              {
                num: "02",
                title: "Your Treatment",
                desc: "Every service is performed in a clean, relaxing environment using clinical-grade products. Treatments are tailored in real-time to your skin's needs."
              },
              {
                num: "03",
                title: "Aftercare",
                desc: "You'll receive personalized aftercare instructions and product recommendations to maintain your results between visits."
              },
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}
                className="text-center"
              >
                <span className="font-display text-5xl font-light text-gold/30">{step.num}</span>
                <h3 className="font-display text-xl tracking-[0.15em] mt-4 mb-3">{step.title}</h3>
                <p className="font-body text-sm opacity-60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl font-light tracking-[0.1em]">Good to Know</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="space-y-6"
          >
            {[
              { q: "Cancellation Policy", a: "Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a fee." },
              { q: "Patch Tests", a: "Certain treatments (peels, tinting) require a patch test 24-48 hours prior to your appointment. We'll let you know at booking." },
              { q: "Arriving for Your Appointment", a: "Please arrive with clean skin, free of makeup. This allows us to maximize your treatment time and results." },
              { q: "Gift Certificates", a: "Gift cards are available starting at $85 and can be purchased directly through our booking page — the perfect gift for any occasion." },
            ].map((item, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-display text-lg tracking-[0.1em] mb-2">{item.q}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-secondary-foreground py-20 px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}>
          <h2 className="font-display text-4xl font-light tracking-[0.1em] mb-8">Let's Get Started</h2>
          <a
            href="https://app.acuityscheduling.com/schedule/5493fd4d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-secondary-foreground/40 text-secondary-foreground px-10 py-4 hover:bg-secondary-foreground hover:text-secondary transition-all duration-500"
          >
            Book Your Appointment
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
