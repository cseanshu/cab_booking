import PropTypes from 'prop-types';
import { useState } from 'react';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Landing({ handleCity }) {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setCity(selectedCity);
    handleCity(selectedCity);
  };

  const handleGetStarted = () => {
    navigate(`/city/${city}`); // Navigate to the 'city' route with the selected city
  };

  return (
    <div>
      <div className="w-full h-1/2 overflow-hidden">
        <img src="/landing.png" alt="Travel Car" style={{ width: '100vw', height: '50vh' }} />
      </div>
      <div className="flex flex-col mt-1 items-center">
        <p className="text-4xl mt-1 font-bold"> Please Select the Location</p>
        <div>
          <select
            className="py-4 px-5 w-80 text-2xl border font-semibold border-gray-800 rounded-lg focus:outline-none focus:border-green-500 mt-16 text-left"
            value={city}
            onChange={handleCityChange}
          >
            <option value="">Select a city</option>
            <option value="patna">Patna</option>
            <option value="gaya">Gaya</option>
            <option value="bhagalpur">Bhagalpur</option>
            <option value="muzaffarpur">Muzaffarpur</option>
            <option value="purnia">Purnia</option>
            <option value="darbhanga">Darbhanga</option>
            <option value="arraria">Arraria</option>
            <option value="chapra">Chapra</option>
            <option value="begusarai">Begusarai</option>
            <option value="saharsa">Saharsa</option>
          </select>
          <button
            className="bg-green-600 hover:bg-blue-600 text-white font-bold py-6 px-6 ml-5 rounded-lg"
            onClick={handleGetStarted} 
          >
            Get Started
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Landing.propTypes = {
  handleCity: PropTypes.func.isRequired,
};

export default Landing;
