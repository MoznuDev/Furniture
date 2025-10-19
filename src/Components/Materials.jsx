import React from "react";
import material1 from "../../src/assets/material1.png";
import material2 from "../../src/assets/material2.png";
import material3 from "../../src/assets/material3.png";
import Image from "./Image";
import buttonicon from "../../src/assets/buttonicon.png";

const Materials = () => {
  return (
    <section className="max-w-screen-2xl mx-auto flex flex-col justify-between items-center gap-8 md:gap-10 md:flex-row my-44">
      <div className="md:w-1/2 mx-8">
        <h2 className="uppercase text-lg font-semibold mb-4 text-primary">
          Materials
        </h2>
        <h3 className="capitalize text-4xl mb-4 font-bold lg:w-1/2 leading-10">
          Very serious materials for making furniture
        </h3>
        <p className="text-lg font-semibold mt-6 lg:w-2/3 mb-4 text-gray-600 ">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
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
      <div className="md:w-1/2 grid grid-cols-2 md:items-end items-center md:grid-cols-3">
       <div className="">
         <Image
          imgSrc={material1}
          alt="Experiences"
          className=""
        />
         <Image
          imgSrc={material2}
          alt="Experiences"
          className=""
        />
       </div>
       <div className="md:col-span-2 col-span-1"><Image
          imgSrc={material3}
          alt="Experiences"
          className=""
        /></div>
      </div>
    </section>
  );
};

export default Materials;
