import React from 'react';
import { motion } from "framer-motion";

const Extra2 = () => {
  return (
    <div className="w-full bg-[#fff9ec] p-4 lg:p-8  max-w-11/12 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          👜 "I found my wallet in 2 days using this platform!" — Fatima
        </motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          📱 "My lost phone was returned. Thank you!" — Rahim
        </motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          🐶 "Our dog came home safe thanks to honest people!" — Karim
        </motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          🎒 "I recovered my lost backpack from the bus terminal. Thanks to the kind person who reported it!" — Junaid
        </motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          🔑 "Someone found my lost house keys and returned them safely through this platform!" — Ayesha
        </motion.div>
        <motion.div whileHover = {{ scale: 1.1 }}  whileTap = {{ scale: 0.8 }} className="p-6 bg-yellow-100 rounded-lg shadow">
          🐱 "My missing cat was found and safely returned after being lost for 3 days. Forever grateful!" — Imran
        </motion.div>
      </div>
    </div>
  );
};

export default Extra2;