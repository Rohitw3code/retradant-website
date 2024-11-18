import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const SideDrawer = ({ isOpen, onClose, children }: SideDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-bold">Product Enquiry</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <FaTimes className="text-gray-600" />
              </button>
            </div>
            <div className="p-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideDrawer;