import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard = ({ children, className = "", intensity = 8 }: TiltCardProps) => {
  return (
    <motion.div
      className={`tilt-card ${className}`}
      whileHover={{ 
        scale: 1.02,
        rotateX: intensity * 0.25,
        rotateY: intensity * 0.25,
        z: 8
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center"
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;