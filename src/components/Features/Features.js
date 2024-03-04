"use client";
import React, { useEffect, useRef } from "react";
import "./Features.scss";
import Image from "next/image";
import Dots from "../Shapes/Dots/Dots";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  let trigger1 = useRef();
  let trigger2 = useRef();
  let trigger3 = useRef();

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger1,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      let q = gsap.utils.selector(trigger1);

      tl.fromTo(
        q(".text"),
        { y: 20, opacity: 0, duration: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          q(".image-content"),
          { x: 20, opacity: 0, duration: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<0.2"
        )
        .fromTo(
          q(".image-shape"),
          { x: 20, opacity: 0, duration: 0 },
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
          trigger: trigger2,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      let q = gsap.utils.selector(trigger2);

      tl.fromTo(
        q(".text"),
        { y: 20, opacity: 0, duration: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          q(".image-content"),
          { x: -20, opacity: 0, duration: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<0.2"
        )
        .fromTo(
          q(".image-shape"),
          { x: -20, opacity: 0, duration: 0 },
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
          trigger: trigger3,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      let q = gsap.utils.selector(trigger3);

      tl.fromTo(
        q(".text"),
        { y: 20, opacity: 0, duration: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
        .fromTo(
          q(".image-content"),
          { x: 20, opacity: 0, duration: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<0.2"
        )
        .fromTo(
          q(".image-shape"),
          { x: 20, opacity: 0, duration: 0 },
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "<0.2"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="features mt-5 d-flex flex-column pt-5" id="features">
      <div className="row feature-item gx-5" ref={(el) => (trigger1 = el)}>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text d-flex flex-column gap-2">
            <h2 className="fw-bold">Fully Customizable Cards</h2>
            <p className="lh-lg">
              Tweak your card design and details to cater to your creativity and
              business model. Customize the stamp image, card theme and card
              background. Make your loyalty cards reflect your business.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex position-relative d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div className="image-wrapper position-relative ">
            <Image
              src={"/designConsoleMockup.webp"}
              alt="Design console image"
              fill
              sizes="(max-width : 1400px) 31rem, max-width(767px) 35rem, max-width(576px) 20rem"
              style={{ objectFit: "cover" }}
              className="rounded-4 image-content"
            />
            <div
              className="image-shape position-absolute bg-primary rounded-4 "
              style={{
                zIndex: "-1",
                top: "-2rem",
                right: "-2rem",
              }}
            ></div>
          </div>
          <div
            className="shapes-wrapper position-absolute opacity-25"
            style={{ bottom: "-50px", left: "-50px", zIndex: "-1" }}
          >
            <Dots height={200} width={200} color={"#6E72FC"} size={"large"} />
          </div>
        </div>
      </div>
      <div
        className="row feature-item gx-5 d-flex flex-column-reverse flex-md-row"
        ref={(el) => (trigger2 = el)}
      >
        <div className="col-12 col-md-6 d-flex position-relative d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div className="image-wrapper position-relative ">
            <Image
              src={"/scanQrMockup.webp"}
              alt="Design console image"
              fill
              sizes="(max-width : 1400px) 31rem, max-width(767px) 35rem, max-width(576px) 20rem"
              style={{ objectFit: "cover" }}
              className="rounded-4 image-content"
            />
            <div
              className="image-shape position-absolute bg-primary rounded-4 "
              style={{
                zIndex: "-1",
                top: "-2rem",
                left: "-2rem",
              }}
            ></div>
          </div>
          <div
            className="shapes-wrapper position-absolute opacity-25"
            style={{ bottom: "-50px", left: "-50px", zIndex: "-1" }}
          >
            <Dots height={200} width={200} color={"#6E72FC"} size={"large"} />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text d-flex flex-column gap-2">
            <h2 className="fw-bold">Fast and efficient stamping</h2>
            <p className="lh-lg">
              Each business powered by stampd has a unique QR code. Clients can
              quickly scan your Stamp Code and earn stamps. Stamping codes are
              securely generated and stored giving business owners an ease of
              mind.
            </p>
          </div>
        </div>
      </div>
      <div className="row feature-item gx-5" ref={(el) => (trigger3 = el)}>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="text d-flex flex-column gap-2">
            <h2 className="fw-bold">Secure Rewards Transactions</h2>
            <p className="lh-lg">
              When clients reach the amount of stamps you set, they can only
              claim the reward once. After a customer clicks on the redeem
              button, they have 60 seconds to show you the reward voucher or
              their reward is voided.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex position-relative d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div className="image-wrapper position-relative ">
            <Image
              src={"/rewardMockup.webp"}
              alt="Design console image"
              fill
              sizes="(max-width : 1400px) 31rem, max-width(767px) 35rem, max-width(576px) 20rem"
              style={{ objectFit: "cover" }}
              className="rounded-4 image-content"
            />
            <div
              className="image-shape position-absolute bg-primary rounded-4 "
              style={{
                zIndex: "-1",
                top: "-2rem",
                right: "-2rem",
              }}
            ></div>
          </div>
          <div
            className="shapes-wrapper position-absolute opacity-25"
            style={{ top: "-50px", left: "-50px", zIndex: "-1" }}
          >
            <Dots height={200} width={200} color={"#6E72FC"} size={"large"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
