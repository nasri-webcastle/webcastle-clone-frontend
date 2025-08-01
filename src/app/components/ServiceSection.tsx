"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import CustomCursor from "./CustomCursor";
import { fetchServices } from "@/utils/api";
import { ServiceSection } from "@/types/service-section";
import { iconMap } from "@/utils/icon-map";
import { IconType } from "react-icons";

const techIconStyle = "text-gray-500 text-4xl";

// Local frontend style map for icon backgrounds and hover borders
const frontendStyleMap: Record<string, string> = {
  "Website Designing": "bg-[#ec0c44d7] hover:border-[#ec0c44d7] hover:text-[#ec0c44d7]",
  "eCommerce Development": "bg-[#5314ee] hover:border-[#5314ee]",
  "Mobile App Development": "bg-green-700 hover:border-green-700",
  "ERP Development": "bg-[#6cbbfd] hover:border-[#6cbbfd]",
  "Digital Marketing": "bg-[#a749fa] hover:border-[#a749fa]",
};

const ServiceCard: React.FC = () => {
  const [services, setServices] = useState<ServiceSection[]>([]);
  const [cursorText, setCursorText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    getData();
  }, []);

  return (
    <>
      {showCursor && <CustomCursor text={cursorText} visible={showCursor} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#f1f2f1] boder-[#f1f2f1] lg:grid-cols-3 gap-7 p-6  justify-items-center px-20">
        {services.map((service) => {
          const IconComponent: IconType | undefined = iconMap[service.icon];
          const iconBgClass = `group p-4 rounded-full hover:bg-white border-0 hover:border transition ${
            frontendStyleMap[service.title] || "bg-gray-400 hover:border-gray-400"
          }`;

          return (
            <div
              key={service.id}
              className="relative p-8 max-w-88 rounded-2xl min-h-90 bg-white shadow-md hover:shadow-lg transition duration-300"
              onMouseEnter={() => {
                setCursorText(service.title);
                setShowCursor(true);
              }}
              onMouseLeave={() => setShowCursor(false)}
            >
              <div className={clsx("inline-flex items-center justify-center mb-6", iconBgClass)}>
                {IconComponent && (
                  <IconComponent className="text-4xl text-white group-hover:text-inherit transition" />
                )}
              </div>

              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-shadow-black text-medium">{service.description}</p>

              {service.techIcon?.length > 0 && (
                <div className="flex flex-wrap gap-6 ml-0 absolute bottom-5">
                  {service.techIcon.map((tech) => {
                    const TechIcon = iconMap[tech.reactIcon];
                    return (
                      <span key={tech.id} className={clsx("inline-flex items-center justify-center rounded-md", techIconStyle)}>
                        {TechIcon && <TechIcon />}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceCard;
