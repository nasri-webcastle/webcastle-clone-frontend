import Image from "next/image";
import { getTestimonials } from "@/utils/testimonial";

export default async function ClientsFeedback() {
  const testimonials = await getTestimonials();

  return (
    <section className="pt-25 pb-2">
      <div className="max-w-6xl mx-auto">
        {testimonials.length === 0 ? (
          <p className="text-gray-500">No testimonials available at the moment.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 px-4">
           {testimonials.map((t, index) => (
              <div
                key={t.id ?? `testimonial-${index}`}
                className={`p-10 rounded-lg shadow-xl min-h-6 ${ index % 2 === 0 ? "mb-10" : "mt-10"}`}
              >
                <div className="flex gap-6 items-start">
                  {/* Image Section */}
                  {t.quotesImage && (
                    <Image
                      src={t.quotesImage}
                      alt="Quote Icon"
                      width={39}
                      height={71}
                      className="flex-shrink-0"
                    />
                  )}
                  {/* Text Section */}
                  <div className="mt-7 text-black">
                    <p className="inline text-sm mb-7 max-w-md whitespace-normal">
                      {t.message}
                    </p>
                  </div>
                </div>

                <div className="max-w-xl ml-auto text-right mb-4 text-black">
                  {/* Horizontal Line */}
                  <div className="border-t-[3px] border-green-600 mt-6 mb-2 w-38 ml-auto" />
                  <div className="font-semibold text-xl mb-2">{t.name}</div>
                  <div className="text-sm mb-2">{t.designation}</div>
                  <div className="text-sm mb-1">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
