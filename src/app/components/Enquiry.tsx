"use client";
import api from '@/lib/api';
import axios from 'axios';
import { useState } from "react";
import { Mail, Phone, Briefcase } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const contactInfo = [
  {
    title: "CONTACT US",
    value: "+91484405 2626",
    icon: <Phone className="h-5 w-5 text-white" />,
  },
  {
    title: "MAIL US TO",
    value: "sales@webcastle.in",
    icon: <Mail className="h-5 w-5 text-white" />,
  },
  {
    title: "FOR CAREER",
    value: "hr@webcastle.in",
    icon: <Briefcase className="h-5 w-5  text-white" />,
  },
];

export default function EnquirySection() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};
        setFormError('');

        // ✅ Basic validation
        if (!formData.name.trim()) newErrors.name = 'Please fill out this field.';
        if (!formData.phone.trim()) newErrors.phone = 'Please fill out this field.';
        if (!formData.service.trim()) newErrors.service = 'Please select a service.';
        if (!formData.company.trim()) newErrors.company = 'Please fill out this field.';
        if (!formData.agreed) newErrors.agreed = 'You must agree before submitting.';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setFormError('One or more fields have an error. Please check and try again.');
            return;
        }

        try {
            // ✅ Axios POST to Strapi endpoint
            const res = await api.post('/api/enquiries', {
            data: formData,
            });
            console.log('Response:', res.data); // ✅ using res
            alert('Enquiry submitted successfully!');
            setFormData({
            name: '',
            phone: '',
            service: '',
            company: '',
            agreed: true,
            });
            } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                const errorMessage =
                err.response?.data?.error?.message || err.message || 'Something went wrong';
                console.error('Axios error:', errorMessage);
                setFormError(errorMessage);
            } else {
                console.error('Unknown error:', err);
                setFormError('An unexpected error occurred.');
            }
        }
    };
    return ( 
        <div className="relative w-full">
            <div className=" bg-[#fcfdfd] text-gray-800">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-0">
                    {/* === Left: Contact Info === */}
                    <div className="mb-20 mt-20 ">
                        <h2 className="text-medium text-green-600 font-semibold mb-2">ENQUIRY</h2>
                        <p className="text-2xl text-black font-bold ">
                            Let’s get in touch
                        </p>
                    </div>
                </div> 
                <section>
                    <div className="footer-form bg-cover bg-fixed bg-center bg-no-repeat  w-full py-1 px-20 h-[550px]"
                        style={{
                            backgroundImage: "url('https://webcastletech.com/wp-content/uploads/2025/02/footerimage.webp')",
                        }}>
                        <div className="w-80 ml-6 space-y-8 mt-2 ">
                                <div className="space-y-6 text-base">
                                    {contactInfo.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-5 px-7 py-5  bg-[#a6a8a74d] rounded-xl  hover:bg-green-500 transition-colors duration-300"
                                        >
                                                {/* Icon */}
                                                <div className="text-white mt-4 ">{item.icon}</div>
                                            
                                                {/* Title and Value */}
                                                <div className="flex flex-col text-white  border-l-1  pl-5 gap-y-1 text-medium font-semibold">
                                                    <p className=" ">{item.title}</p>
                                                    <p className="text-lg ">{item.value}</p>
                                                </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-6 mt-4">
                                    <a href="https://www.facebook.com/webcastlemedia" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
                                        <FaFacebookF size={14} />
                                    </a>
                                    <a href="https://www.instagram.com/webcastletech/" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
                                        <FaInstagram size={14} />
                                    </a>
                                    <a href="https://in.linkedin.com/company/webcastle" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
                                        <FaLinkedinIn size={14} />
                                    </a>
                                    <a href="https://x.com/webcastletech" target="_blank" rel="noopener noreferrer" className="text-white hover:bg-green-600 bg-[#a6a8a74d] p-4 border-0 rounded-4xl">
                                        <FaTwitter size={14} />
                                    </a>
                                </div>
                            </div>
                    </div>
                </section>
            </div>

            <div className="absolute top-0 right-25 h-full mt-0 z-10 text-white flex items-center justify-center">
                <section className=" bg-white text-black flex  gap-8">        
                    <div className="mt=0">
                        {/* === Right: Form === */}
                        <form onSubmit={handleSubmit} className="space-y-4 px-10 py-20 mt-2 w-160 mx-auto border-0  bg-white p-6 shadow">
                            <div className="flex items-center gap-3 mb-13">
                                <h3 className="text-2xl font-semibold">Tell Us What is On Your Mind?</h3>
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
        </div>    
    )
}   