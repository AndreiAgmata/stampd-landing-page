"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Marquee.scss";
import gsap from "gsap";

function Marquee() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const imgs = gsap.utils.toArray(".marquee .item");
      let next = 3; // time to change

      const crossfade = () => {
        const action = gsap
          .timeline()
          .to(imgs, { y: "-=5rem", duration: 1 })
          .to(imgs[0], { y: `+=${imgs.length * 5}rem`, duration: 0 }); // the first to the end

        imgs.push(imgs.shift()); // the first (shift) to the end (push) from the array
        // start endless run
        gsap.delayedCall(next, crossfade);
      };

      // start the crossfade after next = 3 sec
      gsap.delayedCall(next, crossfade);
    });

    // Cleanup function to stop the animation when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <section className="marquee d-flex flex-row gap-3 justify-content-center ">
      <h1 className="left-text fw-bold">Built for</h1>
      <div className="items right-text">
        <div className="item">
          <h1 className="fw-bold">Barber Shops</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Lash Studios</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Nail Salons</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Hair and Beauty</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Cafes</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Restaurants</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Bars</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">Retail</h1>
        </div>
        <div className="item">
          <h1 className="fw-bold">E-Commerce</h1>
        </div>
      </div>
    </section>
  );
}

export default Marquee;

//   useEffect(() => {
//     var items = gsap.utils.toArray(".marquee .item");
//     var next = 3;

//     const crossFade = () => {
//       var action = gsap
//         .timeline()
//         .to(items, { y: "-=200", duration: 1 })
//         .to(items[0], { y: "+=600", duration: 0 }); // the first to the end

//       items.push(items.shift()); // the first (shift) to the end (push) from the array

//       // start endless run
//       gsap.delayedCall(next, crossFade);
//     };

//     // gsap.delayedCall(next, crossFade);
//   }, []);
