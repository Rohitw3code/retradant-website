import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';
import SideDrawer from './SideDrawer';
import ContactForm from './ContactForm';
import FloatingContactButton from './FloatingContactButton';

const ContactInfo = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <FloatingContactButton onClick={() => setIsDrawerOpen(true)} />
      
      <section id="contact-us" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 mb-4">
                For any queries please feel free to contact us on numbers below:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Telephone</p>
                    <p>8527728731 / 9661737570</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:retardantelectrical@gmail.com" className="text-blue-600 hover:underline">
                      retardantelectrical@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-primary text-xl flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p className="text-gray-700">
                    B-10/1, DEFENCE EMPIRE 2, COLONY, TILAPTA KARNWAS, GREATER NOIDA, GAUTAM
                    BUDDHA NAGAR - 201306, UTTAR PRADESH, INDIA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SideDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
          <ContactForm onSuccess={() => setIsDrawerOpen(false)} />
        </SideDrawer>
      </section>
    </>
  );
};

export default ContactInfo;