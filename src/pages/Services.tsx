import React, { Suspense, lazy } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowRight, Code2, Rocket, Shield, Gauge, MonitorSmartphone, Search, X, Lightbulb, Palette, Code, Scan, ArrowDownRight, LayoutTemplate } from "lucide-react";
import { Link } from "react-router-dom";

// Add the animation props here
const defaultAnimationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.3 }
};

const Services = () => {
  const customCodedBenefits = [
    
    {
      title: "Custom Design",
      description: "Unique, tailored design that stands out from templates",
      icon: <Code2 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Lightning Fast",
      description: "Superior performance and faster loading times",
      icon: <Rocket className="w-6 h-6 text-primary" />,
    },
    {
      title: "Enhanced Security",
      description: "Custom security measures to protect your business",
      icon: <Shield className="w-6 h-6 text-primary" />,
    },
    {
      title: "Optimized Performance",
      description: "Better SEO optimization possibilities",
      icon: <Gauge className="w-6 h-6 text-primary" />,
    },
    {
      title: "Responsive Design",
      description: "Perfect display on all devices and screen sizes",
      icon: <MonitorSmartphone className="w-6 h-6 text-primary" />,
    },
    {
      title: "SEO Ready",
      description: "Built-in SEO best practices for better visibility",
      icon: <Search className="w-6 h-6 text-primary" />,
    },


    
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Strategy",
      description: "We deep dive into your business goals, target audience, and requirements to create a comprehensive development strategy.",
      details: ["Business analysis", "User research", "Technical planning", "Project roadmap"],
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      image: "/lovable-uploads/A1.webp"
    },
    {
      step: 2,
      title: "Design & UX",
      description: "Our designers create beautiful, intuitive interfaces that reflect your brand identity and delight your users.",
      details: ["Wireframing", "UI/UX design", "Brand integration", "Design system"],
      icon: <Palette className="w-8 h-8 text-primary" />,
      image: "/lovable-uploads/A4.webp"
    },
    {
      step: 3,
      title: "Development",
      description: "Expert developers bring your website to life using cutting-edge technologies and best practices.",
      details: ["Clean code", "Modern frameworks", "Performance optimization", "Security measures"],
      icon: <Code className="w-8 h-8 text-primary" />,
      image: "/lovable-uploads/A6.jpg"
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Rigorous testing across devices and browsers ensures a flawless launch.",
      details: ["Quality assurance", "Cross-browser testing", "Performance testing", "Security audit"],
      icon: <Scan className="w-8 h-8 text-primary" />,
      image: "/lovable-uploads/A7.jpg"
    },
  ];

  const comparisonPoints = [
    {
      feature: "Design Customization",
      custom: { available: true, detail: "Full creative control and unique design" },
      builder: { available: false, detail: "Limited to template modifications" },
      icon: <Code2 className="w-6 h-6" />
    },
    {
      feature: "Performance",
      custom: { available: true, detail: "Optimized code for maximum speed" },
      builder: { available: false, detail: "Slower due to generic code" },
      icon: <Gauge className="w-6 h-6" />
    },
    {
      feature: "SEO Control",
      custom: { available: true, detail: "Complete control over SEO elements" },
      builder: { available: false, detail: "Basic SEO features only" },
      icon: <Search className="w-6 h-6" />
    },
    {
      feature: "Scalability",
      custom: { available: true, detail: "Unlimited growth potential" },
      builder: { available: false, detail: "Platform limitations" },
      icon: <Rocket className="w-6 h-6" />
    },
    {
      feature: "Custom Features",
      custom: { available: true, detail: "Any functionality you need" },
      builder: { available: false, detail: "Limited to platform features" },
      icon: <MonitorSmartphone className="w-6 h-6" />
    },
    {
      feature: "Ownership",
      custom: { available: true, detail: "Full ownership of code" },
      builder: { available: false, detail: "Platform-dependent" },
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section with Random Background */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-32 pb-20 relative"
      >
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/A5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-primary/25 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Custom Website Development
            </h1>
            <p className="text-xl text-white/90 mb-12">
              Transform your online presence with a custom-built website that perfectly 
              represents your brand and drives results.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Crafting Digital Excellence Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              Crafting Digital Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Elevating your digital presence with modern solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="h-[280px] bg-[#F8F9FC] rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 bg-gradient-to-br from-[#1B2D43] to-[#4472A9]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Modern Technology</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built with cutting-edge frameworks and technologies for optimal performance and security.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group"
            >
              <div className="h-[280px] bg-[#F8F9FC] rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 bg-gradient-to-br from-[#1B2D43] to-[#4472A9]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">Lightning Fast</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Optimized for speed with lightning-fast load times and smooth user experiences.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group"
            >
              <div className="h-[280px] bg-[#F8F9FC] rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 bg-gradient-to-br from-[#1B2D43] to-[#4472A9]" />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">SEO Optimized</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enhanced visibility with built-in SEO best practices and optimization.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


{/* Comparison Section */}
<section className="py-24 bg-gray-900 relative overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
<div className="relative inline-block">
  <span className="px-6 py-3 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full text-primary text-lg font-semibold mb-4 inline-block backdrop-blur-sm border border-primary/20 shadow-lg shadow-primary/10">
    Compare & Choose
    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-primary rounded-full"></span>
  </span>
</div>
      <h2 className="text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
        Custom Development vs Builders
      </h2>
      <p className="text-xl text-gray-400">
        Make an informed choice for your digital success
      </p>
    </motion.div>

    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Feature Categories Column */}
        <div className="hidden lg:block pt-20">
        {comparisonPoints.map((point, index) => (
  <motion.div
    key={`point-${index}`}
    {...defaultAnimationProps}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="mb-16 last:mb-0"
  >
              <div className="flex items-center gap-4 group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
  point.feature === "Design Customization" ? "bg-purple-500/10 group-hover:bg-purple-500/20" :
  point.feature === "Performance" ? "bg-blue-500/10 group-hover:bg-blue-500/20" :
  point.feature === "SEO Control" ? "bg-green-500/10 group-hover:bg-green-500/20" :
  point.feature === "Scalability" ? "bg-orange-500/10 group-hover:bg-orange-500/20" :
  point.feature === "Custom Features" ? "bg-pink-500/10 group-hover:bg-pink-500/20" :
  "bg-yellow-500/10 group-hover:bg-yellow-500/20"
}`}>
  <div className={`${
    point.feature === "Design Customization" ? "text-purple-500" :
    point.feature === "Performance" ? "text-blue-500" :
    point.feature === "SEO Control" ? "text-green-500" :
    point.feature === "Scalability" ? "text-orange-500" :
    point.feature === "Custom Features" ? "text-pink-500" :
    "text-yellow-500"
  }`}>
    {point.icon}
  </div>
</div>
                <h3 className="text-lg font-medium text-white group-hover:text-primary transition-colors duration-300">
                  {point.feature}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Development Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-4 -mr-4">
              <div className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-full shadow-lg shadow-green-500/20">
                Recommended
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Custom Development</h3>
                <p className="text-primary">Premium Solution</p>
              </div>
            </div>

            <div className="space-y-8">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group/item"
                >
                  <div className="lg:hidden mb-2 text-primary text-lg font-medium">{point.feature}</div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-primary/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover/item:text-white transition-colors duration-300">
                        {point.custom.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Website Builders Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-700/20 to-gray-700/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/20 group-hover:border-gray-700/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <LayoutTemplate className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-300 mb-1">Website Builders</h3>
                <p className="text-gray-500">Basic Solution</p>
              </div>
            </div>

            <div className="space-y-8">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group/item"
                >
                  <div className="lg:hidden mb-2 text-gray-400 text-lg font-medium">{point.feature}</div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
                    <div className="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center mt-1 group-hover/item:scale-110 transition-transform duration-300">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 group-hover/item:text-gray-300 transition-colors duration-300">
                        {point.builder.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-16"
      >
        <Link 
          to="/contact"
          className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-xl hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:-translate-y-1 group"
        >
          <span className="text-lg font-medium">Start Your Custom Project</span>
          <ArrowDownRight className="ml-2 w-6 h-6 group-hover:rotate-45 transition-transform duration-300" />
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      {/* Development Process Section */}

      <section className="py-20 bg-white relative overflow-hidden">

       <div className="absolute inset-0 bg-[url('/lovable-uploads/df946fcc-87b6-4e71-be4a-9c749fbd7d15.png')] bg-cover bg-center opacity-5" /> 
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">
              A proven approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {developmentProcess.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20 last:mb-0`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {phase.icon}
                    </div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {phase.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-primary/5 p-3 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>


                <div className="w-full md:w-1/2">
  <div className={`h-full min-h-[300px] rounded-2xl relative overflow-hidden group transform transition-transform duration-300 hover:scale-[1.02] ${index % 2 === 0 ? 'rounded-br-[100px]' : 'rounded-bl-[100px]'}`}>
    {/* Background gradient - now behind the image */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
    
    {/* Image container - now covers the full area */}
    <div className="relative z-10 w-full h-full">
      <img 
        src={phase.image} 
        alt={phase.title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>
</div>

</motion.div>

))}

</div>
</div>
</section>




      <Footer />
    </div>
  );
};

export default Services;
