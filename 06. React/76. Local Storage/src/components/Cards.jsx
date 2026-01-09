import React from "react";

const Cards = (props) => {
  
  return (
    <div
      className="
        flex flex-col justify-between w-[20%] h-100 text-white font-sans
        border-5 border-[rgba(73,70,70,0.28)] 
        rounded-4xl overflow-hidden
        transition-all duration-300 ease-in-out
        hover:scale-[1.02]
        group relative
        bg-cover
        bg-clip-padding
        backdrop-blur
      "
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <div className="flex items-center justify-end w-full opacity-0 group-hover:opacity-100">
        <button onClick={()=> {
          props.removeHandler(props.idx);
        }} className="flex justify-center items-center active:scale-95 m-3 w-6 h-6 rounded-xl bg-[rgba(56,55,55,0.6)]">
            <i className="ri-close-line text-white"></i>
        </button>
      </div>
      <div
        className="
          flex flex-col gap-1 w-full pt-15 p-5
          bg-white/15
          backdrop-blur-lg
          mask-[linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]
        "
      >
        <h1 className="font-semibold text-xl flex gap-3">
          {props.name}
          <span className="text-blue-500">
            <i className="ri-verified-badge-fill"></i>
          </span>
        </h1>

        <h3 className=" text-sm">{props.role}</h3>
        <h3 className="font-extralight text-xs">{props.desc}</h3>
        <h3 className="font-extralight"><i className="ri-mail-line text-sm pr-2"></i>{props.email}</h3>
      </div>
    </div>
  );
};

export default Cards;