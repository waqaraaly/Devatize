import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Shield } from "lucide-react";

const BusinessAttributes = () => {
  const attributes = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Expand your business beyond geographical boundaries and reach customers worldwide 24/7.",
      bgColor: "bg-[#F2FCE2]",
      iconColor: "text-primary"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Increased Credibility",
      description: "A professional website builds trust and legitimacy for your business in the digital age.",
      bgColor: "bg-[#FEF7CD]",
      iconColor: "text-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Better Customer Experience",
      description: "Provide seamless information access and interaction opportunities for your customers.",
      bgColor: "bg-[#FEC6A1]",
      iconColor: "text-primary"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Competitive Edge",
      description: "Stand out from competitors with a unique, custom-coded website that reflects your brand.",
      bgColor: "bg-[#E5DEFF]",
      iconColor: "text-primary"
    }
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative inline-block">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
                Why Your Business Needs a Website
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary/10 transform -skew-x-12"></div>
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how a custom-coded website can transform your business presence and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {attributes.map((attribute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-6 group"
              >
                <div className={`flex-shrink-0 w-16 h-16 ${attribute.bgColor} rounded-full flex items-center justify-center ${attribute.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                  {attribute.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {attribute.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {attribute.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="max-w-4xl mx-auto">
              <img 
                src="/lovable-uploads/CVC.svg" 
                alt="Company Vision Chart" 
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BusinessAttributes;