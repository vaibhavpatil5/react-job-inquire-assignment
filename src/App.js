import React from 'react';
import './style.css';
import InquiryForm from './InquiryForm';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <InquiryForm />
    </div>
  );
}
