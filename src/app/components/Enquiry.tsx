// //  "use client";
// //  import api from '@/lib/api';
// //  import axios from 'axios';
// //  import { useState } from "react";
// //  import { Mail, Phone, Briefcase } from "lucide-react";
// //  import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// //  const contactInfo = [
// //    {
// //      title: "CONTACT US",
// //      value: "+91484405 2626",
// //      icon: <Phone className="h-5 w-5 text-white" />,
// //    },
// //    {
// //      title: "MAIL US TO",
// //      value: "sales@webcastle.in",
// //      icon: <Mail className="h-5 w-5 text-white" />,
// //    },
// //    {
// //      title: "FOR CAREER",
// //      value: "hr@webcastle.in",
// //      icon: <Briefcase className="h-5 w-5  text-white" />,
// //    },
// //  ];

// //  export default function EnquirySection() {
// //      const [formData, setFormData] = useState({
// //      name: '',
// //      phone: '',
// //      service: '',
// //      company: '',
// //      agreed: true,
// //      });

// //      const [errors, setErrors] = useState<Record<string, string>>({});
// //      const [formError, setFormError] = useState<string>('');


// //      const handleChange = (
// //      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
// //      ) => {
// //          const { name, value, type, checked } = e.target as HTMLInputElement;

// //          setFormData((prev) => ({
// //              ...prev,
// //              [name]: type === 'checkbox' ? checked : value,
// //          }));

// //          setErrors((prevErrors) => ({
// //              ...prevErrors,
// //              [name]: '',
// //          }));
// //      };


// //      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //          e.preventDefault();

// //          const newErrors: Record<string, string> = {};
// //          setFormError('');

// //          // ✅ Basic validation
// //          if (!formData.name.trim()) newErrors.name = 'Please fill out this field.';
// //          if (!formData.phone.trim()) newErrors.phone = 'Please fill out this field.';
// //          if (!formData.service.trim()) newErrors.service = 'Please select a service.';
// //          if (!formData.company.trim()) newErrors.company = 'Please fill out this field.';
// //          if (!formData.agreed) newErrors.agreed = 'You must agree before submitting.';

// //          setErrors(newErrors);

// //          if (Object.keys(newErrors).length > 0) {
// //              setFormError('One or more fields have an error. Please check and try again.');
// //              return;
// //          }

// //          try {
// //              // ✅ Axios POST to Strapi endpoint
// //              const res = await api.post('/api/enquiries', {
// //              data: formData,
// //              });
// //              console.log('Response:', res.data); // ✅ using res
// //              alert('Enquiry submitted successfully!');
// //              setFormData({
// //              name: '',
// //              phone: '',
// //              service: '',
// //              company: '',
// //              agreed: true,
// //              });
// //              } catch (err: unknown) {
// //              if (axios.isAxiosError(err)) {
// //                  const errorMessage =
// //                  err.response?.data?.error?.message || err.message || 'Something went wrong';
// //                  console.error('Axios error:', errorMessage);
// //                  setFormError(errorMessage);
// //              } else {
// //                  console.error('Unknown error:', err);
// //                  setFormError('An unexpected error occurred.');
// //              }
// //          }
// //      };
// //      return ( 
// //          <div className="relative w-full">
// //              <div className=" bg-[#fcfdfd] text-gray-800">
// //                  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-0">
// //                      {/* === Left: Contact Info === */}
// //                      <div className="mb-20 mt-20 ">
// //                          <h2 className="text-medium text-green-600 font-semibold mb-2">ENQUIRY</h2>
// //                          <p className="text-2xl text-black font-bold ">
// //                              Let’s get in touch
// //                          </p>
// //                      </div>
// //                  </div> 
// //                  <section>
// //                      <div className="footer-form bg-cover bg-fixed bg-center bg-no-repeat  w-full py-1 px-20 h-[550px]"
// //                          style={{
// //                              backgroundImage: "url('https://webcastletech.com/wp-content/uploads/2025/02/footerimage.webp')",
// //                          }}>
// //                          <div className="w-80 ml-6 space-y-8 mt-2 ">
// //                                  <div className="space-y-6 text-base">
// //                                      {contactInfo.map((item, idx) => (
// //                                          <div
// //                                              key={idx}
// //                                              className="flex items-start gap-5 px-7 py-5  bg-[#a6a8a74d] rounded-xl  hover:bg-green-500 transition-colors duration-300"
// //                                          >
// //                                                  {/* Icon */}
// //                                                  <div className="text-white mt-4 ">{item.icon}</div>
                                            
