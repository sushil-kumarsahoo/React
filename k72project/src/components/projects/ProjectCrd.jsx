import React from "react";

const ProjectCrd = (props) => {
  return (
    <>
    
      <div className="w-1/2 h-full rounded-none transition-all hover:rounded-[50px] overflow-hidden relative group">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt=""
        />

        <div className=" opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center ">
          <h2 className="uppercase text-white text-6xl font-[font2]border-2 rounded-full pt-1 border-4 px-4 ">
            view project
          </h2>
        </div>
      </div>

      <div className="w-1/2 h-full rounded-none transition-all hover:rounded-[50px] overflow-hidden relative group">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt=""
        />

        <div className=" opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center ">
          <h2 className="uppercase text-white text-6xl font-[font2]border-2 rounded-full pt-1 border-4 px-4 ">
            view project
          </h2>
        </div>
      </div>

    </>
  );
};

export default ProjectCrd;
