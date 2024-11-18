import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

interface EnquiryFormProps {
  productName?: string;
  onSuccess?: () => void;
}

const EnquiryForm = ({ productName, onSuccess }: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: productName || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          product: formData.product,
          message: formData.message,
          to_email: 'retardantelectrical@gmail.com'
        },
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: productName || '',
        message: ''
      });
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
            placeholder="+91 1234567890"
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
            Product *
          </label>
          <input
            type="text"
            id="product"
            name="product"
            required
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
            placeholder="Please write your enquiry here..."
          />
        </div>

        <div className="flex justify-center">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              flex items-center justify-center space-x-2 
              px-8 py-3 rounded-lg text-white font-medium
              transition-all duration-300 w-full
              ${isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-primary hover:bg-primary-600'
              }
            `}
          >
            <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
            <FaPaperPlane className={`transition-transform duration-300 ${isSubmitting ? 'translate-x-2' : ''}`} />
          </motion.button>
        </div>

        {submitStatus !== 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-center p-4 rounded-lg ${
              submitStatus === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}
          >
            {submitStatus === 'success' 
              ? 'Thank you! Your enquiry has been sent successfully.' 
              : 'Sorry, there was an error sending your enquiry. Please try again.'}
          </motion.div>
        )}
      </form>
    </motion.div>
  );
};

export default EnquiryForm;