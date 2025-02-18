
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Devatize</h3>
            <p className="text-white/80">
              Transforming ideas into exceptional digital experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/about#faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              <li>FIFTH FLOOR 63-66HATTON GARHATTON</li>
              <li>LONDON,UNITED KINGDOM</li>
              <li>Phone: +44 7401 775098</li>
              <li>Email: Devatize@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/80">
          <p>&copy; {new Date().getFullYear()} Devatize. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
