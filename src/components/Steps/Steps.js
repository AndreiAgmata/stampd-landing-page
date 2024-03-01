import React from "react";
import "./Steps.scss";
import { FaStoreAlt } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { BsQrCodeScan } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Dots from "../Shapes/Dots/Dots";

function Steps() {
  return (
    <section className="steps py-5">
      <div className="content d-flex flex-column align-items-center pt-5 pb-5">
        <h3 className="fw-bold fs-1 text-center">
          Reward Loyalty in 3 Easy Steps
        </h3>
        <p className="mb-5 text-center">
          Set up you stampd loyalty program in less than 5 minutes.
        </p>
        <div className="content row w-100 d-flex flex-column flex-sm-row justify-content-between align-items-start gy-3 ">
          <div className="col-12 col-sm-3">
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
            <FaArrowRightLong size={"2em"} color="#6e72fc" className="arrow" />
          </div>
          <div className="col-12 col-sm-2">
            <div className="step-card d-flex flex-column align-items-center position-relative ">
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
            <FaArrowRightLong size={"2em"} color="#6e72fc" className="arrow" />
          </div>
          <div className="col-12 col-sm-3">
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
