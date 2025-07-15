import { motion } from 'framer-motion';

interface MinimalLoadingSpinnerProps {
  size?: number;
  color?: string;
}

const MinimalLoadingSpinner: React.FC<MinimalLoadingSpinnerProps> = ({ 
  size = 40, 
  color = '#6B7280' 
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <motion.div
        className="rounded-full border-2 border-transparent"
        style={{
          width: size,
          height: size,
          borderTopColor: color,
          borderRightColor: color,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
    </div>
  );
};

export default MinimalLoadingSpinner;