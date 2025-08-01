"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const contacts = [
  { country: "INDIA", email: "sales@webcastle.in", phone: "+91 484 4052626" },
  { country: "KSA", email: "mail@webcastle.sa", phone: "+966 50 465 8024" },
  { country: "UAE", email: "mail@webcastle.ae", phone: "+97145540033" },
  { country: "USA", email: "sales@webcastle.com", phone: "+1 617-982-2043 ext 800" },
  { country: "CANADA", email: "sales@webcastle.com", phone: "+12403473649" },
];

const companyLinks = [ "About Us", "Projects", "Services", "Testimonials", "Careers", "Blogs", "Clients", "Contact", "Solutions" ];

const servicesData = [
  {
    heading: "Development Services",
    items: [ "Ecommerce Development", "ERP Development", "Mobile App Development", "Odoo Development Company", "Web Design and Web Development" ]
  },
  {
    heading: "Integration Services",
    items: [ "Api Integration Services", "Internet of Things" ]
  },
  {
    heading: "Marketing Services",
    items: [ "Digital Marketing", "Explainer Video", "Search Engine Optimization", "Social Media Marketing" ]
  },
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
  <footer className="bg-[#232323] text-white py-10 px-25 absolute z-[]">
       <div className="max-w-7xl mx-auto ">
         {/* Contacts */}
         <div className="flex flex-raw gap-25 mt-8 mb-10">
                <Link href="/" className="inline-block">
                    <Image
                        src="/images/webcastle-logo.svg"
                        alt="Web Castle Media Logo"
                        width={280}
                        height={150}
                        priority
                    />
                </Link>  
                <ul className="gap-8 flex flex-raw">
                    {contacts.map(({ country, email, phone }) => (
                    <li key={country} className="space-y-1">
                        <p className="font-bold text-green-700">{country}</p>
                        <p>
                            <a href={`mailto:${email}`} className="text-[#626566] hover:text-green-700">{email}</a>
                        </p>
                        <p className="text-[#626566] hover:text-green-700">{phone}</p>
                    </li>
                    ))}
                </ul>
           </div>
          <hr className="my-6 border-t border-[#626566]" />

            {/* Company */}
            <div className=" flex flex-raw gap-20 mt-10 mb-10">
                <h2 className="text-medium  mb-4">COMPANY :</h2>
                <ul className="grid grid-cols-5 gap-x-25 gap-y-4 text-lg text-[#626566]">
                    {companyLinks.map((item) => (
                    <li key={item}>
                        <a href="#" className="hover:text-green-700">{item}</a>
                    </li>
                    ))}
                </ul>
            </div>
            <hr className="my-6 border-t border-[#626566]" />
            
            {/* Services with Expand/Collapse */}
            <div className=" flex flex-raw gap-25 mt-10 mb-10">
                <h2 className="text-medium mb-4">SERVICES :</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {servicesData.map((section, index) => (
                        <div key={index}>
                            <div className="flex items-center cursor-pointer text-white text-medium mb-2"
                                onClick={() => toggle(index)}
                                >
                                <h3 className="text-base ">
                                    <span className="mr-2 text-xl text-green-700 font-bold">{openIndex === index ? "−" : "+"}</span>
                                    {section.heading}
                                </h3>
                            </div>
                            {openIndex === index && (
                                <ul className="space-y-2 text-medium text-[#626566]">
                                {section.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>            
            </div>    
            <hr className="my-6 border-t border-[#626566]" />

            <div className="flex justify-between items-center mt-5 text-white text-medium">
                <div>
                    {new Date().getFullYear()}@WebCastle. All rights reserved.
                </div>
                <div className="flex gap-4">
                    <a href="/privacy-policy" className="hover:text-green-700">Privacy Policy</a>
                    <a href="/terms-and-conditions" className="hover:text-green-700">Terms & Conditions</a>
                </div>
            </div>
       </div>
   </footer>
  );
}
