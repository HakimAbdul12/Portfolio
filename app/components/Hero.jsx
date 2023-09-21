import React from "react";
import Image from "next/image";

const Hero = () => {
    let yearsOfExp = ''
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    yearsOfExp = currentYear - startYear;




  return (
    <div
    id="home"
      className="h-[90vh] w-full bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?w=1060&t=st=1695313283~exp=1695313883~hmac=6b5e4f2b6f585b01e2391732518fc81ca14eeb3128d5f35521c1466ae882b925')`,
      }}
    >
      <div className="w-full flex justify-center items-end h-full  bg-gradient-to-tr from-[#002b6b]/50 via-[#10011A]/50  to-[#070643]/50">
        <div className="h-[60vh] w-1/3 space-y-20 pt-12">
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
        <div className=" h-[70vh] w-1/3 relative pt-12">
          <Image
            src={"/Hakim1.png"}
            fill
            alt="Hakim"
            priority={true}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;