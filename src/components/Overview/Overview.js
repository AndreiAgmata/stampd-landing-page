"use client";
import React from "react";
import "./Overview.scss";
import Image from "next/image";
import Lottie from "lottie-react";
import data from "../../../public/data.json";
import animation2 from "../../../public/animation2.json";
import Dots from "../Shapes/Dots/Dots";

function Overview() {
  return (
    <section className="overview d-flex flex-column align-items-center mb-5">
      <div className="item row d-flex flex-column-reverse flex-md-row mb-5">
        <div className="text col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold fs-2 mb-4">Cardless loyalty program</h2>
          <p className="lh-lg">
            Stampd modernizes traditional loyalty cards and packs it into a
            user-friendly mobile-application. Boost your loyalty program with
            our contactless and engaging platform.
          </p>
        </div>
        <div className="image col-12 col-md-6 d-flex justify-content-center position-relative mb-4">
          <div className="image-wrapper position-relative  d-flex justify-content-center">
            <Lottie animationData={data} loop={true} />
          </div>
          <div
            className="shape-wrapper position-absolute opacity-25 "
            style={{ bottom: 0, left: 0, zIndex: -1 }}
          >
            <Dots height={200} width={200} size={"large"} color={"#6e72fc"} />
          </div>
        </div>
      </div>
      <div className="item row d-flex flex-column-reverse flex-md-row-reverse mb-4">
        <div className="text col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold fs-2 mb-4">Track Rewards Effortlessly</h2>
          <p className="lh-lg">
            Our intuitive system simplifies reward tracking for business owners.
            Track your weekly, monthly, and yearly activity and make adjustments
            on your business to increase customer engagement.
          </p>
        </div>
        <div className="image col-12 col-md-6 d-flex justify-content-center position-relative mb-4">
          <div className="image-wrapper position-relative  d-flex justify-content-center">
            <Lottie animationData={animation2} loop={true} />
          </div>
          <div
            className="shape-wrapper position-absolute opacity-25 "
            style={{ bottom: 0, left: -50, zIndex: -1 }}
          >
            <Dots height={200} width={200} size={"large"} color={"#6e72fc"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
