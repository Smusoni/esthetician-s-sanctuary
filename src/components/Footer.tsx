import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 sm:py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-10 sm:mb-12">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-light tracking-[0.12em] sm:tracking-[0.2em] uppercase mb-4 sm:mb-6">
              Naji Beauty
            </h3>
            <p className="font-body text-sm leading-relaxed opacity-70">
              Licensed esthetician providing luxury skincare treatments, facials, waxing, and permanent makeup services.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 opacity-50">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/services" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Services</Link>
              <Link to="/gallery" className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity">Gallery</Link>
              <a
                href="https://app.acuityscheduling.com/schedule/5493fd4d"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                Book Online
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 opacity-50">
              Policies
            </h4>
            <div className="flex flex-col gap-3 font-body text-sm opacity-70">
              <p>24-hour cancellation policy</p>
              <p>Patch tests required for certain services</p>
              <p>Consultations available virtually</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs opacity-40 tracking-widest uppercase">
            © {new Date().getFullYear()} Naji Beauty. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
