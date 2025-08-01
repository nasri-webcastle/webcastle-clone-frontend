'use client';
import { useState } from 'react';

const faqs = [
  {
    question: 'What are the security standards you follow for web designing?',
    answer:
      'WebCastle upholds unique security standards to serve our clients, keeping a high priority on safety and security. We keep utmost confidentiality on the data from the client side and undertake optimal measures to store the client data securely. Each and every stage of design and development is subjected to a security check and we never back down from our assigned responsibilities.',
  },
  {
    question: 'How do you choose the ideal technology for my project?',
    answer:
      'The right technology choice is completely based on your requirements, objectives, design style, features, and more. Your views are completely taken into consideration while evaluating project resources and so happens in determining the technology that goes apt for your requirements. All the technology pros and cons are well analyzed before confirming and proposing.',
  },
  {
    question: 'Why is Webcastle among the top website designing companies in Kochi, Kerala?',
    answer:
      'WebCastle is a firm development company in Kochi, which has gained pace of growth with dedicated efforts and commitment. Our exemplary services at international standards have attracted more client base towards us. Reach out to us to attain optimistic and constructive solutions that would beneficially aid you with the growth you expect for.',
  },
  {
    question: 'How are the resources assigned to a new web designing project?',
    answer:
      'Our resource base is vast and the resource we assign for each project is solely on the features each project demands. Our expertise in creating professionally designed websites makes the procedure resource hunt a totally free job.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-18 bg-[#f4fdf4]">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>

        <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white ">
                  <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center text-lg w-full px-6 py-5 text-left font-semibold text-gray-800 hover:bg-gray-100 transition"
                  >
                    {faq.question}
                    <span className="text-3xl">
                    {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {openIndex === index && (
                  <div className="px-6 pb-4 text-medium text-gray-500">
                    {faq.answer}
                  </div>
                  )}
              </div>
            ))}
        </div>
    </section>
  );
}

