"use client";
import "./GetTheAppBtn.scss";
import { useRouter } from "next/navigation";
import React from "react";

function GetTheAppBtn() {
  const router = useRouter();
  return (
    <div
      className="btn-wrapper position-fixed w-100 d-flex justify-content-center d-block d-md-none"
      style={{ bottom: 20, zIndex: 99 }}
    >
      <button
        type="button"
        className="btn btn-primary px-5 py-3 fs-4 rounded-pill"
        onClick={() =>
          router.push("https://apps.apple.com/ca/app/stampd/id6478173282")
        }
      >
        Get the App
      </button>
    </div>
  );
}

export default GetTheAppBtn;
