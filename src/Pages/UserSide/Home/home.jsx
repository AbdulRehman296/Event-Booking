import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'antd'
import { DoctorCard } from '../../../Components/DoctorCard'



function Home () {
  const navigate = useNavigate()

  return (
    <>
    <div className="home">
    <div className='home-container'>

      <div className='home-left'>
        <h1>Plane Your Perfect Event</h1>

        <p>Book weddings, birthdays, and concerts easily with our simple event booking platform. We help you organize memorable events
         with trusted vendors, smooth booking, and fast confirmation.</p>
        <button onClick={()=>navigate("/services")}>Explore Button</button>
      </div>


      <div className='home-right'>
        <img src="event-booking.webp" alt="" />
      </div>

    </div>
    
    </div>

    {/* Available Doctors */}
    
    <div className='available-doctors-container'>
      <h1 className='title'>
        Available Doctors
        </h1>
    
    <div className='doctor-cards'>
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>
    <DoctorCard/>

    </div>

    </div>
    </>
  )
}

export default Home