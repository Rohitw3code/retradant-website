import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-600">
              Retardant Electrical Pvt. Limited is a leading manufacturer and distributor
              of premium railway products, committed to excellence and innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#about-us" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#products" className="text-gray-600 hover:text-gray-900">Products</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4 text-gray-600">
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                8527728731 / 9661737570
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                retardantelectrical@gmail.com
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Greater Noida, Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2024 Retardant Electrical Pvt. Limited. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaFacebook /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;