import React from "react";
import img from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <>
      <div className="w-full relative ">
        <div className="container relative">
          <img className="w-full" src={img} alt="" />
          <div className=" absolute top-[36px] left-[30px] sm:top-[80px] sm:left-[55px] md:top-[160px] md:left-[80px] lg:top-[180px] lg:left-[100px]">
            <p className="md:text-[18px] w-[283px] sm:text-[16px] text-[13px] lg:text-[19px] text-[#fff] leading-[25px] font-[400]">
            / Start / Categories 
            / Headphones and audio for gaming
            </p>
            <p className="lg:text-[46px] md:text-[34px] sm:text-[28px] text-[18px] md:w-[380px] sm:w-[340px] w-[70%] lg:w-[536px] font-[400] text-[#fff] leading-[30px] lg:leading-[57px] md:mt-[25px] mt-2 lg:mt-[31px]">
            Headphones AND AUDIO
            FOR GAMING
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
