import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";

const PricingPage = () => {
  const [activeCard, setActiveCard] = useState<'monthly' | 'lumpsum'>('monthly');
  
  const monthlyFeatures = [
    "Design and Development",
    "Basic SEO setup",
    "Mobile-Responsive & Optimized for All Devices",
    "Includes Hosting",
    "5 Pages Included (£25 per page after 5)",
    "Add a Blog (£100 additional)",
    "Unlimited Edits",
    "Lifetime Updates",
  ];

  const lumpSumFeatures = [
    "Design and Development",
    "Basic SEO setup",
    "Mobile-Responsive & Optimized for All Devices",
    "Includes Hosting",
    "5 Pages Included (£25 per page after 5)",
    "Add a Blog (£100 additional)",
    "Unlimited Edits",
    "Lifetime Updates",
    "Full Source Code Ownership",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1B2D43] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={activeCard === 'monthly' ? 'default' : 'outline'}
              onClick={() => setActiveCard('monthly')}
              className={`px-8 relative ${
                activeCard === 'monthly' 
                ? 'bg-[#1B2D43] text-white hover:bg-[#1B2D43]/90' 
                : 'border-[#1B2D43] text-[#1B2D43] hover:bg-[#1B2D43]/5'
              }`}
            >
              Monthly
            </Button>
            <Button
              variant={activeCard === 'lumpsum' ? 'default' : 'outline'}
              onClick={() => setActiveCard('lumpsum')}
              className={`px-8 relative ${
                activeCard === 'lumpsum' 
                ? 'bg-[#1B2D43] text-white hover:bg-[#1B2D43]/90' 
                : 'border-[#1B2D43] text-[#1B2D43] hover:bg-[#1B2D43]/5'
              }`}
            >
              Lump sum
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Pricing Cards Section */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Monthly Plan */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: activeCard === 'monthly' ? 1 : 0.7,
                x: 0,
                scale: activeCard === 'monthly' ? 1 : 0.95
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-[#1B2D43]/10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B2D43] to-[#4472A9]" />
                <CardHeader className="space-y-2 text-center pt-8">
                  <h3 className="text-2xl font-bold text-[#1B2D43]">Monthly Plan</h3>
                  <p className="text-gray-600">Stay flexible with no long-term contracts</p>
                  <div className="pt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#1B2D43] to-[#4472A9] bg-clip-text text-transparent">£120</span>
                    <span className="text-gray-600 ml-2">/month</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {monthlyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-0.5 rounded-full bg-gradient-to-r from-[#1B2D43] to-[#4472A9]">
                          <div className="bg-white p-1 rounded-full">
                            <Check className="text-[#1B2D43] h-4 w-4" />
                          </div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full bg-gradient-to-r from-[#1B2D43] to-[#4472A9] hover:from-[#1B2D43]/90 hover:to-[#4472A9]/90 text-white font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Lump sum Plan */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: activeCard === 'lumpsum' ? 1 : 0.7,
                x: 0,
                scale: activeCard === 'lumpsum' ? 1 : 0.95
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-b from-white to-gray-50 border-[#4472A9]">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1B2D43] to-[#4472A9]" />
                <CardHeader className="space-y-2 text-center pt-8">
                  <h3 className="text-2xl font-bold text-[#1B2D43]">Lump sum Plan</h3>
                  <p className="text-gray-600">One-time payment for complete service</p>
                  <div className="pt-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#1B2D43] to-[#4472A9] bg-clip-text text-transparent">£1150</span>
                    <span className="text-gray-600 ml-2">one-time</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-8">
                  <ul className="space-y-4">
                    {lumpSumFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 p-0.5 rounded-full bg-gradient-to-r from-[#1B2D43] to-[#4472A9]">
                          <div className="bg-white p-1 rounded-full">
                            <Check className="text-[#1B2D43] h-4 w-4" />
                          </div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button className="w-full bg-gradient-to-r from-[#1B2D43] to-[#4472A9] hover:from-[#1B2D43]/90 hover:to-[#4472A9]/90 text-white font-semibold py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;