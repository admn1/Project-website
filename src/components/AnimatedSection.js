"use client";

import { motion } from 'framer-motion';

export default function AnimatedSection({ children, delay = 0, direction = 'up', className = "" }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0, 0.2, 1],
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={variants}
      className={`aos ${className}`}
    >
      {children}
    </motion.div>
  );
}
