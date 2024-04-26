import HomeIcon from "../assets/HomeIcon.png";
import GreaterThanIcon from "../assets/GreaterThanIcon.png";
import LogoFrame from "../assets/Frame 41.png";
import FilledAddIcon from "../assets/FilledAddIcon.png";
import { NavLink, Outlet } from "react-router-dom";
import FAQDropdown from "../partials/FaqDropdown";

export default function FlashCard() {
  return (
    <div className="px-[6.5vw] sm:py-10 py-5 font-['Montserrat']">
      {/* made it static here, (can be made dynamic in future using state) */}
      <div className="flex items-center gap-[1.2vw] text-zinc-500 font-semibold sm:text-[1vw] text-[2.7vw]">
        <img className="w-[2vw]" src={HomeIcon} alt="" />

        <div className="flex items-center gap-[1.2vw]">
          <img className="w-[0.9vw]" src={GreaterThanIcon} alt=">" />
          <h2>Flashcard</h2>
        </div>

        <div className="flex items-center gap-[1.2vw]">
          <img className="w-[0.9vw]" src={GreaterThanIcon} alt=">" />
          <h2>Mathematics</h2>
        </div>

        <div className="flex items-center gap-[1.2vw] text-blue-900">
          <img className="w-[0.9vw]" src={GreaterThanIcon} alt=">" />
          <h2>Relation and Function</h2>
        </div>
      </div>

      <h1 className="my-10 bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent sm:text-[2vw] text-[4vw] font-bold">
        Relations and Functions ( Mathematics )
      </h1>

      <div className="w-full">
        <div className="w-full flex justify-center items-center gap-[2.5vw] font-semibold text-zinc-500">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-b-blue-900 w-16"
                : "w-16"
            }
          >
            <span className="border-b-blue-900 border-b-2 inline-block w-0 hover:w-full transition-all duration-500 delay-100">
              Study
            </span>
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-b-blue-900 w-16"
                : "w-16"
            }
          >
            <span className="border-b-blue-900 border-b-2 inline-block w-0 hover:w-full transition-all duration-500 delay-100">
              Quiz
            </span>
          </NavLink>
          <NavLink
            to="/test"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-b-blue-900 w-16"
                : "w-16"
            }
          >
            <span className="border-b-blue-900 border-b-2 inline-block w-0 hover:w-full transition-all duration-500 delay-100">
              Test
            </span>
          </NavLink>
          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-b-blue-900 w-16"
                : "w-16"
            }
          >
            <span className="border-b-blue-900 border-b-2 inline-block w-0 hover:w-full transition-all duration-500 delay-100">
              Game
            </span>
          </NavLink>
          <NavLink
            to="/other"
            className={({ isActive }) =>
              isActive
                ? "text-blue-900 border-b-2 border-b-blue-900 w-16"
                : "w-16"
            }
          >
            <span className="border-b-blue-900 border-b-2 inline-block w-0 hover:w-full transition-all duration-500 delay-100">
              Others
            </span>
          </NavLink>
        </div>

        <div className="w-full flex justify-center py-10">
          <Outlet />
        </div>
      </div>

      <div className="flex justify-between">
        <img
        className="w-[20vw]"
        src={LogoFrame} alt="" />
        <button>
          <div className="flex text-blue-900 text-[2.5vw] items-center gap-[1vw] font-bold">
            <img 
            className="w-[4vw]"
            src={FilledAddIcon} alt="" />
            <h1>Create Flashcard</h1>
          </div>
        </button>
      </div>

      <div className="flex flex-col gap-[3vw] mt-[6vw]">
        <h1 className="bg-gradient-to-b from-blue-900 to-blue-700 bg-clip-text text-transparent sm:text-[4vw] text-[7vw] font-bold inline-block">
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
