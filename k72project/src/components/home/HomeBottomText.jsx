import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex items-center justify-center gap-3">
      <p className="absolute lg:w-70 lg:right-10 right-0 lg:bottom-40 bottom-20 text-sm font-[font1] leading-relaxed"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
      <div className="text-[6.5vw] uppercase border-2 border-white text-white rounded-full px-8 py-1 pt-4 pb-0 leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center">
        <Link className="text-[6vw] " to="/projects ">
          Projects
        </Link>
      </div>

      <div className="text-[6.5vw] uppercase border-2 border-white text-white rounded-full px-8 py-1 pt-4 leading-[6vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center">
        <Link className="text-[6vw] " to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
