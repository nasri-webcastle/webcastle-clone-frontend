'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '@/lib/api';
import { iconMap } from '@/utils/icon-map';
import {
  getEnquirySection,
  getContactDetails,
  getSocialLinks,
} from '@/utils/enquiry';
import type {
  EnquirySectionData,
  ContactDetail,
  SocialLink,
} from '@/types/enquiry';

export default function ContactSection() {
  const [enquiry, setEnquiry] = useState<EnquirySectionData | null>(null);
  const [contacts, setContacts] = useState<ContactDetail[]>([]);
  const [socials, setSocials] = useState<SocialLink[]>([]);

  useEffect(() => {
    async function fetchAll() {
      const [enquiryData, contactData, socialData] = await Promise.all([
        getEnquirySection(),
        getContactDetails(),
        getSocialLinks(),
      ]);
      setEnquiry(enquiryData);
      setContacts(contactData);
      setSocials(socialData);
    }

    fetchAll();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    company: '',
    agreed: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string>('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.service.trim())
      newErrors.service = 'Please select a service.';
    if (!formData.company.trim())
      newErrors.company = 'Company name is required.';
    if (!formData.agreed) newErrors.agreed = 'You must agree to continue.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFormError('Please fix the errors before submitting.');
      return;
    }

    try {
      await api.post('/api/enquiries', {
        data: formData,
      });
      alert('Enquiry submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        service: '',
        company: '',
        agreed: true,
      });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setFormError(
          err.response?.data?.error?.message ||
            err.message ||
            'Something went wrong.'
        );
      } else {
        setFormError('An unknown error occurred.');
      }
    }
  };

  if (!enquiry) return null;

  const { subtitle, heading, formHeading, backgroundImage } = enquiry;

   return (
    <div className="relative w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-0">
          {/* === Left: Contact Info === */}
          <div className="mb-20 mt-20 ">
            <h2 className="text-medium text-green-600 font-semibold mb-2">{subtitle}</h2>
            <p className="text-2xl text-black font-bold ">
              {heading}              
            </p>
          </div>
      </div> 
      <section
      className="footer-form bg-cover bg-fixed bg-center bg-no-repeat  w-full py-1 px-20 h-[550px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      >                <div className="flex items-center w-full gap-28">

        <div className="w-80 ml-6 space-y-8 mt-2 ">

          <div className="space-y-6 text-base">
            {contacts.map((item) => {
              const Icon = iconMap[item.icon];
              console.log('Rendering icon for:', item.icon, 'Icon:', Icon);
              return (
                <div key={item.id} className="flex items-start gap-5 px-7 py-4  bg-[#a6a8a74d] rounded-xl  hover:bg-green-500 transition-colors duration-300">
                  {Icon ? <Icon className="text-2xl text-white mt-4" /> : <div>Invalid icon</div>}
                   
                    {/* Title and Value */}
                    <div className="flex flex-col text-white  border-l-1  pl-5 gap-y-1 text-medium font-semibold">
                        <p className="text-sm mb-2">{item.title}</p>
                        <p className="text-xl ">{item.value}</p>
                    </div>
                </div>
              );
            })}
          </div>
          
          <div className="flex gap-6 mt-4">
            {socials.map((social) => {
              const Icon = iconMap[social.platform];
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl"
                  >
                    {Icon && <Icon className="text-xl" />}
                  </a>
                );
              })}
          </div>          
        </div>
        {/* === Middle Vertical Divider with "OR" === */}
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="h-42 w-[2px] bg-[#a6a8a74d]" />
          <span className="my-2 font-semibold text-white">OR</span>
          <div className="h-42 w-[2px] bg-[#a6a8a74d]" />
        </div>
      </div>
     </section>

     <div className="absolute top-0 right-25 h-full mt-0 z-10 text-white flex items-center justify-center">
        <section className=" bg-white text-black flex  gap-8">        
            <div className="mt=0">
                {/* === Right: Form === */}
                <form onSubmit={handleSubmit} className="space-y-4 px-10 py-20 mt-2 w-160 mx-auto border-0  bg-white p-6 shadow">
                    <div className="flex items-center gap-3 mb-13">
                        <h3 className="text-2xl font-bold">{formHeading}</h3>
                    </div>

                    <div className="mb-6">
                        <label className="block font-semibold mb-1">NAME</label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
                        />
                        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block font-semibold mb-1">PHONE NUMBER</label>
                        <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
                        />
                        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1">
                        <label className="block font-semibold mb-1">SERVICES</label>
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
                        >
                            <option value="">— Please choose an option —</option>
                            <option value="web">Website Development</option>
                            <option value="app">Mobile App Development</option>
                            <option value="seo">SEO / Digital Marketing</option>
                            <option value="ecom">eCommerce Solutions</option>
                        </select>
                        {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
                        </div>

                        <div className="flex-1">
                        <label className="block font-semibold mb-1">COMPANY NAME</label>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
                        />
                        {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                        </div>
                    </div>

                    <div className="flex items-start gap-2 text-sm mt-3">
                        <input
                        type="checkbox"
                        name="agreed"
                        checked={formData.agreed}
                        onChange={handleChange}
                        className="mt-1"
                        />
                        <label htmlFor="agree">
                        By continuing I accept the terms and conditions and privacy policy.
                        </label>
                    </div>
                    {errors.agreed && <p className="text-red-600 text-xs mt-1">{errors.agreed}</p>}

                    <button
                        type="submit"
                        className="bg-green-600 text-white mb-4 px-6 py-3 rounded-full font-semibold w-full hover:bg-green-700 transition"
                    >
                        SUBMIT
                    </button>

                    {formError && (
                        <p className="text-green-800 font-semibold text-medium">{formError}</p>
                    )}
                </form>
            </div>
        </section>
    </div>
     {/* TODO: Add enquiry form here */}

    </div>
  );
}
