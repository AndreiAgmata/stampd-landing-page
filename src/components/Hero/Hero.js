import React from "react";
import "./Hero.scss";
import Image from "next/image";
import Dots from "../Shapes/Dots/Dots";

function Hero() {
  return (
    <section className="hero px-4 position-relative">
      <div
        className="dots position-absolute opacity-25"
        style={{ left: "-240px", top: "-4rem" }}
      >
        <Dots width={240} height={240} size={"large"} color={"#6e72fc"} />
      </div>
      <div className="content row w-100 gx-0">
        <div className="text col-12 col-sm-9 col-md-7">
          <h1 className="heading fw-bold">
            <span className="coloured">Simplify</span> rewards, <br /> no cards
            needed.
          </h1>
          <p className="subheading mt-3 col-12 col-sm-11 col-md-10">
            Say goodbye to missing loyalty cards and bulky wallets with our
            hassle-free, streamlined loyalty program solution. Simplify rewards,
            no cards needed
          </p>
          <button className="btn btn-primary">Get Started For Free</button>
        </div>
        <div className="d-none d-md-flex col justify-content-center align-items-center position-relative">
          <div
            className="image position-absolute"
            style={{
              width: "19rem",
              height: "35rem",
            }}
          >
            <div className="image-wrapper w-100 h-100 position-relative">
              <Image
                src={"/front.png"}
                fill
                sizes="100vh"
                alt="Iphone mock up"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="position-absolute opacity-25"
        style={{ right: "0", top: "32rem", zIndex: "-1" }}
      >
        <Dots width={240} height={240} size={"large"} color={"#6e72fc"} />
      </div>
    </section>
  );
}

export default Hero;