import { useLocation, useNavigate } from "react-router-dom"

import styles from './moduleCss/success.module.css'

const Success = () => {

  const { state } = useLocation()
  const navigate = useNavigate()

  const { carType, service, stationName, timeSlot, address} = state || {}
 
  return(
    <div className={`flex justify-center items-center flex-col bg-[lightgrey] w-full h-lvh ${styles.successStyle}`}>

      <div className={`bg-[white] rounded-2xl shadow-md w-2/4 p-[24px] m-5 space-y-7 ${styles.pad}`}>

        <div className="flex flex-col items-center">

          <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-20 text-green-600 ">

            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
            />

          </svg>

          <p className={`text-2xl font-bold text-green-700 ${styles.paragraph}`}>You’re All Set 🚗</p>

        </div>
    
        <div className="space-y-6">

          <div className="flex gap-2">

            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[grey] ">
            
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" 
              />

            </svg>

            <p className="font-bold">Car Type:</p>

            <p className='ml-auto'>{carType}</p>

          </div>

          <div className="flex gap-2">

            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[grey]">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" 
              />

            </svg>  

            <p className="font-bold">Service:</p>

            <p className='ml-auto'>{service}</p>
          </div>

          <div className="flex gap-2">

            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[grey]">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" 
              />

            </svg>

            <p className="font-bold">Station Name:</p>

            <p className='ml-auto'>{stationName}</p>


          </div>

          <div className="flex gap-2"> 

            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[grey]">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" 
              />

            </svg>

            <p className="font-bold">Time Slot:</p>

            <p className='ml-auto'>{timeSlot}</p>

          </div>


          <div className="flex gap-2">

            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-[grey]">

              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" 
              />

            </svg>

            <p className="font-bold">Address:</p>

            <p className='ml-auto'>{address}</p>
          </div>
          
        </div>
      
        <div className="flex justify-center">

          <button 
            className="bg-blue-600 text-white rounded-md px-4 py-2 cursor-pointer"
            onClick={() => navigate('/')}>Make Another Booking</button>

        </div>

      </div>
  
    </div>
  )
}

export default Success