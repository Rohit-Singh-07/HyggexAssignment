import LightIcon from "../assets/LightIcon.png";
import SpeakertIcon from "../assets/SpeakerIcon.png";
import GreaterthanFilled from "../assets/GreaterthanFilled.png";
import LessthanIFilled from "../assets/LessthanFilled.png";
import FullScreenIcon from "../assets/FullScreenIcon.png";
import ReloadIcon from "../assets/ReloadIcon.png";

export default function Study() {
  return (
    <div>
      <div className="relative lg:w-[45vw] md:w-[65vw] sm:w-[75vw] w-[80vw] flex justify-center items-center h-[45vh] bg-gradient-to-bl from-blue-900 to-blue-500 rounded-3xl text-white">
        <h2 className="text-[3vw] font-bold font-['Lato']">
          Test
        </h2>
        <div className="absolute top-0 w-full flex justify-between p-[2vw]">
          <img src={LightIcon} alt="" />
          <img src={SpeakertIcon} alt="" />
        </div>
      </div>

      <div className="flex justify-between  sm:py-[2vw] py-[9vw]">
        <img className="object-contain sm:w-8 w-[7vw]" src={ReloadIcon} alt="" />
        <div className="flex justify-between items-center sm:w-[40%] w-[60%]">
          <img
            className="object-contain sm:w-16 w-[10vw]"
            src={GreaterthanFilled}
            alt=""
          />
          <h2 className="font-bold">01/10</h2>
          <img
            className="sm:w-16 w-[10vw]"
            src={LessthanIFilled}
            alt=""
          />
        </div>

        <img className="object-contain sm:w-8 w-[7vw]" src={FullScreenIcon} alt="" />
      </div>
    </div>
  );
}
