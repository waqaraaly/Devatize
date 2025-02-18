
import { motion } from "framer-motion";

const BusinessStats = () => {
  const testimonials = [
    {
      stat: "71%",
      description: "of small business owners say their website has been crucial to their success",
      source: "Top Design Firms, 2023"
    },
    {
      stat: "88%",
      description: "of consumers research online before making a purchase in-store",
      source: "Forbes"
    },
    {
      stat: "75%",
      description: "of consumers judge a company's credibility based on their website design",
      source: "Stanford Web Credibility Research"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FA5053]">The Impact of Professional Websites</h2>
          <p className="text-[#8E9196] max-w-2xl mx-auto">
            Real statistics that show how a professional website can transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-[#FA5053]"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FA5053] mb-4">{item.stat}</div>
              <p className="text-[#8E9196] mb-4">{item.description}</p>
              <p className="text-sm text-[#8E9196] italic">Source: {item.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessStats;
