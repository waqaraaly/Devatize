
import { motion } from "framer-motion";
import { Code2, Zap, Shield, Gauge, Workflow, Users, Layout, BadgeCheck } from "lucide-react";

const CustomDevelopment = () => {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "100% Custom Code",
      description: "Every project is built from scratch with clean, efficient code tailored to your needs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with load times that keep your visitors engaged."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and thoroughly tested for reliability."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Clean code structure that search engines love, helping your site rank better."
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Future-proof design that grows with your business needs."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Perfect display across all devices and screen sizes."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Money Back Guarantee",
      description: "100% satisfaction guaranteed or your money back, no questions asked."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Custom Development, Superior Results
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/hp.webp"
                alt="Custom Development"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent backdrop-blur-[1px]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <p className="text-gray-600 text-lg leading-relaxed">
                We don't believe in shortcuts or templates. Every project is an opportunity to create 
                something unique that perfectly matches your vision and requirements. Our commitment
                to excellence ensures your success in the digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-primary/90 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment;
