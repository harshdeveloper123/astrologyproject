import React from 'react'
import { Link } from 'react-router-dom'

function Servicesection({limited}) {
 const services = [
  {
    title: "Numerology",
    desc: "Discover your lucky numbers and unlock the secrets of your life path."
  },
  {
    title: "Kundli Milan",
    desc: "Match horoscopes for marriage and ensure harmony and compatibility."
  },
  {
    title: "Vastu Consultation",
    desc: "Balance energies at home or office for peace, prosperity, and health."
  },
  {
    title: "Palmistry",
    desc: "Understand your strengths and challenges through the lines of your hand."
  },
  {
    title: "Gemstone Advice",
    desc: "Choose the right gemstones to enhance your luck and energy."
  },
  {
    title: "Career & Health Guidance",
    desc: "Astrological insights to guide your career and well-being."
  },
  {
    title: "Lal Kitab Expertise",
    desc: "Unique and practical remedies to reduce planetary afflictions from Lal Kitab."
  },
  {
    title: "Pooja Paath & Bhagwat Katha",
    desc: "Organizing spiritual rituals and Bhagwat Kathas for harmony and peace."
  }
];

const servicestoShow = limited?services.slice(0,4):services;


  return (
    <div className='p-8 md:p-16 bg-white'>
      <h2 className='text-3xl sm:text-4xl font-bold text-yellow-700 text-center mb-8'>Explore Services</h2>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {servicestoShow.map((service, index) => (
          <div
            key={index}
            className='bg-yellow-50 p-6 rounded-xl shadow-md border border-yellow-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 flex flex-col justify-between'
          >
            <div>
              <h3 className='text-xl font-semibold text-yellow-800 mb-2'>{service.title}</h3>
              <p className='text-gray-700'>{service.desc}</p>
            </div>
            <Link 
              to="/contact"
              className='mt-4 inline-block bg-yellow-500 text-white text-center py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors duration-300'
            >
              Contact
            </Link>
          </div>
        ))}


      </div>


      {/* show limited services */}

      {limited &&(
        <div className='text-center mt-9'>
        <Link to='/services'
        className='inline-block bg-yellow-500 text-white py-2 px-6 rounded-md hover:bg-yellow-600 transition-colors duration-300'
        > More services </Link> </div>
      )}
    </div>
  )
}

export default Servicesection
