import './App.css'
import '@fortawesome/fontawesome-free/css/all.css';
import Landing from './components/Landing'
// import Footer from './components/Footer';
import { useState } from 'react';
import SelectedCity from './components/SelectedCity';
import { Route, Routes } from 'react-router-dom';
function App() {
  const [city,setcity]=useState('')
const handleCity=(e)=>{
  setcity(e);
}
  return (
    <div>
  <Routes>
  <Route path="/" exact element={!city&&<Landing  handleCity={handleCity}/>}/>
          <Route path="/city" element={<SelectedCity city={city} />} />
  </Routes>
  
    </div>
    
  )
}

export default App
