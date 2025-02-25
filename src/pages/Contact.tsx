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
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        toast({
          title: "Failed to send message.",
          description: "We'll fix this soon.",
        });
      }
    } catch (error) {
      console.error("API request failed:", error);
      toast({
        title: "Failed to send message.",
        description: "We'll fix this soon.",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div
        className="relative min-h-[calc(100vh-64px)] flex items-center"
        style={{
          backgroundImage: `url('/lovable-uploads/cont.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-dark/5" />
        <div className="container relative z-10 w-full px-3 md:px-6 py-16 pt-24 md:pt-28">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Get in Touch</h1>
              <p className="text-base md:text-lg mb-8 md:mb-12 text-gray-200">
                Ready to transform your digital presence? We're here to help bring your vision to life.
                Reach out to us and let's create something amazing together.
              </p>
              <div className="space-y-6 md:space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Our Office</h3>
                    <p className="text-sm md:text-base text-gray-300">FIFTH FLOOR 63-66 HATTON GAR, HATTON</p>
                    <p className="text-sm md:text-base text-gray-300">LONDON, UNITED KINGDOM</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Email Us</h3>
                    <p className="text-sm md:text-base text-gray-300">Devatize.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-white/10 p-3 rounded-xl">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Call Us</h3>
                    <p className="text-sm md:text-base text-gray-300">+44 7401 775098</p>
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