// //                                                  {/* Title and Value */}
// //                                                  <div className="flex flex-col text-white  border-l-1  pl-5 gap-y-1 text-medium font-semibold">
// //                                                      <p className=" ">{item.title}</p>
// //                                                      <p className="text-lg ">{item.value}</p>
// //                                                  </div>
// //                                          </div>
// //                                      ))}
// //                                  </div>
// //                                  <div className="flex gap-6 mt-4">
// //                                      <a href="https://www.facebook.com/webcastlemedia" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
// //                                          <FaFacebookF size={14} />
// //                                      </a>
// //                                      <a href="https://www.instagram.com/webcastletech/" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
// //                                          <FaInstagram size={14} />
// //                                      </a>
// //                                      <a href="https://in.linkedin.com/company/webcastle" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
// //                                          <FaLinkedinIn size={14} />
// //                                      </a>
// //                                      <a href="https://x.com/webcastletech" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
// //                                          <FaTwitter size={14} />
// //                                      </a>
// //                                  </div>
// //                              </div>
// //                      </div>
// //                  </section>
// //              </div>

            //  <div className="absolute top-0 right-25 h-full mt-0 z-10 text-white flex items-center justify-center">
            //      <section className=" bg-white text-black flex  gap-8">        
            //          <div className="mt=0">
            //              {/* === Right: Form === */}
            //              <form onSubmit={handleSubmit} className="space-y-4 px-10 py-20 mt-2 w-160 mx-auto border-0  bg-white p-6 shadow">
            //                  <div className="flex items-center gap-3 mb-13">
            //                      <h3 className="text-2xl font-semibold">Tell Us What is On Your Mind?</h3>
            //                  </div>

            //                  <div className="mb-6">
            //                      <label className="block font-semibold mb-1">NAME</label>
            //                      <input
            //                      type="text"
            //                      name="name"
            //                      value={formData.name}
            //                      onChange={handleChange}
            //                      className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
            //                      />
            //                      {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
            //                  </div>

            //                  <div className="mb-6">
            //                      <label className="block font-semibold mb-1">PHONE NUMBER</label>
            //                      <input
            //                      type="tel"
            //                      name="phone"
            //                      value={formData.phone}
            //                      onChange={handleChange}
            //                      className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
            //                      />
            //                      {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
            //                  </div>

            //                  <div className="flex flex-col md:flex-row gap-4 mb-6">
            //                      <div className="flex-1">
            //                      <label className="block font-semibold mb-1">SERVICES</label>
            //                      <select
            //                          name="service"
            //                          value={formData.service}
            //                          onChange={handleChange}
            //                          className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
            //                      >
            //                          <option value="">— Please choose an option —</option>
            //                          <option value="web">Website Development</option>
            //                          <option value="app">Mobile App Development</option>
            //                          <option value="seo">SEO / Digital Marketing</option>
            //                          <option value="ecom">eCommerce Solutions</option>
            //                      </select>
            //                      {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
            //                      </div>

            //                      <div className="flex-1">
            //                      <label className="block font-semibold mb-1">COMPANY NAME</label>
            //                      <input
            //                          type="text"
            //                          name="company"
            //                          value={formData.company}
            //                          onChange={handleChange}
            //                          className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
            //                      />
            //                      {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
            //                      </div>
            //                  </div>

            //                  <div className="flex items-start gap-2 text-sm mt-3">
            //                      <input
            //                      type="checkbox"
            //                      name="agreed"
            //                      checked={formData.agreed}
            //                      onChange={handleChange}
            //                      className="mt-1"
            //                      />
            //                      <label htmlFor="agree">
            //                      By continuing I accept the terms and conditions and privacy policy.
            //                      </label>
            //                  </div>
            //                  {errors.agreed && <p className="text-red-600 text-xs mt-1">{errors.agreed}</p>}

            //                  <button
            //                      type="submit"
            //                      className="bg-green-600 text-white mb-4 px-6 py-3 rounded-full font-semibold w-full hover:bg-green-700 transition"
            //                  >
            //                      SUBMIT
            //                  </button>

            //                  {formError && (
            //                      <p className="text-green-800 font-semibold text-medium">{formError}</p>
            //                  )}
            //              </form>
            //          </div>
            //      </section>
            //  </div>
