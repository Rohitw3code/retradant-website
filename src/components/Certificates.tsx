import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const msmeImages = [
    'https://i.ibb.co/Lk122xQ/MSME-1.png',
    'https://i.ibb.co/St248b0/MSME-2.png',
    'https://i.ibb.co/F0ffkX5/MSME-3.png',
    'https://i.ibb.co/mzs3K3J/MSME-4.png'
  ];

  const certificates = [
    {
      name: 'ISO 9001:2015',
      image: 'https://i.ibb.co/KzKZwSC/START-UP-CERTIFICATE-1.png',
      description: 'Certified for Quality Management System'
    },
    {
      name: 'MSME Certified',
      images: msmeImages,
      description: 'Registered under MSME'
    },
    {
      name: 'Startup India',
      image: 'https://i.ibb.co/KzKZwSC/START-UP-CERTIFICATE-1.png',
      description: 'Recognized by Startup India'
    }
  ];

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 0,
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Certifications
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {cert.images ? (
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {cert.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      variants={imageVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="cursor-pointer relative group"
                      onClick={() => setSelectedImage(img)}
                    >
                      <motion.img
                        src={img}
                        alt={`${cert.name} ${imgIndex + 1}`}
                        className="w-full h-32 object-cover rounded-xl shadow-md transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-xl" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  variants={imageVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="cursor-pointer mb-4"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <motion.img
                    src={cert.image}
                    alt={cert.name}
                    className="h-48 w-full object-cover rounded-xl shadow-md transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300"
                  />
                </motion.div>
              )}
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="relative max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-2xl p-2"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300 shadow-lg"
              >
                <FaTimes />
              </motion.button>
              <img
                src={selectedImage}
                alt="Certificate"
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;