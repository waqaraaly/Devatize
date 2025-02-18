
import { motion } from "framer-motion";
import { Paintbrush, Wrench, Hammer, Trees, Workflow, Shield, TabletSmartphone } from "lucide-react";

const HomeServices = () => {
  const services = [
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Interior Design",
      description: "Transform your living spaces with professional interior design services.",
      color: "bg-[#F2FCE2]",
      textColor: "text-[#4B9C0C]"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Home Repairs",
      description: "Expert maintenance and repair services for all your home needs.",
      color: "bg-[#FEF7CD]",
      textColor: "text-[#B59B24]"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Renovation",
      description: "Complete home renovation and remodeling services.",
      color: "bg-[#FEC6A1]",
      textColor: "text-[#C85D20]"
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Landscaping",
      description: "Professional landscaping and garden maintenance services.",
      color: "bg-[#E5DEFF]",
      textColor: "text-[#6B4EE6]"
    }
  ];

  const features = [
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "Streamlined Booking",
      description: "Easy online scheduling and appointment management"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Professionals",
      description: "All service providers are thoroughly vetted and certified"
    },
    {
      icon: <TabletSmartphone className="w-6 h-6" />,
      title: "Mobile Access",
      description: "Book and manage services from any device"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Home Services Made Simple
            <div className="h-1.5 bg-primary/10 w-40 mx-auto mt-2 rounded-full" />
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connect with trusted local service providers for all your home maintenance needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <div className={`p-8 ${service.color} group-hover:scale-[0.98] transition-transform duration-300`}>
                <div className={`${service.textColor} mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
