"use client";
import "./FaqItem.scss";
import React, { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import gsap from "gsap";

function FaqItem({ faq }) {
  let answerRef = useRef();
  let iconRef = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    const tl = new gsap.timeline();
    if (isOpen) {
      tl.to(
        answerRef,
        { height: 0, duration: 0.5, ease: "power3.out" },
        "start"
      ).to(
        iconRef,
        { rotation: 0, duration: 0.25, ease: "power3.out" },
        "start"
      );
    } else {
      tl.to(
        answerRef,
        {
          height: "auto",
          duration: 0.5,
          ease: "power3.out",
        },
        "start"
      ).to(
        iconRef,
        { rotation: 180, duration: 0.25, ease: "power3.out" },
        "start"
      );
    }
    setIsOpen(!isOpen);
  };
  return (
    <div className="faq-item px-5 bg-white rounded-4">
      <div
        className="item-question py-4 d-flex flex-row justify-content-between align-items-start"
        onClick={() => toggleAnswer()}
      >
        <h4 className="fw-bold m-0 pe-1">{faq.question}</h4>
        <div className="icon" ref={(el) => (iconRef = el)}>
          <FaAngleDown size={"1.5em"} color="#6e72fc" />
        </div>
      </div>
      <div
        className="item-answer overflow-hidden"
        style={{ height: 0 }}
        ref={(el) => (answerRef = el)}
      >
        <p className="m-0 pb-3">{faq.answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
