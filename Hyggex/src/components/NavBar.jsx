import { NavLink } from "react-router-dom";
import HyggexLogo from '../assets/HyggexLogo.png'

function NavBar() {
  return (
    <div className="flex justify-between items-center px-[6.5vw] h-[5.6vw] ">
      <img
      className="object-cover md:w-48"
       src={HyggexLogo} alt="" />
      <div className="flex justify-between items-center w-[35vw] font-['Inter']">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "")}
      >
        Flash Card
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "")}
      >
        Contact
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "" : "")}
      >
        FAQ
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "px-[2vw] py-[0.5vw] bg-gradient-to-b from-blue-900 to-blue-700 rounded-full text-white" : "px-[2vw] py-[2vw] bg-gradient-to-r from-cyan-500 to-blue-500")}
      >
        Login
      </NavLink>
      </div>
    </div>
  )
}

export default NavBar
