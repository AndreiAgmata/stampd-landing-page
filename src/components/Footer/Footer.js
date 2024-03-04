"use client";
import React, { useEffect, useRef } from "react";
import "./Footer.scss";
import Link from "next/link";
import Image from "next/image";
import Dots from "../Shapes/Dots/Dots";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  let trigger = useRef();

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

      const q = gsap.utils.selector(trigger);

      tl.fromTo(
        q(".form-wrapper"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        q(".iphone"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<0.25"
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <footer className="footer position-relative" ref={(el) => (trigger = el)}>
      <div className="content">
        <div className="row">
          <div className="col-12 col-md-7 d-flex flex-column gap-3 form-wrapper">
            <h2 className="title fw-bold text-white">
              Get the latest App Updates
            </h2>
            <p className="subtext fw-light lh-lg">
              Stampd is in the early stages of its production therefore it will
              be frequently updated. Subscribe to our email list to get notified
              about new app changes
            </p>
            <div className="email-input mt-5 row w-100 g-3">
              <div className="col-12 col-sm-9">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="p-2 ps-3 rounded-pill flex-grow-1 fw-medium w-100"
                  placeholder="Enter your email"
                />
              </div>
              <div className="col">
                <button type="button" className="btn btn-light subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="col d-none d-md-flex justify-content-center">
            <div
              className="image-wrapper position-absolute"
              style={{ top: "-7rem", zIndex: 2 }}
            >
              <Image
                src={"/front.png"}
                alt="stampd app mock"
                fill
                sizes="100vh"
                style={{ objectFit: "contain" }}
                className="iphone"
              />
            </div>
            <div
              className="shape position-absolute opacity-25"
              style={{ zIndex: "1", top: 0 }}
            >
              <Dots height={500} width={500} size={"x-large"} color={"white"} />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="links mt-5 row">
            <div className="col-12">
              <p className="logo text-white fs-1 mb-0">stampd</p>
            </div>

            <div className="items d-flex gap-4 col-12">
              <Link
                href={"/terms-and-conditions"}
                className="text-white fw-medium"
              >
                Terms & Conditions
              </Link>
              <Link href={"/privacy-policy"} className="text-white fw-medium">
                Privacy Policy
              </Link>
              <Link href={"/cookie-policy"} className="text-white fw-medium">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <p className="text-white">&copy; CodeLab Studios 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
