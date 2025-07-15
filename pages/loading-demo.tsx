import { useState } from 'react';
import MinimalLoadingSpinner from '../components/MinimalLoadingSpinner';
import { motion } from 'framer-motion';

const LoadingDemo = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerColor, setSpinnerColor] = useState('#6B7280');
  const [spinnerSize, setSpinnerSize] = useState(40);

  const simulateLoading = () => {
    setShowSpinner(true);
    setTimeout(() => {
      setShowSpinner(false);
    }, 3000); // Show for 3 seconds
  };

  const colors = [
    { name: 'Gray', value: '#6B7280' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Green', value: '#10B981' },
    { name: 'Purple', value: '#8B5CF6' },
    { name: 'Orange', value: '#F59E0B' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Minimal Loading Spinner Demo
          </h1>
          <p className="text-lg text-gray-600">
            A light, smooth, and eye-friendly loading spinner
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customization Options</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Color
              </label>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSpinnerColor(color.value)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      spinnerColor === color.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color.value }}
                      />
                      <span className="text-sm">{color.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Size: {spinnerSize}px
              </label>
              <input
                type="range"
                min="20"
                max="80"
                value={spinnerSize}
                onChange={(e) => setSpinnerSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Preview</h2>
          
          <div className="text-center">
            <motion.button
              onClick={simulateLoading}
              disabled={showSpinner}
              className={`px-8 py-4 rounded-xl font-semibold text-white transition-all ${
                showSpinner
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
              }`}
              whileHover={{ scale: showSpinner ? 1 : 1.05 }}
              whileTap={{ scale: showSpinner ? 1 : 0.95 }}
            >
              {showSpinner ? 'Loading...' : 'Show Loading Spinner'}
            </motion.button>
            
            <p className="text-gray-600 mt-4">
              Click the button to see the loading spinner in action
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Minimal Design</h3>
                <p className="text-gray-600 text-sm">Clean, simple spinner without overwhelming visual elements</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Smooth Animation</h3>
                <p className="text-gray-600 text-sm">Fluid rotation with optimized performance</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Centered Overlay</h3>
                <p className="text-gray-600 text-sm">Perfectly centered on screen with subtle backdrop</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Customizable</h3>
                <p className="text-gray-600 text-sm">Adjustable size and color to match your design</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show the actual spinner when demo is active */}
      {showSpinner && (
        <MinimalLoadingSpinner 
          size={spinnerSize} 
          color={spinnerColor} 
        />
      )}
    </div>
  );
};

export default LoadingDemo;