// //          </div>    
// //      )
// //  }   

// //  components/EnquirySection.tsx
// // // // // 'use client';

// // // // // import {  ReactNode, useEffect, useState } from 'react';
// // // // // import type { EnquirySection as EnquirySectionType, ContactDetail, SocialLink } from '@/types/enquiry';
// // // // // import { fetchStrapi } from '@/lib/api';

// // // // // import { MailOpen, Phone, Briefcase } from 'lucide-react';
// // // // // import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// // // // // const iconMap: Record<string, ReactNode> = {
// // // // //   Phone: <Phone />,
// // // // //   LuMailOpen: <MailOpen />,
// // // // //   HiOutlineBriefcase: <Briefcase />,
// // // // // };

// // // // // const platformIcons: Record<string, ReactNode> = {
// // // // //   facebook: <FaFacebookF />,
// // // // //   instagram: <FaInstagram />,
// // // // //   linkedin: <FaLinkedinIn />,
// // // // //   twitter: <FaTwitter />,
// // // // // };

// // // // // export default function EnquirySection() {
// // // // //   const [enquiry, setEnquiry] = useState<EnquirySectionType | null>(null);
// // // // //   const [contacts, setContacts] = useState<ContactDetail[]>([]);
// // // // //   const [socials, setSocials] = useState<SocialLink[]>([]);

// // // // //   useEffect(() => {
// // // // //   async function load() {
// // // // //     try {
// // // // //       const enquiryRes = await fetchStrapi<{ data: EnquirySectionType | null }>('enquiry-section');
// // // // //       if (enquiryRes?.data) {
// // // // //         setEnquiry(enquiryRes.data);
// // // // //       }

// // // // //       const contactRes = await fetchStrapi<{ data: ContactDetail[] | null }>('contact-details');
// // // // //       if (contactRes?.data) {
// // // // //         setContacts(contactRes.data);
// // // // //       }

// // // // //       const socialRes = await fetchStrapi<{ data: SocialLink[] | null }>('social-links');
// // // // //       if (socialRes?.data) {
// // // // //         setSocials(socialRes.data);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Failed to load enquiry section:', error);
// // // // //     }
// // // // //   }

// // // // //   load();
// // // // // }, []);

// // // // //   if (!enquiry) return null;

// // // // //   const { subtitle, heading, formHeading, backgroundImage } = enquiry.attributes;
// // // // //   const bgUrl = backgroundImage?.data?.attributes?.url || '';

// // // // //   return (
// // // // //     <section
// // // // //       className="py-20 bg-cover bg-center text-white"
// // // // //       style={{ backgroundImage: `url(${bgUrl})` }}
// // // // //     >
// // // // //       <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
// // // // //         <h4 className="text-sm font-bold tracking-widest uppercase">{subtitle}</h4>
// // // // //         <h2 className="text-4xl font-bold">{heading}</h2>
// // // // //         <h3 className="text-xl">{formHeading}</h3>

// // // // //         <div className="grid gap-8 md:grid-cols-3 mt-10 text-left">
// // // // //           {contacts.map((item) => (
// // // // //             <div key={item.id} className="flex items-start space-x-4">
// // // // //               <div className="text-xl">{iconMap[item.icon.trim()] ?? null}</div>
// // // // //               <div>
// // // // //                 <h4 className="font-bold">{item.title}</h4>
// // // // //                 <p>{item.value}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         <div className="flex justify-center mt-10 space-x-6">
// // // // //           {socials.map((social) => (
// // // // //             <a
// // // // //               key={social.id}
// // // // //               href={social.url.trim()}
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               aria-label={social.platform}
// // // // //               className="text-white hover:text-gray-300"
// // // // //             >
// // // // //               {platformIcons[social.platform.toLowerCase()] ?? null}
// // // // //             </a>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }
// // // // 'use client';

// // // // import { useEffect, useState } from 'react';
// // // // import { getEnquirySection } from '@/utils/enquiry'; // adjust path
// // // // import type { EnquirySectionData } from '@/types/enquiry';

