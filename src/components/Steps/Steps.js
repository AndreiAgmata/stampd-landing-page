"use client";
import React, { useEffect, useRef } from "react";
import "./Steps.scss";
import { FaStoreAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { BsQrCodeScan } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Dots from "../Shapes/Dots/Dots";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Steps() {
  let trigger = useRef();
  let header = useRef();
  let subheader = useRef();

  let step1 = useRef();
  let step2 = useRef();
  let step3 = useRef();

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        header,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          subheader,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<0.25"
        )
        .fromTo(
          [step1, step2, step3],
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1.8, ease: "power3.out", stagger: 0.2 },
          "<0.25"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="steps py-5">
      <div
        className="content d-flex flex-column align-items-center pt-5 pb-5"
        ref={(el) => (trigger = el)}
      >
        <h3 className="fw-bold fs-1 text-center" ref={(el) => (header = el)}>
          Reward Loyalty in 3 Easy Steps
        </h3>
        <p className="mb-5 text-center" ref={(el) => (subheader = el)}>
          Set up you stampd loyalty program in less than 5 minutes.
        </p>
        <div className="content row w-100 d-flex flex-column flex-sm-row justify-content-between align-items-start gy-3 ">
          <div className="col-12 col-sm-3" ref={(el) => (step1 = el)}>
            <div className="step-card d-flex flex-column align-items-center position-relative">
              <div
                className="dots position-absolute"
                style={{ top: "-1rem", zIndex: "-1" }}
              >
                <Dots
                  width={150}
                  height={65}
                  size={"small"}
                  color={"#6EB9FC"}
                />
              </div>
              <div
                className="icon-wrapper p-4 rounded-circle mb-4"
                style={{ backgroundColor: "#6EB9FC" }}
              >
                <FaStoreAlt size={"3em"} color="white" />
              </div>
              <h3 className="fw-semibold fs-4 text-center">
                Register Your Business
              </h3>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-self-center">
            {/* <FaArrowRightLong size={"2em"} color="#6e72fc" className="arrow" /> */}
          </div>
          <div className="col-12 col-sm-2" ref={(el) => (step2 = el)}>
            <div className="step-card d-flex flex-column align-items-center position-relative ">
              <div
                className="dots position-absolute"
                style={{ top: "-1rem", zIndex: "-1" }}
              >
                <Dots
                  width={150}
                  height={65}
                  size={"small"}
                  color={"#B16EFC"}
                />
              </div>
              <div
                className="icon-wrapper p-4 rounded-circle mb-4"
                style={{ backgroundColor: "#B16EFC" }}
              >
                <TbEdit size={"3em"} color="white" />
              </div>
              <h3 className="fw-semibold fs-4 text-center">
                Design Your Cards
              </h3>
            </div>
          </div>
          <div className="col d-flex justify-content-center align-self-center">
            {/* <FaArrowRightLong size={"2em"} color="#6e72fc" className="arrow" /> */}
          </div>
          <div className="col-12 col-sm-3" ref={(el) => (step3 = el)}>
            <div className="step-card d-flex flex-column align-items-center position-relative ">
              <div
                className="dots position-absolute"
                style={{ top: "-1rem", zIndex: "-1" }}
              >
                <Dots
                  width={150}
                  height={65}
                  size={"small"}
                  color={"#6E72FC"}
                />
              </div>
              <div
                className="icon-wrapper p-4 rounded-circle mb-4"
                style={{ backgroundColor: "#6E72FC" }}
              >
                <BsQrCodeScan size={"3em"} color="white" />
              </div>
              <h3 className="fw-semibold fs-4 text-center">
                Display Your Join Code
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Steps;
