
import React from 'react'

function Aboutsection() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 p-8 md:p-16 bg-yellow-50'>
      <div className='w-48 sm:w-60 md:w-72 lg:w-80'>
        <img 
          src="./public/images/ownerph.jpeg" 
          alt="Astrologer" 
          className='rounded-xl shadow-xl border-4 border-yellow-300'
        />
      </div>

      <div className='max-w-lg text-center md:text-left space-y-4'>
        <h2 className='text-3xl sm:text-4xl font-bold text-yellow-700'>Pt. Govind Shastri</h2>
        <p className='text-gray-700 font-medium'>25 years of experience guiding lives through astrology & ancient sciences.</p>
        
        <div>
          <h3 className='text-xl font-semibold text-yellow-600'>Specialized Services:</h3>
          <ul className='list-disc list-inside text-gray-800'>
            <li>Numerology</li>
            <li>Kundli Milan (Matchmaking)</li>
            <li>Vastu Consultation</li>
            <li>Palmistry</li>
            <li>Gemstone Recommendations</li>
            <li>Career & Health Guidance</li>
          </ul>
        </div>

        <p className='italic text-yellow-800'>
          “Bringing clarity and hope through the timeless wisdom of the stars.”
        </p>
      </div>
    </div>
  )
}

export default Aboutsection
