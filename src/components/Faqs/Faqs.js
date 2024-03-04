"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Faqs.scss";
import faqsData from "../../../public/faqs.json";
import FaqItem from "../FaqItem/FaqItem";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Faqs() {
  let trigger = useRef();

  useEffect(() => {
    const ctx = new gsap.context(() => {
      let q = gsap.utils.selector(trigger);

      // console.log(q(".faq-item"));
      const tl = new gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top center+=250",
          // markers: true,
          // toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        q(".header"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      )
        .fromTo(
          q(".subheader"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
          "<0.25"
        )
        .fromTo(
          q(".faq-item"),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out", stagger: 0.25 },
          "<0.25"
        );
    });

    return () => ctx.revert();
  });

  return (
    <section className="faqs" ref={(el) => (trigger = el)}>
      <div className="content">
        <h1 className="fw-bold text-center mb-2 header">
          Frequently asked questions
        </h1>
        <p className="text-center mb-5 subheader">
          Answers to Your Questions: Find information on using Stampd for a
          smoother, more efficient experience.
        </p>
        <div className="faqs-items d-flex flex-column gap-3">
          {faqsData.map((faq, index) => (
            <FaqItem faq={faq} key={index} id="faq-item" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;

{
  /* <div className="accordion" id="accordion" key={index}>
<div className="accordion-item " key={index}>
  <h2 className="accordion-header">
    <button
      className="accordion-button collapsed fw-bold fs-5 "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#collapse${index}`}
      aria-expanded="false"
      aria-controls="collapseTwo"
    >
      {faq.question}
    </button>
  </h2>
  <div
    id={`collapse${index}`}
    className="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div className="accordion-body">{faq.answer}</div>
  </div>
</div>
</div> */
}
