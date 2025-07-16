import React, { useState } from 'react'

function Contactform() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Quick Contact Form submitted:', form)
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <div className="bg-yellow-50 p-8 md:p-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 text-center mb-8">Contact Us</h2>
      <form 
        onSubmit={handleSubmit} 
        className="max-w-xl mx-auto space-y-4 bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="3"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button 
          type="submit" 
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contactform
