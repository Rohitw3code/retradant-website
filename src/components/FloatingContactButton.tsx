import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton = ({ onClick }: FloatingContactButtonProps) => {
  return (
    <motion.button
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      whileHover={{ x: -5 }}
      onClick={onClick}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex items-center"
    >
      <div className="bg-blue-500 text-white py-6 px-3 rounded-l-lg shadow-lg flex flex-col items-center space-y-2 hover:bg-blue-600 transition-colors duration-300">
        <HiOutlineMail className="text-2xl rotate-90" />
        <span className="vertical-text text-sm font-medium tracking-wide">
          Enquiry Now
        </span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-2 h-4 bg-blue-500 absolute -right-2 top-1/2 -translate-y-1/2"
      />
    </motion.button>
  );
};

export default FloatingContactButton;