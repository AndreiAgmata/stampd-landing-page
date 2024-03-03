import React from "react";
import "./Features.scss";
import Image from "next/image";
import Dots from "../Shapes/Dots/Dots";

function Features() {
  return (
    <section className="features mt-5 d-flex flex-column pt-5">
      <div className="row feature-item gx-5">
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
              className="rounded-4"
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
      <div className="row feature-item gx-5 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 d-flex position-relative d-flex justify-content-center align-items-center mt-5 mt-md-0">
          <div className="image-wrapper position-relative ">
            <Image
              src={"/scanQrMockup.webp"}
              alt="Design console image"
              fill
              sizes="(max-width : 1400px) 31rem, max-width(767px) 35rem, max-width(576px) 20rem"
              style={{ objectFit: "cover" }}
              className="rounded-4"
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
      <div className="row feature-item gx-5">
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
              className="rounded-4"
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
