import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
function Inputs({setQuery}) {
  const [city, setCity] = useState("");

  const handleSearchClick = () =>{
    if (!city) {
      toast.error('Insert a city name');
    }else{
      setQuery({q: city})
    }
  }

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({lat, lon});
      });
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
       <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text" 
            placeholder='Search for city...'
            className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize "
            />
            <UilSearch 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handleSearchClick}
            />
            <UilLocationPoint 
            size={25} 
            className="text-white cursor-pointer transition ease-out hover:scale-125"
              onClick={handleLocationClick}
            />
       </div>
    </div>
  )
}

export default Inputs;