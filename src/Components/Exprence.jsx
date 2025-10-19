import React from "react";
import expricences from "../../src/assets/expricences.png";
import Image from "./Image";
import buttonicon from "../../src/assets/buttonicon.png";

const Exprence = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex flex-col justify-between items-center gap-8 md:gap-10 md:flex-row my-44">
      <div className="md:w-1/2 md:h-[541px] mx-8">
        <Image
          imgSrc={expricences}
          alt="Experiences"
          className="h-full w-full"
        />
      </div>
      <div className="md:w-1/2 mx-8">
        <h2 className="uppercase text-lg font-semibold mb-4 text-primary">
          experiences
        </h2>
        <h3 className="capitalize text-4xl mb-4 font-bold lg:w-1/2">
          we provide you the best experience
        </h3>
        <p className="text-lg font-semibold mt-6 lg:w-2/3 mb-4 text-gray-600 ">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        <div className="">
          <button className="flex justify-center gap-1 mt-4 items-center text-primary text-base font-semibold hover:underline">
            <h3 className="text-primary ">More Info</h3>
            <div className="">
              <img src={buttonicon} alt="Button Icon" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Exprence;