// // // // export default function EnquirySection() {
// // // //   const [enquiry, setEnquiry] = useState<EnquirySectionData | null>(null);

// // // //   useEffect(() => {
// // // //     async function fetchData() {
// // // //       const enquiryRes = await getEnquirySection();
// // // //       setEnquiry(enquiryRes);
// // // //     }

// // // //     fetchData();
// // // //   }, []);

// // // //   if (!enquiry) return null; // or a loader

// // // //   const { subtitle, heading, formHeading, backgroundImage } = enquiry;

// // // //   return (
// // // //     <section
// // // //       className="bg-cover bg-center py-20 px-4"
// // // //       style={{ backgroundImage: `url(${backgroundImage})` }}
// // // //     >
// // // //       <div className="max-w-3xl mx-auto text-white text-center space-y-4">
// // // //         <p className="text-sm font-medium tracking-widest">{subtitle}</p>
// // // //         <h2 className="text-3xl font-bold">{heading}</h2>
// // // //         <p className="text-lg">{formHeading}</p>
// // // //         {/* Render your form here */}
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useEffect, useState } from 'react';
// // // import { getEnquirySection } from '@/utils/enquiry';
// // // import type { EnquirySectionData } from '@/types/enquiry';

// // // export default function EnquirySection() {
// // //   const [enquiry, setEnquiry] = useState<EnquirySectionData | null>(null);

// // //   useEffect(() => {
// // //     async function fetchData() {
// // //       const enquiryRes = await getEnquirySection();
// // //       if (enquiryRes) setEnquiry(enquiryRes);
// // //     }

// // //     fetchData();
// // //   }, []);

// // //   if (!enquiry) return null; // or render a loader

// // //   const { subtitle, heading, formHeading, backgroundImage } = enquiry;

// // //   return (
// // //     <section
// // //       className="bg-cover bg-center py-20 px-4"
// // //       style={{ backgroundImage: `url(${backgroundImage})` }}
// // //     >
// // //       <div className="max-w-3xl mx-auto text-white text-center space-y-4">
// // //         <p className="text-sm font-medium tracking-widest">{subtitle}</p>
// // //         <h2 className="text-3xl font-bold">{heading}</h2>
// // //         <p className="text-lg">{formHeading}</p>
// // //         {/* Add form JSX here */}
// // //       </div>
// // //     </section>
// // //   );
// // // }
// // 'use client';

// // import { useEffect, useState } from 'react';
// // import {  getEnquirySection,  getContactDetails,  getSocialLinks,} from '@/utils/enquiry';
// // import type { EnquirySectionData, ContactDetail, SocialLink } from '@/types/enquiry';


// // export default function ContactSection() {
// //   const [enquiry, setEnquiry] = useState<EnquirySectionData | null>(null);
// //   const [contacts, setContacts] = useState<ContactDetail[]>([]);
// //   const [socials, setSocials] = useState<SocialLink[]>([]);

// //   useEffect(() => {
// //     async function fetchAll() {
// //       const [enquiryData, contactData, socialData] = await Promise.all([
// //         getEnquirySection(),
// //         getContactDetails(),
// //         getSocialLinks(),
// //       ]);
// //       setEnquiry(enquiryData);
// //       setContacts(contactData);
// //       setSocials(socialData);
// //     }

// //     fetchAll();
// //   }, []);

// //   if (!enquiry) return null;

// //   const { subtitle, heading, formHeading, backgroundImage } = enquiry;

// //   return (
// //     <section
// //       className="bg-cover bg-center py-20 px-4"
// //       style={{ backgroundImage: `url(${backgroundImage})` }}
// //     >
// //       <div className="max-w-4xl mx-auto text-white text-center space-y-8">
// //         <div>
// //           <p className="text-sm font-medium tracking-widest">{subtitle}</p>
// //           <h2 className="text-3xl font-bold">{heading}</h2>
// //           <p className="text-lg">{formHeading}</p>
// //         </div>

