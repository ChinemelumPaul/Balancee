
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const carType = ['toyota hilux', 'toyota camry', 'honda accord', 'toyota matrix', 'suzuki gsx']

const serviceType = ['tire repair', 'battery check', 'oil change', 'paint job', 'swap vehicle']

const BookForm = () => { 

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      car: '',
      repair: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)

    navigate('/Stations', {
      state: {
        carType: data.car,
        serviceType: data.repair
      }
    })
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}
      className='flex justify-center items-center flex-col bg-[lightgrey] w-full h-lvh'>

      <section className='text-center'>

        <h1 className='font-bold text-2xl text-black '>Book a Car Repair</h1>
        <p className='text-[1rem] text-[gray]'>Choose your vehicle type and service to find stations nearby.</p>

      </section>

      <div className='bg-[white] rounded-2xl shadow-md w-2/4 p-[24px] m-5 space-y-7 md:text-2xl'>

        <div>

        <section className='flex justify-between '>

          <label htmlFor="car" >Select Car Type</label>

          <select 
            id="car" className='w-2/4 '
            {...register("car", { required:"Please select a car type" })}

          >

            <option value="">Select</option>
            {
              carType.map(
                (type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                )
              )
            }

          </select>      

          </section>

          {errors.car && <p className="text-red-500 flex justify-end">{errors.car.message}</p>}

        </div>
      
        <div >

          <section className='flex justify-between'>

            <label htmlFor="repair">Select Repair Service</label>

            <select 
              id="repair" className='w-2/4 '
              {...register("repair", {required: 'Please select a repair service'})}>

              <option value="">Select</option>
              {
                serviceType.map(
                  (service) => (
                    <option key={service} value={service.toLowerCase()}>
                      {service}
                    </option>  
                  )
                )
              }
              
            </select>

          </section>
          

          {errors.repair && <p className="text-red-500 flex justify-end">{errors.repair.message}</p>}

        </div>

        <div className='flex justify-center'>

          <button 
            className='w-2/4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer'
            type='submit'
          > Find Stations </button>

        </div>
        
      </div>

    </form>
  )
}


export default BookForm