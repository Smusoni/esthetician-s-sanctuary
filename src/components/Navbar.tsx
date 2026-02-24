import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-16 md:py-6">
        <Link
          to="/"
          className="font-display text-lg sm:text-xl md:text-2xl font-light tracking-[0.12em] sm:tracking-[0.2em] md:tracking-[0.3em] text-primary-foreground uppercase"
        >
          Naji Beauty
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-xs tracking-[0.25em] uppercase transition-opacity duration-300 text-primary-foreground ${
                location.pathname === item.path ? "opacity-100" : "opacity-60 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://app.acuityscheduling.com/schedule/5493fd4d"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-[0.25em] uppercase text-primary-foreground opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 z-50 p-1"
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-primary-foreground transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-secondary flex items-center justify-center mix-blend-normal px-6"
          >
            <div className="flex flex-col items-center gap-6 text-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-2xl sm:text-3xl tracking-[0.12em] sm:tracking-[0.2em] text-secondary-foreground uppercase"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://app.acuityscheduling.com/schedule/5493fd4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl sm:text-3xl tracking-[0.12em] sm:tracking-[0.2em] text-secondary-foreground uppercase"
                >
                  Book Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
