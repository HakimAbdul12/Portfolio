import React from "react";
import Image from "next/image";

const Hero = () => {
    let yearsOfExp = ''
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    yearsOfExp = currentYear - startYear;


  return (
    <>
    <div
    id="home"
      className="h-screen w-full bg-cover flex justify-center items-center gap-0 bg-white"
    >
      {/* <div className="w-full flex h-screen  sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row  justify-center items-center overflow-hidden">
        <div className="h-fit basis-full space-y-20 pt-12">
          <h1 className="text-4xl text-white">
            🙋‍♂️ {`Hi, I'm`}{" "}
            <span className="italic text-yellow-500 font-semibold">Hakim</span>
          </h1>
          <p className="text-gray-300 text-2xl font-thin leading-relaxed tracking-wider">
            {`
            "A passionate software engineer with ${yearsOfExp} year(s) of experience in the industry. I specialize in creating elegant, efficient, and innovative software solutions that drive real results."
            `}
          </p>
        </div>
        <div className=" h-[fit] basis-full relative pt-12">
          <Image
            src={"/Hakim1.png"}
            height={250}
            width={200}
            alt="Hakim"
            priority={true}
            className="object-cover"
          />
        </div>
      </div> */}

    </div>
    </>
  );
};

export default Hero;
