import { Variants } from "framer-motion";

// Fade In Animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade In Up Animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fade In Down Animation
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale Animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Slide In From Left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Slide In From Right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Card Hover Animation (for interactive cards)
export const cardHover = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Button Hover Animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: {
    scale: 0.98
  }
};

// Stagger Children (for lists and grids)
export const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Item for Stagger
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Rotate In Animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Navbar Animation (for mobile menu)
export const navbarAnimation: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

// Modal/Overlay Animation
export const overlayAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

// Modal Content Animation
export const modalAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

// Utility: Viewport animation config (for scroll-triggered animations)
export const viewportConfig = {
  once: true, // Only animate once
  margin: "0px", // Changed from -100px to fix mobile visibility
  amount: 0.1 // Changed from 0.3 to 0.1 - only 10% needs to be visible (better for mobile)
};
