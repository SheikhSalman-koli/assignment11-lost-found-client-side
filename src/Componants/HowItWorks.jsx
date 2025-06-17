import React from 'react';
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: "📝",
      title: "Post Item",
      description: "Submit details of your lost or found item easily through our form."
    },
    {
      icon: "🔎",
      title: "Verification",
      description: "Our team reviews and verifies the information to ensure safety and trust."
    },
    {
      icon: "🤝",
      title: "Connect",
      description: "The rightful owner and finder can safely communicate through the platform."
    },
    {
      icon: "🎉",
      title: "Reunite",
      description: "Lost items are safely returned to their owners."
    }
  ];

  return (
    <div className="w-full bg-[#f0f4f8] py-12  max-w-11/12 mx-auto">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-[#1b3a4b] text-center">🛠️ How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              key={index} className="p-6 bg-white rounded-lg shadow border border-gray-200 text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;