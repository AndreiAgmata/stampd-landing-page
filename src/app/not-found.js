"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Notfound() {
  const router = useRouter();

  return (
    <section className="not-found d-flex flex-column justify-content-center align-items-center h-100">
      <h1 className="text-primary fw-bold" style={{ fontSize: "7rem" }}>
        404
      </h1>
      <p className="fw-medium">Page Not Found or Unavailable</p>
      <button
        type="button"
        className="btn btn-primary mt-5"
        onClick={() => router.push("/")}
      >
        Go to Home
      </button>
    </section>
  );
}

export default Notfound;
