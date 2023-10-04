import React from "react";
import OtherDevelopers from "./OtherDevelopers";

export const Socials = () => {
  return (
    <div
      id="socials"
      className="h-fit w-full p-5 bg-violet-600"
    >
      <div className="flex flex-col justify-evenly">
        <div className="">
          <h1 className="text-2xl sm:text-4xl text-center text-slate-300 font-extrabold">
            Some great developers I Work with
          </h1>
          <p className="text-lg sm:text-xl text-center text-slate-300 font-light">
            I have had the distinct pleasure of collaborating with some truly
            exceptional and celebrated software developers throughout my career.
            Their expertise and contributions have been nothing short of
            remarkable. Below, I am delighted to share with you a curated list
            of just a few of these outstanding individuals.
          </p>
        </div>
        <div className={`flex flex-wrap gap-5 items-center p-5 justify-center`}>
          {Developers.map((Developer) => (
            <OtherDevelopers
              key={Developer.name}
              position={`${Developer.position}`}
              from={`${Developer.from}`}
              name={Developer.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Developers = [
  { name: "Sheldon", position: "Sofware Developer", from: "/sheldon.png" },
  {
    name: "Owusu Ebenzer",
    position: "Sofware Developer",
    from: "/sheldon.png",
  },
  { name: "Gyimah Yaw", position: "Sofware Developer", from: "/sheldon.png" },
  {
    name: "Ephraim Quarcoo",
    position: "Business Analyst",
    from: "/Ephraim.png",
  },
];

export default Socials;
