import React from 'react';
import { motion } from 'framer-motion';

export default function Arrival() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6
      }
    })
  };

  const texts = [
    "Exclusive products new arrival.",
    "ORGANIC COFFEE.",
    "Special Blend",
    "Fresh !",
    "Breakfast Product On sale",
    "UP TO 50%"
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {texts.map((text, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontSize: '24px',
            marginBottom: '10px',
            fontWeight: index === 1 ? 'bold' : 'normal', // Example of making ORGANIC COFFEE bold
            color: index === 3 ? 'green' : 'black' // Example of making Fresh! green
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
