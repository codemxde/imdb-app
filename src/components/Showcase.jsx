import godfather from "../assets/godfather.jpg";
import fiction from "../assets/pulp-fiction.jpg";

import thunder from "../assets/thunder.jpg";
import joker from "../assets/joker.jpg";

import eternal from "../assets/eternal.jpg";
import interstellar from "../assets/interstellar.jpg";

export default function Showcase() {
  return (
    <div className="overflow-hidden">
      <ul className="flex flex-nowrap gap-12 justify-evenly px-8 w-max animate-marquee">
        {/* FIRST COPY */}
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={joker} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={eternal} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={interstellar} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={godfather} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={fiction} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={thunder} alt="" className="h-full w-full object-cover" />
        </li>

        {/* SECOND COPY */}
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={joker} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={eternal} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={interstellar} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={godfather} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={fiction} alt="" className="h-full w-full object-cover" />
        </li>
        <li className="w-64 sm:w-72 lg:w-80  xl:w-96">
          <img src={thunder} alt="" className="h-full w-full object-cover" />
        </li>
      </ul>
    </div>
  );
}
