import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-800 pt-10 pb-5 px-5 md:px-20">
      <div className="grid md:grid-cols-3 gap-8">

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">📍 Office Address</h3>
          <p className="text-sm">
            Radhe Radhe Jyothish karalya <br />
            Viswakarma Road, Street no-6,Sunam(Punjab) <br />
            📞 <FaPhoneAlt className="inline mr-1" /> +91-94171-23627
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🔗 Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-600">About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-600">Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-600">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">🌐 Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="text-yellow-800 hover:text-yellow-600 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-yellow-800 hover:text-yellow-600 text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <hr className="my-6 border-yellow-300" />

      {/* Copyright */}
      <p className="text-center text-sm text-yellow-600">
        © {new Date().getFullYear()} Radhe Radhe Jyothish karalya | All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
