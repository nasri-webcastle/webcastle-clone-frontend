import {
  FaShopify,
  FaLaravel,
  FaPython,
  FaWordpress,
  FaMagento,
  FaAndroid,
  FaApple,
  FaNodeJs,
} from 'react-icons/fa';
import { SiFlutter, SiNextdotjs, SiWebflow, SiStrapi } from 'react-icons/si';

const technologies = [
  { name: 'Shopify', icon: <FaShopify className="text-[#88BA49]" /> },
  { name: 'Flutter', icon: <SiFlutter className="text-sky-500" /> },
  { name: 'iOS', icon: <FaApple className="text-black" /> },
  { name: 'Laravel', icon: <FaLaravel className="text-red-600" /> },
  { name: 'Magento', icon: <FaMagento className="text-orange-600" /> },
  { name: 'Node JS', icon: <FaNodeJs className="text-green-700" /> },
  { name: 'Python', icon: <FaPython className="text-yellow-500" /> },
  { name: 'WordPress', icon: <FaWordpress className="text-blue-600" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
  { name: 'Webflow', icon: <SiWebflow className="text-indigo-500" /> },
  { name: 'Strapi', icon: <SiStrapi className="text-purple-500" /> },
  { name: 'Android', icon: <FaAndroid className="text-green-500" /> },
];

export default function TechnologiesSection() {
  return (
    <section className="py-10 px-6 md:px-10 bg-white text-center rounded-2xl my-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-md font-semibold text-green-700 dark:text-gray-300 mb-3">
          TECHNOLOGIES
        </p>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-3">
          Speed Up your Workflow With Our 
        </h2>
        <h2 className="text-3xl font-bold text-black dark:text-white mb-2">
          Technologies 
        </h2>
        
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-raw  bg-[#f8f5f5] text-[#242424] px-1  rounded-4xl shadow hover:shadow-md transition"
          >
            <div className="text-3xl mb-3 bg-white border-0 ml-1 rounded-full p-5 mr-2 mt-2">{tech.icon}</div>
            <div className="text-medium  font-bold ml-4 items-center mt-8">{tech.name}</div>
          </div>      
        ))}
      </div>
      </div>
    </section>
  );
}
