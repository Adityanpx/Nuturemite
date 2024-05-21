import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import React from 'react';

export default function Page() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-50 min-h-screen py-8 md:mt-28 mt-14 px-4 sm:px-6 lg:px-8">
        
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>
        
        <section className="mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Nuturemite is a website dedicated to providing credible information that helps you make healthy eating choices. It serves as a gateway to reliable information on nutrition, healthy eating, physical activity, and food safety for consumers. Our website receives guidance from professionals like doctors, nutritionists, dietitians, fitness gurus, and the best nutrition counselors, who work as a team to foster a healthy society.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 mb-6">
            Nuturemite offers comprehensive information on foods that boost health, their effects on different body systems, various food recipes, food safety, health and fitness, and age-specific dietary needs. We connect you with experts and professionals in fitness and health, who can answer your queries in multiple languages upon request. Additionally, we provide high-quality food supplements as per expert prescriptions when needed.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Nuturemite, we bring together nutrition and healthcare experts to guide individuals on proper nutrition and healthy food choices tailored to their specific needs. Whether you're dealing with disease symptoms or chronic conditions, our team helps you understand the nutritional benefits of foods and how to incorporate the right foods at the right times for optimal health. Our registered dietitians and nutritionists design various nutrition programs to raise awareness about nutritious foods and their importance, helping to alleviate symptoms of many chronic diseases. This allows you to enjoy healthy foods without hesitation and stay fit throughout your life.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Nuturemite, we respect and appreciate all healthcare professionals who take time for their clients. We believe in partnerships with healthcare professionals and are eager to listen to our customers to understand their needs. Our mission is truly important and meaningful to us, and we have a keen interest in hearing from you regarding your health queries. Our vision is accomplished only with the satisfaction of our customers and employees.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            Nuturemite aspires to support the health of individuals by suggesting appropriate foods as per their body's acceptability, which in turn builds a healthy society. In our journey to achieve this vision, we are at your service, presenting expert professionals and making them accessible. Clients or patients receive qualitative food supplements, which are delivered promptly as health is our primary concern.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Consultation</h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide online consultations with high-profile professionals in healthcare, diet, and fitness, who will consider your concerns and resolve the complications you are facing. Based on your query, the relevant professional will advise you accordingly. We provide timely responses because health is not to be neglected.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Nutritional Health Supplements</h2>
          <p className="text-lg text-gray-700 mb-6">
            We offer high-quality nutritional supplements as per professional suggestions. We assure quick delivery of ordered products, as health is our main concern. Enjoy delicious foods cautiously according to your body’s needs because we have only one wonderful life to enjoy.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Specialty</h2>
          <p className="text-lg text-gray-700 mb-6">
            Despite the busy schedules of healthcare professionals, it's our pleasure to provide you access to high-profile dietitians, nutritionists, and fitness trainers to address your doubts. Our vision started with the health issues prevailing in our society in mind. With your support, we assure you will receive satisfactory responses and solutions to all health-related issues. In addition to health services, we provide high-quality nutrition supplements as per professional recommendations, delivered promptly to ensure your health is our priority. We help you enjoy delicious foods with caution according to your body’s needs, as we have only one wonderful life to enjoy. Don’t miss the opportunity to be associated with our team.
          </p>
        </section>
      </div>
    </div>
    <Footer/>
    </>
  );
}
