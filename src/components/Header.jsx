
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center mr-8">
        {/* Logo */}
        <div className="flex items-center">
        <FontAwesomeIcon icon={faCar} className="text-yellow-600 text-4xl mr-8 ml-12" />
          <h1 className="text-2xl font-bold">Zolo_DRIve</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center">
          <ul className="flex space-x-4">
            <li>
              <Link to="/company-profile" className="hover:text-gray-300">Company Profile</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-300 mr-6">Login/signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
