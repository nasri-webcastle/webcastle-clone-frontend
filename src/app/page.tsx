// app/page.tsx
"use client"

import HomeBanner from "./components/HomeBanner";
import ProjectMarquee from "./components/ProjectMarquee";
import HomeAbout from "./components/HomeAbout";
import ServicesSection from "./components/ServiceSection";
import OurWorks from "./components/HomeOurWorks";
import AwardsSection from "./components/HomeAwards"; 
import HomeServiceHead from "./components/HomeServiceHead"; 
import TechnologiesSection from "./components/HomeTechnologies"; 
import TestimonialSlider from "./components/Testimonial"; 
import ClientsTrustUs from "./components/HomeClients"; 
import BlogSection from "./components/BlogSectionHome";
import FaqSection from "./components/Faqsection"; 
import EnquirySection from "./components/Enquiry"; 


import { FaWhatsapp  } from 'react-icons/fa';
import { RiMessage2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="min-h-screen justify-center bg-white text-black">
      {/* <main> */}
          <HomeBanner/>
          <ProjectMarquee/>
          <HomeAbout/>                
          <HomeServiceHead/>
          <ServicesSection/>          
          <OurWorks/>
          <AwardsSection/>
          <TechnologiesSection/>
          <TestimonialSlider/>
          <ClientsTrustUs/>
          <BlogSection/>
          <FaqSection/>

          {/* Company Info Block */}
          <div className="mt-12  max-w-6xl mx-auto bg-white">
              <h3 className="text-2xl font-semibold mb-8">
              Web designing company in Kochi, Kerala
              </h3>
              <p className="text-gray-500 ">
                  Welcome to Webcastle, a leading web designing company in Kerala.
                  Our focus is on delivering creative and expert web design solutions to our clients,
                  empowering their business growth.
              </p>
              <a
              href="#"
              className="inline-block  underline text-gray-500 "
              >
              Read more
              </a>
          </div>

          <EnquirySection/> 

          <div className="relative">
            {/* Fixed Social Icons */}
            <div className="fixed right-8 bottom-[25px] z-50 flex flex-col gap-7">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919999999999" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-[#5aa199] transition-all duration-300"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>

                {/* Message */}
                <a
                  href="mailto:support@example.com" // Replace with your email
                  className="bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
                >
                  <RiMessage2Fill  className="w-6 h-6" />
                </a>
            </div>
          </div>
    </main>
  );
}
