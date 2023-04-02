import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What makes your water so unique?",
      answer:
        "Our water is sourced from the purest underground springs and undergoes a rigorous purification process to ensure the highest quality and taste. It's then infused with natural minerals for a unique, luxurious taste that's unmatched by any other water.",
    },
    {
      question: "Can I purchase your water in bulk?",
      answer:
        "Yes, we offer bulk purchasing options. Please check our products page or contact our customer service department for more information.",
    },
    {
      question: "What are the health benefits of drinking your water?",
      answer:
        "Our water is rich in natural minerals that can help improve digestion, boost immunity, and promote healthy skin. Plus, its refreshing taste will leave you feeling energized and rejuvenated.",
    },
    {
      question: "Can I purchase your water in glass bottles?",
      answer:
        "Yes, we offer our water in reusable, recyclable glass bottles. Our commitment to sustainability extends to our packaging materials.",
    },
    {
      question: "How do I store your water?",
      answer:
        "To maintain its quality and taste, we recommend storing our water in a cool, dry place away from direct sunlight.",
    },
    {
      question: "Do you offer a subscription service?",
      answer:
        "Soon, our team is expanding to provide such services as fast as possible.",
    },
  ];

  return (
    <div className="bg-faqbg bg-cover bg-no-repeat bg-center h-screen flex items-center p-5">
      <div className="container mx-auto">
        <h2 className="text-5xl text-white font-semibold text-center py-6 md:py-12 drop-shadow-lg">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                type="button"
                className="flex items-center justify-between w-full bg-gray-100/80 backdrop-blur p-4 rounded-t-md focus:outline-none"
                onClick={() => handleClick(index)}
              >
                <span className="font-bold">{faq.question}</span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeIndex === index && (
                <div className="bg-gray-100/60 backdrop-blur p-4 rounded-b-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
