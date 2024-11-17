import { motion } from 'framer-motion';
import { FaTools, FaBoxes, FaTrain, FaHardHat } from 'react-icons/fa';

const Products = () => {
  const categories = [
    {
      title: "Electrical Products for Indian Railway",
      icon: <FaTrain />,
      description: "High-quality electrical components engineered specifically for railway applications",
      products: [
        {
          name: "Auto Flasher Circuit for 3 phases Loco",
          spec: "CLW Spec No. – CLW/ES/3/0481",
          category: "Manufacturing / Under CCA"
        },
        {
          name: "Discharging Resistor",
          spec: "CLW Spec No. – CLW/ES/3/0089",
          status: "(Ready Without Proto /CCA)"
        },
        {
          name: "Rotary Switch for 3 Phase Loco",
          spec: "CLW Spec No. – CLW/ES/3/0068",
          status: "(Ready Without Proto /CCA)"
        },
        {
          name: "Set Of Bus bar",
          spec: "CLW Spec No. – CLW/ES/3/0118",
          status: "(Ready Without Proto /CCA)"
        },
        {
          name: "VS Diode (PIV-1000V) 10A",
          spec: "As Per Drawing No. – CLW/ES/SK-1/D-1/B"
        },
        {
          name: "Set of Insulation A & B",
          spec: "ABB Part No. - HBTB316220P0001 & HBTB316220P0002"
        },
        {
          name: "Set of Terminal block",
          spec: "CLW Spec No. – CLW/ES/3/0645",
          status: "(Ready Without Proto /CCA)"
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
    <section id="products" className="py-20">
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
              className="flex flex-col items-center justify-center mb-10 bg-gray-900 p-6 rounded-2xl"
            >
              <div className="text-railway-yellow text-4xl mb-3">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
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
                  <div className="flex items-start h-full">
                    <div className="bg-railway-red/20 p-3 rounded-xl mr-4 group-hover:bg-railway-red/30 transition-colors duration-300">
                      <FaTools className="text-railway-red text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h4>
                      <p className="text-gray-600 text-sm mb-1">{product.spec}</p>
                      {product.status && (
                        <span className="inline-block bg-railway-yellow/20 text-railway-yellow text-sm px-3 py-1 rounded-full mt-2 font-medium">
                          {product.status}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;