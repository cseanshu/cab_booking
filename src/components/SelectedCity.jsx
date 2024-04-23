import Header from "./Header"
import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { AccordionCustomIcon } from "./AllPlaces";
function SelectedCity() {
  return (
    <div>
      <Header/>
      <div>
      <img src="/carimage3.png" alt="Travel Car" style={{ width: '100vw', height: '50vh', filter: 'grayscale(10%)',zIndex:'30' }} />
       <div>
        <p className="absolute top-[32vh] left-[30vw] text-4xl text-white font-bold">Self drive Car Rental in Bihar </p>
        <p className="absolute top-[38vh] left-[35vw] text-2xl text-white font-bold">Book your Drive Now!! </p>
       </div>
      </div>
      <div className="flex flex-row justify-around bg-slate-900 text-white font-bold  py-6">
        <div className="flex flex-col">
            <p>25000+</p>
            <p>varified cars</p>
        </div>
        <div className="flex flex-col">
            <p>25000+</p>
            <p>varified cars</p>
        </div>
        <div className="flex flex-col">
            <p>25000+</p>
            <p>varified cars</p>
        </div>
        <div className="flex flex-col">
            <p>25000+</p>
            <p>varified cars</p>
        </div>
        <div className="flex flex-col">
            <p>25000+</p>
            <p>varified cars</p>
        </div>
       
      </div>
      <div className="flex flex-row mt-5 justify-around">
        <div className="w-52 bg-gray-200 p-4 rounded-md shadow-md  px-2 text-wrap text-center mb-4">
            <p className="text-3xl font-bold ">Why to choose Zolo_DRIve.</p>
        </div>
        <div className="flex items-center">
  <p></p>
  <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2 text-4xl" />
</div>
        <div className="flex flex-wrap">
  <div className="w-[60vw] flex items-center">
    {data.sections.map((section, index) => (
      <div key={index} className="bg-gray-200 p-4 rounded-md shadow-md mb-4  ml-16">
        <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
        <p className="text-sm">{section.description}</p>
      </div>
    ))}
  </div>
</div>

      </div>
      <div>
      <div>
        <p className="text-center text-3xl  font-bold">Popular Places Near you!</p>
      </div>
      <AccordionCustomIcon/>
      </div>
    </div>
  )
}

export default SelectedCity
