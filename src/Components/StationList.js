
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { useNavigate, useLocation } from 'react-router-dom'
import LoadSkeleton from '../Loading Skeleton/Loading'


import styles from './moduleCss/station.module.css'

const Stations = () => {
  const [selectedSlot, setSelectedSlot] = useState({})
  const navigate = useNavigate()
  const location = useLocation()


  const {carType, serviceType} = location.state || {}

  const fetcher = (url) => fetch(url).then(
    (res) => res.json()
  )
  
  const {data, error} = useSWR(
    '/mockData/stationsData.json', fetcher
  )

  const [showSkeleton, setShowSkeleton] = useState(true);

useEffect(() => {
  if (data) {
    const timer = setTimeout(() => setShowSkeleton(false), 1000); // delay
    return () => clearTimeout(timer);
  }
}, [data]);

  if (error) return <div>Error loading stations...</div>;
  if (!data || showSkeleton) return <LoadSkeleton />;
  if (!carType || !serviceType) return <div>Please select car and service type first. </div>;
  

  const filteredStations = data.filter(
    (station) => station.servicesOffered.includes(serviceType.toLowerCase()) &&
      station.supportedCarTypes.includes(carType.toLowerCase())
  )

  const handleBook = (station) => {
    const time = selectedSlot[station.id];
    if (!time) {
      alert('Please select a time slot before booking.');
      return;
    }

    navigate('/success', {
      state: {
        carType,
        service: serviceType,
        stationName: station.stationName,
        timeSlot: time,
        address: station.location

      },
    });

    alert('You have succefully booked your session!!')
  };

  return(
    <div className={`w-[80%] p-6 flex flex-col justify-center mx-auto ${styles.stationStyles} `} >

      <StationsHeader />

      <div className="bg-[grey] shadow-md rounded-lg p-5">

        <div > 

          { filteredStations.length === 0 ? (
            <div>

              <p className="text-red-500">No matching stations found for your selection.</p>

              <div className="flex justify-center">

                <button 
                  className="bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer"
                  onClick={() => navigate('/')}
                >Make Another Booking</button>

              </div>

            </div>
          
          
        ) : (
            filteredStations.map(
              (station) => (
                <div key={station.id} >

                  <div className='flex justify-between '>

                    <p>Name:</p>
                    <h2>{station.stationName}</h2>

                  </div>

                  <div className='flex justify-between'>

                    <p>Address/Location:</p>
                    <p>{station.location}</p>
                    
                  </div>

                  <div className='flex justify-between'>  

                    <p>Rating:</p>
                    <p>{station.rating}</p>

                  </div>

                  <div className='flex justify-between'>

                    <p>Car Type:</p>

                    <ul >
                    

                      {

                        station.supportedCarTypes.map(
                          
                          
                          (car) => (
                            <li key={car} >{car}</li>
                          )

                        )

                      }


                    </ul>

                  </div>

                  <div className='flex justify-between'>

                    <p>Car Services</p>

                    <ul>

                      {

                        station.servicesOffered.map(

                          (service) => (
                            <li key={service}>{service}</li>
                          )

                        )

                      }

                    </ul>

                  </div>

                  <div className="bg-[lightgrey] text-black flex justify-between ">
                    {station.availableTimeSlot.map((time) => (
                        <button
                          key={time}
                          className={`px-4 py-10  border rounded-lg cursor-pointer ${
                            selectedSlot[station.id] === time
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-200'
                          }`}
                          onClick={() =>
                            setSelectedSlot((prev) => ({ ...prev, [station.id]: time }))
                          }
                        >
                     {time}
                      </button>
                    ))}
                  </div>

                  <div className={`flex justify-between `} >

                    <button
                    className="bg-blue-600 text-black px-4 py-2 hover:bg-blue-700 cursor-pointer rounded-md shadow-md"
                    onClick={() => handleBook(station)}
                    >
                      Book Now
                    </button>

                    <button 
                    className="bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer"
                    onClick={() => navigate('/')}>Make Another Booking</button>

                  </div>

                </div>
              )))}
        </div>

      </div>
      
    </div>
  )
}


export const StationsHeader = () => {
  return(
    <header className="text-center">
      <h2 className="text-[1.5rem] font-bold">Available Stations</h2>
      <p className='text-[1rem] text-[gray]'>Based on your selected car and service</p>
    </header>
  )
}



export default Stations