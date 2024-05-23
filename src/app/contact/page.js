import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

export default function Page() {
  return (
    <>
    <Navbar/>
    <div className="flex mt-32 flex-col items-center p-6 max-w-4xl mx-auto">
      <div className="w-full mb-12 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
        <form className="space-y-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
          </div>
          <button type="submit" className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send Message</button>
        </form>
      </div>
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Location</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019057585327!2d-122.4206790846785!3d37.7749292797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3a0a58f%3A0xdea6f5f61f050e1b!2sGoogle!5e0!3m2!1sen!2sus!4v1622140280310!5m2!1sen!2sus"
          className="w-full h-96 border-0 rounded-md shadow-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer/>
    </>

  );
}
