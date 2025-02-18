
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-full my-4 px-6">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent"
            >
              Devatize
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              <Link
                to="/"
                className="px-4 py-2 rounded-full text-dark hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                Home
              </Link>
              
{/* Services Dropdown - Fixed version */}
<div className="relative">
  <div 
    className="relative"
    onMouseEnter={() => setIsServicesOpen(true)}
    onMouseLeave={() => setIsServicesOpen(false)}
  >
    <Link
      to="/services"
      className="px-4 py-2 rounded-full text-dark hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center"
    >
      Services
      <ChevronDown className="ml-1 h-4 w-4" />
    </Link>
    
    {isServicesOpen && (
      <div className="absolute top-full left-0 pt-2">
        <div className="w-48 bg-white rounded-xl shadow-lg py-2">
          <Link
            to="/services"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/10 hover:text-primary"
          >
            Website Development
          </Link>
        </div>
      </div>
    )}
  </div>
</div>

              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 rounded-full text-dark hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-md shadow-lg rounded-2xl">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-3 rounded-xl text-dark hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/services"
                className="px-4 py-3 rounded-xl text-dark hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
