import { Link } from "react-router-dom";
import HyggexLogo from "../assets/HyggexLogo.png";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  return (
    <div className="flex justify-between items-center px-[6.5vw] h-[11vh] ">
      <img className="object-cover lg:w-48 md:w-32 w-24" src={HyggexLogo} alt="" />

      <IoMenu className="sm:hidden"/>
      <div className="sm:flex justify-between items-center lg:w-[35vw] md:w-[45vw] w-[50vw] font-['Inter'] hidden">
        <Link to="/home">
          Home
        </Link>

        <Link to="/">
          Flashcard
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/faq">
          FAQ
        </Link>

        <Link
          to="/"
          className="px-[2vw] py-[0.5vw] bg-gradient-to-b from-blue-900 to-blue-700 rounded-full text-white"gin>
            Login
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
