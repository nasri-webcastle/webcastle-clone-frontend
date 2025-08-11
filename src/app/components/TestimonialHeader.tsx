import { getTestimonialPage } from "@/utils/testimonial";

export default async function TestimonialHeader() {
  const data = await getTestimonialPage();
  if (!data) return null;

  return (
    <section className="relative w-full h-[550px] flex items-center justify-start text-left"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#4f4c5fcc] mix-blend-multiply bg-opacity-2" />
      <div className="relative z-20 max-w-6xl px-6 md:px-30 space-y-4">
        <p className="text-white text-4xl md:text-6xl font-bold mb-6">{data.title}</p>
        <p className="text-white text-md max-w-2xl">{data.description}</p>
      </div>      
    </section>
  );
}
