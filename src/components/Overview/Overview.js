"use client";
import React, { useEffect, useRef } from "react";
import "./Overview.scss";
import Lottie from "lottie-react";
import data from "../../../public/data.json";
import animation2 from "../../../public/animation2.json";
import Dots from "../Shapes/Dots/Dots";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Overview() {
  let overview1 = useRef();
  let overview2 = useRef();

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: overview1,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      let q = gsap.utils.selector(overview1);

      tl.fromTo(
        q(".text"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        q(".image-wrapper"),
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: overview2,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      let q = gsap.utils.selector(overview2);

      tl.fromTo(
        q(".text"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        q(".image-wrapper"),
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<0.2"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="overview d-flex flex-column align-items-center mb-5"
      id="overview"
    >
      <div
        className="item row d-flex flex-column-reverse flex-md-row mb-5"
        ref={(el) => (overview1 = el)}
      >
        <div className="text col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold fs-2 mb-4">
            <span className="coloured">Cardless</span> loyalty program
          </h2>
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
            style={{ bottom: 0, left: -100, zIndex: -1 }}
          >
            <Dots height={200} width={200} size={"medium"} color={"#6e72fc"} />
          </div>
        </div>
      </div>
      <div
        className="item row d-flex flex-column-reverse flex-md-row-reverse mb-4"
        ref={(el) => (overview2 = el)}
      >
        <div className="text col-12 col-md-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold fs-2 mb-4">
            Track Rewards <span className="coloured">Effortlessly</span>
          </h2>
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
            style={{ bottom: 0, left: 0, zIndex: -1 }}
          >
            <Dots height={200} width={200} size={"medium"} color={"#6e72fc"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
