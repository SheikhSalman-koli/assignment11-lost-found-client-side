import React from 'react';
import { motion } from "framer-motion";

// whileHover = {{ scale: 1.1 }} 
// whileTap = {{ scale: 0.8 }}
// transition = {{ duration: 0.5 }}

const Extra1 = () => {
  return (
    <div className="w-full bg-base-100 p-8 max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Lost & Found Safety Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Verify ownership before returning items.</motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Avoid sharing personal information publicly.</motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Report valuable items to local authorities.</motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Take clear photos of found items.</motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Use platform messaging to communicate.</motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-4 shadow border-1 border-base-300 rounded-lg">✅ Stay safe when meeting someone to exchange items.</motion.div>
      </div>
    </div>
  );
};

export default Extra1;