import React, { useState } from 'react';

function Contactform() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://astrologyproject.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert('✅ Message sent successfully!');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        alert('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('❌ Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-50 p-8 md:p-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-yellow-700 text-center mb-8">
        Contact Us
      </h2>
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
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
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
          disabled={loading}
          className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition-colors duration-300"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Contactform;
