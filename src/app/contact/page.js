import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

export default function Page() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center p-4 max-w-4xl mx-auto">
      <div className="w-full mb-8">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required></textarea>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send Message</button>
        </form>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Our Location</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019057585327!2d-122.4206790846785!3d37.7749292797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3a0a58f%3A0xdea6f5f61f050e1b!2sGoogle!5e0!3m2!1sen!2sus!4v1622140280310!5m2!1sen!2sus"
          className="w-full h-96 border-0 rounded-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer/>
    </>
  );
}
