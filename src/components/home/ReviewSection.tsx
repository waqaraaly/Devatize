
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      business: "Clean & Bright Home Services",
      rating: 5,
      text: "Working with this team transformed our online presence. Our booking rates increased by 150% within just two months of launching our new website!",
      position: "Founder & CEO"
    },
    {
      name: "Michael Rodriguez",
      business: "Elite Plumbing Solutions",
      rating: 5,
      text: "The custom booking system they built for us has completely streamlined our operations. We're saving hours each day on administrative tasks.",
      position: "Owner"
    },
    {
      name: "Emily Chen",
      business: "GreenThumb Landscaping",
      rating: 5,
      text: "Their understanding of the home service industry is exceptional. They didn't just build a website, they built a growth platform for our business.",
      position: "Managing Director"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from home service business owners who transformed their operations with our solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-semibold text-lg text-primary">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.position}</p>
                    <p className="text-xs text-primary/80">{review.business}</p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 flex-shrink-0" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {review.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
