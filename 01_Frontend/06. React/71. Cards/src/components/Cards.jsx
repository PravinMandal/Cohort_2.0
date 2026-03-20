import React from "react";

const Cards = ({ image, name, bio, followers, posts }) => {
  return (
    <div
      className="flex flex-col justify-end w-[25%] h-[90%] text-white border-4 border-white bg-white rounded-4xl bg-cover overflow-hidden font-sans"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className="
          flex flex-col gap-2 w-full pt-15 p-5

          bg-white/15
          backdrop-blur-lg

          mask-[linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_30%,black_100%)]

        "
      >
        <h1 className="font-semibold text-xl flex gap-3">
          {name}
          <span className="text-blue-500">
            <i className="ri-verified-badge-fill"></i>
          </span>
        </h1>

        <h3 className="font-extralight">{bio}</h3>

        <div className="flex justify-between mt-2 items-center font-medium">
          <div className="flex gap-1 w-fit px-2 rounded-2xl">
            <i className="ri-user-line"></i>
            <h4>{followers}</h4>
          </div>

          <div className="flex gap-1 w-fit px-2 rounded-2xl">
            <i className="ri-multi-image-line"></i>
            <h4>{posts}</h4>
          </div>

          <div className="flex justify-center items-center text-sm gap-0.5 w-fit bg-white text-black px-4 py-2 rounded-3xl">
            <h3>Follow</h3>
            <i className="ri-add-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
