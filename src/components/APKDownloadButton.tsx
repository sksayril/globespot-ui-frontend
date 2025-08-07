import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, CheckCircle } from 'lucide-react';

interface APKDownloadButtonProps {
  className?: string;
}

const APKDownloadButton: React.FC<APKDownloadButtonProps> = ({ className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link element to trigger download
      const link = document.createElement('a');
      link.href = 'https://goalsbot.com/Goalsbot.apk';
      link.download = 'Goalsbot.apk';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Simulate download completion
      setTimeout(() => {
        setIsDownloading(false);
        setIsDownloaded(true);
        
        // Reset after 3 seconds
        setTimeout(() => {
          setIsDownloaded(false);
        }, 3000);
      }, 2000);
      
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`
          relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 
          hover:from-green-600 hover:to-green-700 
          text-white px-8 py-4 rounded-2xl font-semibold text-lg 
          shadow-lg hover:shadow-xl transition-all duration-300 
          flex items-center justify-center space-x-3
          ${isDownloading ? 'cursor-not-allowed opacity-75' : 'cursor-pointer'}
          ${isDownloaded ? 'bg-gradient-to-r from-green-600 to-green-700' : ''}
        `}
      >
        {/* Background animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20"
          animate={{
            x: isDownloading ? ['0%', '100%'] : '0%',
          }}
          transition={{
            duration: isDownloading ? 2 : 0,
            repeat: isDownloading ? Infinity : 0,
            ease: 'linear',
          }}
        />
        
        {/* Icon */}
        <div className="relative z-10">
          {isDownloaded ? (
            <CheckCircle className="h-6 w-6" />
          ) : isDownloading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Download className="h-6 w-6" />
            </motion.div>
          ) : (
            <Smartphone className="h-6 w-6" />
          )}
        </div>
        
        {/* Text */}
        <span className="relative z-10">
          {isDownloaded 
            ? 'Downloaded!' 
            : isDownloading 
              ? 'Downloading...' 
              : 'Download APK'
          }
        </span>
        
        {/* Play Store style badge */}
        <div className="relative z-10 bg-white/20 rounded-full px-3 py-1 text-sm font-medium">
          Android
        </div>
      </motion.button>
      
      {/* Download progress indicator */}
      {isDownloading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-1 bg-green-400 rounded-b-2xl"
        />
      )}
      
      {/* Success indicator */}
      {isDownloaded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1"
        >
          <CheckCircle className="h-4 w-4 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default APKDownloadButton; 