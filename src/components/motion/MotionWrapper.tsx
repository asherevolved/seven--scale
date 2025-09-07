import { motion } from "framer-motion";
import { useInView } from "@/hooks/useMotion";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

const MotionWrapper = ({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up",
  duration = 0.6 
}: MotionWrapperProps) => {
  const [ref, isInView] = useInView(0.2);

  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      ref={ref as any}
      className={className}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0 
      } : {
        opacity: 0,
        ...directionVariants[direction]
      }}
      transition={{ 
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;