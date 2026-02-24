import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import galleryHero from "@/assets/gallery-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import aboutImage from "@/assets/about-beauty.jpg";
import heroImage from "@/assets/hero-beauty.jpg";

import { fadeUp } from "@/lib/animations";

const images = [
  { src: gallery1, alt: "Luxury skincare products", category: "Products" },
  { src: gallery2, alt: "Facial treatment in progress", category: "Facials" },
  { src: gallery3, alt: "Lash and brow work", category: "Brows & Lashes" },
  { src: gallery4, alt: "Treatment room", category: "Studio" },
  { src: aboutImage, alt: "Spa treatment experience", category: "Facials" },
  { src: heroImage, alt: "Glowing skin results", category: "Results" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <PageHero image={galleryHero} title="Gallery" subtitle="A Glimpse Into Our World" />

      <section className="py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="break-inside-avoid overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-500 flex items-end p-6">
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-secondary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 font-body text-xs tracking-[0.2em] uppercase text-secondary-foreground opacity-60 hover:opacity-100"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
