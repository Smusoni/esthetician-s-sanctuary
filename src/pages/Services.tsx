import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import { fadeUp } from "@/lib/animations";
import { mockImages } from "@/lib/mockImages";

const servicesHero = mockImages.servicesHero;

interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  description?: string;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Consultations",
    services: [
      { name: "Virtual Consultation", duration: "30 min", price: "$10", description: "Not sure what service is best for you? Let the professionals aid in your decision making!" },
    ],
  },
  {
    title: "Facials",
    services: [
      { name: "Express Facial", duration: "30 min", price: "$50", description: "A quick yet luxurious treatment to refresh and brighten your skin. Includes cleanse, exfoliation, and botanical serum infusion." },
      { name: "Radiance Facial", duration: "1 hour", price: "$85", description: "Clinical-grade treatment powered by four advanced forms of vitamin C. Designed to resurface, brighten, and restore." },
      { name: "Gentleman's Facial", duration: "1 hour", price: "$95", description: "Crafted for the modern man. Deep cleansing, exfoliation, and hydrating finishing treatment." },
      { name: "Dermaplane Glow Facial", duration: "1 hour", price: "$120", description: "Luxe dermaplaning experience. Skilled exfoliation removes buildup and peach fuzz for luminous skin." },
      { name: "Dermalogica Custom Peel", duration: "1 hour", price: "$130", description: "Professional-grade peel tailored to your skin's unique needs using Dermalogica's advanced technology." },
      { name: "UltraBright Peel", duration: "1 hour", price: "$130", description: "Gentle brightening peel with lactic acid and botanical extracts to even skin tone." },
      { name: "Pro Power Clear Peel", duration: "1 hour", price: "$130", description: "Ideal for acne-prone skin. Salicylic, mandelic, and malic acids to clear blemishes." },
      { name: "Advanced Renewal Peel", duration: "1 hour", price: "$130", description: "Targets fine lines and dullness with glycolic acid and antioxidants." },
      { name: "AGEreversal Peel", duration: "1 hour", price: "$130", description: "Potent peel with TCA and peptides to reduce deep wrinkles and improve firmness." },
    ],
  },
  {
    title: "PMU",
    services: [
      { name: "Powder Brows", duration: "2.5 hours", price: "$350", description: "Permanent makeup using a digital machine. Creates a shaded look. Results last 1-3 years." },
      { name: "Powder Brow 1-Year Touch-Up", duration: "1 hour", price: "$150" },
      { name: "Powder Brow 4-6 Week Touch-Up", duration: "1 hour", price: "Included" },
    ],
  },
  {
    title: "Tinting & Brows",
    services: [
      { name: "Brow Tint & Wax", duration: "20 min", price: "$30" },
      { name: "Lash Lift & Tint", duration: "50 min", price: "$65" },
      { name: "Brow Lamination", duration: "30 min", price: "$50" },
    ],
  },
  {
    title: "Waxing",
    services: [
      { name: "Lip Wax", duration: "15 min", price: "$15" },
      { name: "Chin Wax", duration: "15 min", price: "$15" },
      { name: "Full Face Wax", duration: "30 min", price: "$55" },
      { name: "Bikini Wax", duration: "30 min", price: "$45" },
      { name: "Brazilian Wax", duration: "50 min", price: "$65" },
      { name: "Underarm Wax", duration: "20 min", price: "$35" },
      { name: "Arm Wax", duration: "45 min", price: "$50" },
      { name: "Half Leg Wax", duration: "30 min", price: "$45" },
      { name: "Full Leg Wax", duration: "1 hour", price: "$60" },
      { name: "Chest Wax", duration: "45 min", price: "$50" },
      { name: "Back Wax", duration: "1 hour", price: "$50" },
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PageHero image={servicesHero} title="Services" subtitle="Luxury Treatments Tailored to You" />

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          {serviceCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={0}
              variants={fadeUp}
              className="mb-14 sm:mb-16 md:mb-20"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.08em] md:tracking-[0.15em] mb-8 sm:mb-10 text-center">
                {category.title}
              </h2>
              <div className="space-y-0">
                {category.services.map((service, si) => (
                  <motion.div
                    key={service.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={si * 0.5}
                    variants={fadeUp}
                    className="border-b border-border py-6 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-display text-lg md:text-xl tracking-[0.04em] md:tracking-[0.05em]">
                          {service.name}
                        </h3>
                        {service.description && (
                          <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed max-w-lg">
                            {service.description}
                          </p>
                        )}
                      </div>
                      <div className="text-left sm:text-right shrink-0">
                        <span className="font-display text-lg text-gold">{service.price}</span>
                        <p className="font-body text-xs text-muted-foreground mt-1">{service.duration}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} variants={fadeUp}
            className="text-center mt-8"
          >
            <a
              href="https://app.acuityscheduling.com/schedule/5493fd4d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.3em] uppercase bg-secondary text-secondary-foreground px-7 sm:px-12 py-3 sm:py-4 hover:bg-foreground hover:text-background transition-all duration-500"
            >
              Book Your Treatment
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
