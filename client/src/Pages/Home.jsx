import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Servicesection from '../Components/Servicesection';
import Aboutsection from '../Components/Aboutsection';
import ContactForm from '../Components/ContactForm';

function Home() {
  const subheadings = [
    "राशियों और ग्रहों की भाषा से पाएं जीवन के हर मोड़ पर सही दिशा",
    "Astrology for every step of your journey",
    "व्यवसाय में सफलता के उपाय",
    "Success strategies for your career",
    "स्वास्थ्य के लिए ग्रहों की सलाह",
    "Health insights from the stars",
    "शिक्षा में सफलता का रहस्य",
    "Secrets to educational excellence",
    "जीवन के हर क्षेत्र में मार्गदर्शन"
  ];

  const [index, setIndex] = useState(0);
  const [showSubheadings, setShowSubheadings] = useState(false);

  useEffect(() => {
    // Start showing subheadings after ~2s (main heading + image animation)
    const timer = setTimeout(() => {
      setShowSubheadings(true);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (showSubheadings) {
      interval = setInterval(() => {
        setIndex(prev => (prev + 1) % subheadings.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [showSubheadings]);

  return (
    <>
      <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-20 mt-2 p-2'>

        {/* Main heading animation */}
        <motion.div
          className="relative w-fit max-w-xs sm:max-w-md md:max-w-lg text-yellow-400 ml-15"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="absolute inset-0 text-yellow-200 blur-sm leading-tight text-3xl sm:text-6xl font-bold">
            शास्त्रों की वाणी और ग्रहों के ज्ञान से जीवन को नई दिशा दें।
          </h1>
          <h1 className="relative leading-relaxed text-3xl sm:text-6xl font-bold">
            शास्त्रों की वाणी और ग्रहों के ज्ञान से जीवन को नई दिशा दें।
          </h1>
        </motion.div>

        {/* Image animation with delay */}
        <motion.div
          className='mt-3  md:mt-10 p-4 mr-15'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }} // start after main heading finishes
        >
          <img
            className='w-40 sm:w-52 md:w-60 lg:w-72 rounded-lg shadow-lg'
            src="./public/images/ownerph.jpeg"
            alt="AstrologerPic"
          />
        </motion.div>
      </div>

      {/* Subheading appears after delay */}
      
      <div className='quote p-5 w-full text-center'>
        <AnimatePresence mode="wait">
          {showSubheadings && (
            <motion.h2
              key={index}
              className='p-2 text-2xl sm:text-4xl text-center bg-gradient-to-r from-orange-300 to-yellow-600 bg-clip-text text-transparent font-semibold inline-block'
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
            >
              {subheadings[index]}
            </motion.h2>
          )}
        </AnimatePresence>
       
      </div>
       <div className="contactbtn text-center"><button className='bg-yellow-500/40 p-5 rounded-full hover:bg-orange-600 font-bold'>Contact Us</button></div>
      <Aboutsection/>
       <Servicesection limited={true}/>
      <Contactform/>
      
    </>
  )
}

export default Home
