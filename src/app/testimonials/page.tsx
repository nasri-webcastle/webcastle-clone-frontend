import TestimonialHeader from "@/app/components/TestimonialHeader";
import EnquirySection from '@/app/components/Enquiry';
import ClientsFeedback from "@/app/components/ClientsFeedback";

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialHeader/>
      <ClientsFeedback/>
      <EnquirySection/>
    </main>
  );
}