// //         {/* Contact Details */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
// //           {contacts.map((item) => (
// //             <div key={item.id} className="bg-white/10 p-4 rounded-lg">
// //               <div className="text-lg font-semibold">{item.icon}</div>
// //               <div className="text-lg font-semibold">{item.title}</div>
// //               <div className="text-sm">{item.value}</div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Social Links */}
// //         <div className="flex justify-center gap-4 mt-8">
// //           {socials.map((social) => (
// //             <a
// //               key={social.id}
// //               href={social.url}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition"
// //             >
// //               {social.platform}
// //             </a>
// //           ))}
// //         </div>

// //         {/* TODO: Add enquiry form here */}
// //       </div>
// //     </section>
// //   );
// // }
// 'use client';
// import api from '@/lib/api';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { getEnquirySection, getContactDetails, getSocialLinks } from '@/utils/enquiry';
// import type { EnquirySectionData, ContactDetail, SocialLink } from '@/types/enquiry';
// import { iconMap } from '@/utils/icon-map';

// export default function ContactSection() {
//   const [enquiry, setEnquiry] = useState<EnquirySectionData | null>(null);
//   const [contacts, setContacts] = useState<ContactDetail[]>([]);
//   const [socials, setSocials] = useState<SocialLink[]>([]);

//   useEffect(() => {
//     async function fetchAll() {
//       const [enquiryData, contactData, socialData] = await Promise.all([
//         getEnquirySection(),
//         getContactDetails(),
//         getSocialLinks(),
//       ]);
//       setEnquiry(enquiryData);
//       setContacts(contactData);
//       setSocials(socialData);
//     }

//     fetchAll();
//   }, []);

//   if (!enquiry) return null;

//   const { subtitle, heading, formHeading, backgroundImage } = enquiry;


//    const [formData, setFormData] = useState({
//      name: '',
//      phone: '',
//      service: '',
//      company: '',
//      agreed: true,
//      });

//      const [errors, setErrors] = useState<Record<string, string>>({});
//      const [formError, setFormError] = useState<string>('');


//      const handleChange = (
//      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//      ) => {
//          const { name, value, type, checked } = e.target as HTMLInputElement;

//          setFormData((prev) => ({
//              ...prev,
//              [name]: type === 'checkbox' ? checked : value,
//          }));

//          setErrors((prevErrors) => ({
//              ...prevErrors,
//              [name]: '',
//          }));
//      };


//      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//          e.preventDefault();

//          const newErrors: Record<string, string> = {};
//          setFormError('');

//          // ✅ Basic validation
//          if (!formData.name.trim()) newErrors.name = 'Please fill out this field.';
//          if (!formData.phone.trim()) newErrors.phone = 'Please fill out this field.';
//          if (!formData.service.trim()) newErrors.service = 'Please select a service.';
//          if (!formData.company.trim()) newErrors.company = 'Please fill out this field.';
//          if (!formData.agreed) newErrors.agreed = 'You must agree before submitting.';

//          setErrors(newErrors);

//          if (Object.keys(newErrors).length > 0) {
//              setFormError('One or more fields have an error. Please check and try again.');
//              return;
//          }

//          try {
//              // ✅ Axios POST to Strapi endpoint
//              const res = await api.post('/api/enquiries', {
//              data: formData,
//              });
//              console.log('Response:', res.data); // ✅ using res
//              alert('Enquiry submitted successfully!');
//              setFormData({
//              name: '',
//              phone: '',
//              service: '',
//              company: '',
//              agreed: true,
//              });
//              } catch (err: unknown) {
//              if (axios.isAxiosError(err)) {
//                  const errorMessage =
//                  err.response?.data?.error?.message || err.message || 'Something went wrong';
//                  console.error('Axios error:', errorMessage);
//                  setFormError(errorMessage);
//              } else {
//                  console.error('Unknown error:', err);
//                  setFormError('An unexpected error occurred.');
//              }
//          }
//      };

//   return (
//     <div>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-0">
//           {/* === Left: Contact Info === */}
//           <div className="mb-20 mt-20 ">
//             <h2 className="text-medium text-green-600 font-semibold mb-2">{subtitle}</h2>
//             <p className="text-2xl text-black font-bold ">
//               {heading}              
//             </p>
//           </div>
//       </div> 
//     <section
//       className="bg-cover bg-center py-20 px-4"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="max-w-4xl mx-auto text-white text-center space-y-8">
//         <div>
//           <p className="text-lg">{formHeading}</p>
//         </div>

