"use client";
import React, { useRef, useState } from "react";
import "./Faqs.scss";
import faqsData from "../../../public/faqs.json";
import FaqItem from "../FaqItem/FaqItem";

function Faqs() {
  return (
    <section className="faqs">
      <div className="content">
        <h1 className="fw-bold text-center mb-2">Frequently asked questions</h1>
        <p className="text-center mb-5">
          Answers to Your Questions: Find information on using Stampd for a
          smoother, more efficient experience.
        </p>
        <div className="faqs-items d-flex flex-column gap-3">
          {faqsData.map((faq, index) => (
            <FaqItem faq={faq} key={index} />
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
