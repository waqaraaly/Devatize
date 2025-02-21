import { motion } from "framer-motion";
import { Smartphone, Zap, Edit3, Clock, Search, DollarSign } from "lucide-react";

const WebsiteFeatures = () => {
  const features = [
    { icon: <Smartphone />, title: "Mobile Responsive", color: "#0EA5E9" },
    { icon: <Zap />, title: "Optimized Page Speed", color: "#33C3F0" },
    { icon: <Edit3 />, title: "Unlimited Edits", color: "#0EA5E9" },
    { icon: <Clock />, title: "24/7 Support", color: "#33C3F0" },
    { icon: <Search />, title: "Basic SEO", color: "#0EA5E9" },
    { icon: <DollarSign />, title: "Money Back Guarantee", color: "#33C3F0" }
  ];

  return (
    <section className="py-20 bg-[#F1F0FB]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-gray-600">Comprehensive features for your online success</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div 
                  className="mb-4 text-2xl"
                  style={{ color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteFeatures;