"use client";
import React, { useEffect, useRef } from "react";
import "./HeroShapes.scss";
import gsap from "gsap";

function HeroShapes() {
  let shapeDark = useRef();
  let shapeLight = useRef();

  useEffect(() => {
    const ctx = new gsap.context(() => {
      const tl = new gsap.timeline();

      tl.fromTo(
        shapeDark,
        { y: -1000, x: 1000 },
        {
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.75,
        }
      ).fromTo(
        shapeLight,
        { y: -1000, x: 1000 },
        {
          y: 0,
          x: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<0.25"
      );
    });

    return () => ctx.revert();
  });
  return (
    <div className="shapes">
      <div
        className="shape-dark position-absolute rounded-4"
        ref={(el) => (shapeDark = el)}
      ></div>
      <div
        className="shape-light position-absolute rounded-4"
        ref={(el) => (shapeLight = el)}
      ></div>
    </div>
  );
}

export default HeroShapes;
