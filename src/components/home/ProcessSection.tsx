import React from "react";

const processSteps = [
  {
    number: "1",
    title: "Briefing and Research",
    description:
      "We align user needs and business goals through data-driven insights, creating strategic paths to success",
  },
  {
    number: "2",
    title: "UX & Interaction Design",
    description:
      "We simplify UX to solve user problems, minimize effort, and enhance brand communication, unlocking your product's value for success.",
  },
  {
    number: "3",
    title: "UI & Front-end Development",
    description:
      "Work with a top-tier creative team to make every user interaction memorable, building genuine emotional connections with your audience.",
  },
  {
    number: "4",
    title: "Core Development",
    description:
      "With the right team, making informed decisions about user needs, culture, behaviors, tech constraints, aesthetics, and usability becomes seamless.",
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Custom Designs Process
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Elementum pulvinar facilisis
            enim viverra tortor diam nunc. Vitae at malesuada dolor vitae dolor mi
            eu sit. Pretium malesuada sit purus donec.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <img
            src="/lovable-uploads/c0ddade6-bf20-498f-907f-8d54a1737420.png"
            alt="Team Collaboration Illustration"
            className="max-w-2xl w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {processSteps.map((step) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-[#1A1F2C] text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;