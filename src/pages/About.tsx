import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Heart, Globe, Building, BookOpen, Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const processSteps = [
    {
      step: "Step 1",
      title: "Quick Questionnaire",
      description: "We'll send you a short, simple questionnaire—fewer than 10 questions—about your business, services, and what makes you unique. Once you fill it out, we take it from there.",
      icon: "📝"
    },
    {
      step: "Step 2",
      title: "Design Preview & Revisions",
      description: "Next, we'll share a live design preview via screen share. You'll have the chance to review, provide feedback, and request changes until it's exactly what you envisioned.",
      icon: "/lovable-uploads/fg.webp"
    },
    {
      step: "Step 3",
      title: "Custom Development & Launch",
      description: "After approval, we bring the design to life with clean, custom-coded development. Before going live, we'll send you a demo link for a final review, ensuring everything is perfect before launch.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section - Updated background opacity */}
      <section className="relative pt-24 pb-12 px-4 overflow-hidden min-h-[400px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("/lovable-uploads/xy.webp")',
          }}
        />
        <div className="absolute inset-0 bg-primary/50"></div>
        <div className="container mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Crafting Digital Excellence
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              We're not just another development agency. We're your partners in turning ambitious ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section with Images */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Meet the Founder</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm Waqar, the founder and lead developer behind Devatize. My journey into web development began with a simple goal creating something meaningful while having the flexibility to be present for my family. Over the years, I honed my skills, learning to build websites the right way custom coded, no shortcuts, no cookie-cutter templates.
                </p>
                <p>
                  What I quickly realized was that many small businesses struggled to get a high quality website without breaking the bank. Some were overcharged for outdated designs, while others simply couldn't afford the massive upfront costs. That's why I built a model that works for them affordable, high quality, and risk free.
                </p>
                <p>
                  With £120/month and a "pay only if you love it" approach, I make sure every business gets a website that truly represents them without the financial stress or compromises. No builders, no fluff just pure, handcrafted code tailored to your success.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/office.webp"
                  alt="Office workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/my.webp"
                  alt="Development process"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#F97316] to-[#D946EF] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Working Process
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Simple, transparent, and effective—here's how we bring your vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connected Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/20 -translate-y-1/2 z-0"></div>

            {processSteps.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:transform hover:scale-105 transition-all duration-300 hover:bg-white/20">
                  <div className="text-4xl mb-4 bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    {typeof process.icon === 'string' && process.icon.startsWith('/') ? (
                      <img src={process.icon} alt="Figma icon" className="w-10 h-10 object-contain" />
                    ) : (
                      process.icon
                    )}
                  </div>
                  <div className="text-sm font-semibold text-white/80 mb-2">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    {process.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Step Number Circle */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How long does it take to build a website?",
                  answer: "Our web development process typically takes 2-3 weeks from initial requirement gathering to launch. This includes understanding the founder's vision, conducting competitor research, designing, developing, and making the website live."
                },
                {
                  question: "What are your pricing and payment terms?",
                  answer: "We offer a monthly subscription model of $150 per month for a 6-month contract, payable on a monthly basis. This package includes unlimited edits, ongoing support, and maintenance throughout the contract period."
                },
                {
                  question: "Can a business cancel the contract before 6 months?",
                  answer: "Yes, businesses are free to cancel their contract at any time. However, full access to the website’s source code will only be granted upon completion of the 6-month contract."
                },
                {
                  question: "What is the difference between the Lump Sum Plan and the Monthly Plan?",
                  answer: "The main difference between the Lump Sum Plan and the Monthly Plan lies in the contract terms and support options. With the Lump Sum Plan, there is no contract required, and you receive full access to the source code. You have the flexibility to either opt for our support and maintenance services at an additional cost of £20 per month or manage support independently if you prefer. On the other hand, the Monthly Plan requires signing a 6-month contract, with support and maintenance services included as part of the plan. This allows you to choose between a one-time payment with optional support or a subscription model with ongoing services."
                },
                
                {
                  question: "Will my website be mobile-friendly and SEO-optimized?",
                  answer: "Absolutely! We ensure that every website we develop is fully responsive, providing an optimal experience across all devices. Additionally, we implement basic SEO best practices to improve search engine visibility and ranking."
                },
                {
                  question: "What types of businesses do you work with?",
                  answer: "We specialize in developing websites for small to medium-sized businesses, particularly those operating in home services niches such as cleaning, plumbing, electrical work, HVAC, landscaping, and more. Our solutions are tailored to help service-based businesses establish a strong online presence and attract more customers."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-primary/10 px-6"
                >
                  <AccordionTrigger className="text-lg font-medium text-primary hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
