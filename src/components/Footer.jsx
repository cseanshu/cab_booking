import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-2 mt-32">
      <div className="container mx-auto flex justify-around">
        <div className="footer-section flex-1 mx-4">
          <h3 className="mb-4">Contact Us</h3>
          <ul>
            <li className="flex items-center mb-2"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> info@example.com</li>
            <li className="flex items-center mb-2"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> +1234567890</li>
            <li className="flex items-center mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> 123 Bihar, India</li>
          </ul>
        </div>
        <div className="footer-section flex-1 mx-4">
          <h3 className="mb-4">Explore</h3>
          <ul>
            <li className="mb-2"><a href="/cars" className="text-gray-300 hover:text-white">Available Cars</a></li>
            <li className="mb-2"><a href="/drivers" className="text-gray-300 hover:text-white">Available Drivers</a></li>
          </ul>
        </div>
        <div className="footer-section flex-1 mx-4">
          <h3 className="mb-4">Follow Us</h3>
          <ul className="social-icons flex">
            <li className="mr-2"><a href="#"><FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-white" /></a></li>
            <li className="mr-2"><a href="#"><FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-white" /></a></li>
            <li className="mr-2"><a href="#"><FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-white" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8">
        <p className="text-sm">&copy; 2024 Car Booking App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
