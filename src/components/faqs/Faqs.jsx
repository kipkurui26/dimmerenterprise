import { useState } from "react";
import "./faqs.css";
import { FaChevronRight, FaChevronUp } from "react-icons/fa";

const Faqs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  
  const toggleAccordion = (index) => {
    setCurrentIndex(currentIndex === index ? null : index);
  };
  const faqList = [
    {
      id: 1,
      question:
        "What sets Dimmer Enterprises LTD apart from other companies in the industry?",
      answer:
        "Our commitment to quality, innovative solutions, and customer satisfaction sets us apart. We prioritize eco-friendly practices and offer customized solutions to meet our clients' unique needs.",
    },
    {
      id: 2,
      question:
        "How can I schedule a consultation with Dimmer Enterprises LTD?",
      answer:
        "You can schedule a consultation by filling out the contact form on our website, calling our customer service line, or visiting our office. We will arrange a convenient time to discuss your project.",
    },
    {
      id: 3,
      question: "Is a geological survey necessary before drilling a borehole?",
      answer:
        "Yes, a geological survey is crucial for assessing the site conditions, determining the best location for drilling, and estimating the depth and yield of the borehole. This helps in planning and cost estimation.",
    },
    {
      id: 4,
      question: "How long does it take to drill a borehole?",
      answer:
        "The time required to drill a borehole varies based on factors such as the depth, diameter, geology, and accessibility of the site. On average, drilling can take anywhere from a few days to several weeks.",
    },
    {
      id: 5,
      question: "What factors determine the depth of a borehole?",
      answer:
        "The depth of a borehole depends on several factors, including the depth of the water table, the geology of the area, and the intended use of the borehole (e.g., domestic, agricultural, or industrial use).",
    },
  ];
  return (
    <section className="faqs">
      <h2 className="faqs__title">Frequently Asked Questions</h2>
      <div className="faqs__container">
        {faqList.map(({ id, question, answer }) => (
          <div
            className="faqs__content"
            key={id}
            onClick={() => toggleAccordion(id)}
          >
            <div className="faqs__content--q">
              <span className="faqs__content--title">{question}</span>{" "}
              {currentIndex === id ? (
                  <FaChevronUp className="faqs__content--icon" />
            ) : (
                <FaChevronRight className="faqs__content--icon" />
                )}
            </div>
            {currentIndex === id && (
              <div className="faqs__content--a">
                <span className="faqs__content--text">{answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
