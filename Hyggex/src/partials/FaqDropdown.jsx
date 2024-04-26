import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQDropdown = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-blue-400 rounded-xl">
      <button
        className="w-full flex justify-between items-center px-[2vw] py-[1vw] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>

        <FaChevronDown className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}/>

      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQDropdown;

