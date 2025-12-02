import React from "react";
import Video from "./Video";
const HomeHeroText = () => {
  return (
    <div className="text-white mt-37 lg:mt-0 font-[font1] text-center ">
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
        The spark for
      </div>
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
        all
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
