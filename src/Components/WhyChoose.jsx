import React from "react";
import Button from "./Button";
import Image from "./Image";
import buttonicon from "../assets/buttonicon.png";

const WhyChoose = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-6 px-4">
      <div className="my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="">
          <h2 className="text-4xl font-bold">
            Why <br />
            Choosing Us
          </h2>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">Luxury facilities</h2>
          <p>
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Button text={"More Info"} />
            <Image imgSrc={buttonicon} />
          </div>
        </div>
        <div className="">
          <h2 className="text-3xl font-bold">Affordable Price</h2>
          <p>
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <div className="flex items-center gap-2">
            <Button text={"More Info"} />
            <Image imgSrc={buttonicon} />
          </div>
        </div>
        <div className="">
          <h2 className="text-4xl font-bold">Many Choices</h2>
          <p>
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <div className="flex items-center gap-2">
            <Button text={"More Info"} />
            <Image imgSrc={buttonicon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
