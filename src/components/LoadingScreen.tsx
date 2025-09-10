import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Auto-complete loading after video ends or after 5 seconds max
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const handleVideoEnd = () => {
    onLoadingComplete();
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Loading Content */}
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: videoLoaded ? 1 : 0, scale: videoLoaded ? 1 : 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src="/pixelcut-export.png" 
              alt="Seven Scale Logo" 
              className="w-24 h-24 mx-auto rounded-3xl glow-primary"
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="font-heading font-semibold text-4xl md:text-5xl text-white mb-4"
          >
            Seven Scale
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;