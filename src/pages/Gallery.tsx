import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

import { fadeUp } from "@/lib/animations";
import { mockImages } from "@/lib/mockImages";

const galleryHero = mockImages.galleryHero;
const gallery1 = mockImages.gallery1;
const gallery2 = mockImages.gallery2;
const gallery3 = mockImages.gallery3;
const gallery4 = mockImages.gallery4;
const aboutImage = mockImages.aboutBeauty;
const heroImage = mockImages.heroBeauty;

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

      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
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
                  <div className="absolute inset-0 bg-secondary/20 sm:bg-secondary/0 group-hover:bg-secondary/30 transition-colors duration-500 flex items-end p-4 sm:p-6">
                    <span className="font-body text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] uppercase text-secondary-foreground opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
            className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4 sm:p-8 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[78vh] sm:max-h-[85vh] object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 font-body text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.2em] uppercase text-secondary-foreground opacity-60 hover:opacity-100"
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
