import React from 'react';
import { motion } from 'framer-motion';

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenuOverlay = ({ isOpen, onClose }: MobileMenuOverlayProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
      onClick={onClose}
    />
  );
};

export default MobileMenuOverlay;