//         {/* Contact Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
//           {contacts.map((item) => {
//           const Icon = iconMap[item.icon];
//           console.log('Rendering icon for:', item.icon, 'Icon:', Icon);
//           return (
//             <div key={item.id} className="bg-white/10 p-4 rounded-lg">
//               {Icon ? <Icon className="text-xl mb-2" /> : <div>Invalid icon</div>}
//                 <div className="text-lg font-semibold">{item.title}</div>
//                 <div className="text-sm">{item.value}</div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-4 mt-8">
//           {socials.map((social) => {
//             const Icon = iconMap[social.platform];
//             return (
//               <a
//                 key={social.id}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white/10 px-4 py-2 rounded hover:bg-white/20 transition flex items-center gap-2"
//               >
//                 {Icon && <Icon className="text-xl" />}
//               </a>
//             );
//           })}
//         </div>
// <div className="absolute top-0 right-25 h-full mt-0 z-10 text-white flex items-center justify-center">
//                  <section className=" bg-white text-black flex  gap-8">        
//                      <div className="mt=0">
//                          {/* === Right: Form === */}
//                          <form onSubmit={handleSubmit} className="space-y-4 px-10 py-20 mt-2 w-160 mx-auto border-0  bg-white p-6 shadow">
//                              <div className="flex items-center gap-3 mb-13">
//                                  <h3 className="text-2xl font-semibold">Tell Us What is On Your Mind?</h3>
//                              </div>

//                              <div className="mb-6">
//                                  <label className="block font-semibold mb-1">NAME</label>
//                                  <input
//                                  type="text"
//                                  name="name"
//                                  value={formData.name}
//                                  onChange={handleChange}
//                                  className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
//                                  />
//                                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
//                              </div>

//                              <div className="mb-6">
//                                  <label className="block font-semibold mb-1">PHONE NUMBER</label>
//                                  <input
//                                  type="tel"
//                                  name="phone"
//                                  value={formData.phone}
//                                  onChange={handleChange}
//                                  className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
//                                  />
//                                  {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
//                              </div>

//                              <div className="flex flex-col md:flex-row gap-4 mb-6">
//                                  <div className="flex-1">
//                                  <label className="block font-semibold mb-1">SERVICES</label>
//                                  <select
//                                      name="service"
//                                      value={formData.service}
//                                      onChange={handleChange}
//                                      className="w-full px-4 py-3 mb-1 rounded-md bg-gray-100"
//                                  >
//                                      <option value="">— Please choose an option —</option>
//                                      <option value="web">Website Development</option>
//                                      <option value="app">Mobile App Development</option>
//                                      <option value="seo">SEO / Digital Marketing</option>
//                                      <option value="ecom">eCommerce Solutions</option>
//                                  </select>
//                                  {errors.service && <p className="text-red-600 text-xs mt-1">{errors.service}</p>}
//                                  </div>

//                                  <div className="flex-1">
//                                  <label className="block font-semibold mb-1">COMPANY NAME</label>
//                                  <input
//                                      type="text"
//                                      name="company"
//                                      value={formData.company}
//                                      onChange={handleChange}
//                                      className="w-full px-4 py-3 rounded-md mb-1 bg-gray-100"
//                                  />
//                                  {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
//                                  </div>
//                              </div>

//                              <div className="flex items-start gap-2 text-sm mt-3">
//                                  <input
//                                  type="checkbox"
//                                  name="agreed"
//                                  checked={formData.agreed}
//                                  onChange={handleChange}
//                                  className="mt-1"
//                                  />
//                                  <label htmlFor="agree">
//                                  By continuing I accept the terms and conditions and privacy policy.
//                                  </label>
//                              </div>
//                              {errors.agreed && <p className="text-red-600 text-xs mt-1">{errors.agreed}</p>}

//                              <button
//                                  type="submit"
//                                  className="bg-green-600 text-white mb-4 px-6 py-3 rounded-full font-semibold w-full hover:bg-green-700 transition"
//                              >
//                                  SUBMIT
//                              </button>

//                              {formError && (
//                                  <p className="text-green-800 font-semibold text-medium">{formError}</p>
//                              )}
//                          </form>
//                      </div>
//                  </section>
//              </div>
//         {/* TODO: Add enquiry form here */}
//       </div>
//     </section>
//     </div>
//   );
// }
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
