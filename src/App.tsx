import { motion } from 'framer-motion';
import { FaTrain, FaIndustry, FaUsers, FaCheckCircle } from 'react-icons/fa';
import Navbar from './components/Navbar';
import ImageSlider from './components/ImageSlider';
import Certificates from './components/Certificates';
import ContactInfo from './components/ContactInfo';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <ImageSlider />
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaTrain className="text-4xl mb-4 text-primary" />,
                  title: "Railway Products",
                  description: "High-quality railway components manufactured with precision"
                },
                {
                  icon: <FaIndustry className="text-4xl mb-4 text-primary" />,
                  title: "Manufacturing Excellence",
                  description: "State-of-the-art technology and superior raw materials"
                },
                {
                  icon: <FaUsers className="text-4xl mb-4 text-primary" />,
                  title: "Expert Team",
                  description: "Dedicated professionals ensuring quality and timely delivery"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about-us" className="bg-gray-100 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-6">
                  We are renowned traders, dealers, distributors, and manufacturers of various railway products. 
                  Our principals are world leaders in their respective products, and our associated vendors 
                  manufacture these products using high-grade raw materials with the latest technology.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Quality-centric approach",
                    "Dimensional accuracy",
                    "High strength materials",
                    "Industry-leading prices"
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <FaCheckCircle className="text-green-500" />
                      <span>{point}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Products />
        <section id="certificates">
          <Certificates />
        </section>
        <section id="contact-us">
          <ContactInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;