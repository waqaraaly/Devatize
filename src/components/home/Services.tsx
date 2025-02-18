import { Code2, Smartphone, Globe, Gauge } from "lucide-react";

const services = [
  {
    icon: <Code2 size={40} />,
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance.",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <Globe size={40} />,
    title: "E-Commerce",
    description:
      "Scalable online stores with secure payment processing and inventory management.",
  },
  {
    icon: <Gauge size={40} />,
    title: "Performance",
    description:
      "Speed optimization and performance tuning for existing applications.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;