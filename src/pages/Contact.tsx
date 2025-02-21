import Navigation from "../components/Navigation";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    // ... rest of your handleSubmit code remains the same
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        // Added pt-24 for navigation bar spacing and adjusted min-height calculation
        className="relative pt-24 min-h-[calc(100vh-64px)] flex items-center"
        style={{
          backgroundImage: `url('/lovable-uploads/fa12b84c-20b5-47c5-ba33-d706cc471312.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark/5" />
        {/* Removed py-16 from container since we have pt-24 above */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-lg mb-12 text-gray-200">
                Ready to transform your digital presence? We're here to help bring your vision to life.
                Reach out to us and let's create something amazing together.
              </p>
              <div className="space-y-8">
                {/* Contact information sections remain the same */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-gray-300">FIFTH FLOOR 63-66HATTON GARHATTON</p>
                    <p className="text-gray-300">LONDON,UNITED KINGDOM</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-300">Devatize.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-300">+44 7401 775098</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm onSubmit={handleSubmit} />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;