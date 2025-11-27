import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-3 font-serif tracking-wide transition-all duration-300 text-sm md:text-base uppercase";
  
  const variants = {
    primary: "bg-gold-accent text-white hover:bg-white hover:text-gold-accent border border-transparent hover:border-gold-accent shadow-lg",
    outline: "bg-transparent text-white border border-white hover:bg-white hover:text-dark-charcoal",
    ghost: "bg-transparent text-wine-red hover:text-gold-accent font-bold"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;