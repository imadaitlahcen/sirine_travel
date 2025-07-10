import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'yellow' | 'green' | 'purple';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'blue' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const colorClasses = {
    blue: 'border-blue-600',
    yellow: 'border-yellow-400',
    green: 'border-green-500',
    purple: 'border-purple-500'
  };

  return (
    <div className="relative">
      {/* Main spinner */}
      <motion.div
        className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full ${colorClasses[color]}`}
        style={{
          borderTopColor: 'transparent',
          borderRightColor: 'transparent'
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Secondary spinner */}
      <motion.div
        className={`absolute inset-0 ${sizeClasses[size]} border-2 border-transparent rounded-full`}
        style={{
          borderTopColor: color === 'blue' ? '#3B82F6' : 
                         color === 'yellow' ? '#FBBF24' :
                         color === 'green' ? '#10B981' : '#8B5CF6',
          borderBottomColor: color === 'blue' ? '#3B82F6' : 
                            color === 'yellow' ? '#FBBF24' :
                            color === 'green' ? '#10B981' : '#8B5CF6'
        }}
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      {/* Pulsing dot in center */}
      <motion.div
        className={`absolute inset-0 flex items-center justify-center`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full`}
          style={{
            backgroundColor: color === 'blue' ? '#3B82F6' : 
                           color === 'yellow' ? '#FBBF24' :
                           color === 'green' ? '#10B981' : '#8B5CF6'
          }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;