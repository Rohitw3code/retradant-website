import { motion } from 'framer-motion';
import { FaTools, FaBoxes, FaTrain, FaHardHat, FaExpand, FaTimes, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';
import SideDrawer from './SideDrawer';
import EnquiryForm from './EnquiryForm';

interface BaseProduct {
  name: string;
  spec: string;
  image?: string;
  status?: string;
  category?: string;
}

interface Category {
  title: string;
  icon: JSX.Element;
  description: string;
  products: BaseProduct[];
}

const Products = () => {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const handleEnquiry = (productName: string) => {
    setSelectedProduct(productName);
    setIsDrawerOpen(true);
  };

  const categories: Category[] = [
    {
      title: "Electrical Products for Indian Railway",
      icon: <FaTrain />,
      description: "High-quality electrical components engineered specifically for railway applications",
      products: [
        {
          name: "Auto Flasher Circuit for 3 phases Loco",
          spec: "CLW Spec No. – CLW/ES/3/0481",
          category: "Manufacturing / Under CCA",
          image: "https://i.ibb.co/zb76KTs/1.png"
        },
        {
          name: "Discharging Resistor",
          spec: "CLW Spec No. – CLW/ES/3/0089",
          status: "(Ready Without Proto /CCA)",
          image: "https://i.ibb.co/cvC5gGF/2.png"
        },
        {
          name: "Rotary Switch for 3 Phase Loco",
          spec: "CLW Spec No. – CLW/ES/3/0068",
          status: "(Ready Without Proto /CCA)",
          image: "https://i.ibb.co/WKhvGKL/3.png"
        },
        {
          name: "Set Of Bus bar",
          spec: "CLW Spec No. – CLW/ES/3/0118",
          status: "(Ready Without Proto /CCA)",
          image: "https://i.ibb.co/BrsMrQM/4.png"
        },
        {
          name: "VS Diode (PIV-1000V) 10A",
          spec: "As Per Drawing No. – CLW/ES/SK-1/D-1/B",
          image: "https://i.ibb.co/4Kkphxk/5.png"
        },
        {
          name: "Set of Insulation A & B",
          spec: "ABB Part No. - HBTB316220P0001 & HBTB316220P0002",
          image: "https://i.ibb.co/Qv4QC4n/6.png"
        },
        {
          name: "Set of Terminal block",
          spec: "CLW Spec No. – CLW/ES/3/0645",
          status: "(Ready Without Proto /CCA)",
          image: "https://i.ibb.co/n774s4L/7.png"
        }
      ]
    },
    {
      title: "Electro-Mechanical Panel for Industrial",
      icon: <FaHardHat />,
      description: "Advanced industrial control and distribution solutions",
      products: [
        {
          name: "Distribution Panel",
          spec: "Custom configurations available"
        },
        {
          name: "Capacitor Panel",
          spec: "Power factor correction solutions"
        },
        {
          name: "Starter all Type",
          spec: "DOL/ Star Delta/ R-DOL Etc."
        },
        {
          name: "Main LT Panel",
          spec: "Low tension distribution solutions"
        },
        {
          name: "Auto Mains Failure Panel",
          spec: "Automatic power backup switching"
        }
      ]
    },
    {
      title: "Trading Equipment",
      icon: <FaBoxes />,
      description: "Essential electrical components and accessories",
      products: [
        {
          name: "Electrical Equipment",
          spec: "Push Button, Illuminated Push Button, Contactor, MCB, and other Accessories"
        },
        {
          name: "Exponential Sleeve",
          spec: "Specialized for Railway applications"
        },
        {
          name: "Heat Shrinkable Sleeves",
          spec: "High-quality insulation solutions"
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Comprehensive solutions for railway and industrial needs, engineered with precision and built to last
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center mb-10 bg-gray-900 p-6 rounded-2xl text-white"
            >
              <div className="text-railway-yellow text-4xl mb-3">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-300 text-center">{category.description}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    {product.image && (
                      <div className="relative mb-4 overflow-hidden rounded-lg">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="relative aspect-video cursor-pointer"
                          onClick={() => setExpandedImage(product.image ?? '')}
                          >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                            <FaExpand className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                          </div>
                        </motion.div>
                      </div>
                    )}
                    <div className="flex items-start">
                      <div className="bg-railway-red/20 p-3 rounded-xl mr-4 group-hover:bg-railway-red/30 transition-colors duration-300">
                        <FaTools className="text-railway-red text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h4>
                        <p className="text-gray-600 text-sm mb-1">{product.spec}</p>
                        {product.status && (
                          <span className="inline-block bg-railway-yellow/20 text-railway-yellow text-sm px-3 py-1 rounded-full mt-2 font-medium">
                            {product.status}
                          </span>
                        )}
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEnquiry(product.name)}
                          className="mt-4 flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors duration-300"
                        >
                          <FaEnvelope />
                          <span>Enquire Now</span>
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={expandedImage}
              alt="Expanded product"
              className="w-full h-auto"
            />
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <FaTimes className="text-gray-800" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Side Drawer */}
      <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <EnquiryForm
          productName={selectedProduct}
          onSuccess={() => setIsDrawerOpen(false)}
        />
      </SideDrawer>
    </section>
  );
};

export default Products;