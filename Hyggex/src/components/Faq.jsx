import FAQDropdown from "../partials/FaqDropdown";

export default function Faq() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="flex flex-col gap-[3vw] mt-[6vw]">
        <h1 className="bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent text-[4vw] font-bold inline-block">
          FAQ
        </h1>
        <div className="flex flex-col gap-[2vw]">
          <FAQDropdown
            question="Can education flashcards be used for all age groups?"
            answer="Answer 1"
          />

          <FAQDropdown
            question="How do education flashcards work?"
            answer="Answer 2"
          />

          <FAQDropdown
            question="Can education flashcards be used for test preparation?"
            answer="Answer 3"
          />
        </div>
      </div>
    </div>
  );
}
