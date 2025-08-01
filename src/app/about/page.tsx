// src/app/about/page.tsx
import AboutBanner from "@/app/components/AboutBanner";
import AboutIntro from "@/app/components/AboutIntro";
import CoreValues from "@/app/components/CoreValues";
import TeamSection from "@/app/components/TeamSection";
import Awards from "@/app/components/Awards";
import EnquirySection from "@/app/components/Enquiry";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <AboutBanner />
      <AboutIntro />
      <CoreValues/>
      <TeamSection/>
      <Awards/>
      <EnquirySection/>      
    </main>
  );
}
