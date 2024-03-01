"use client";
import React from "react";
import "./Navbar.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="navBar w-100 px-4 d-flex flex-row justify-content-between align-items-center">
      <h1 className="logo">stampd</h1>
      <div className="links d-none d-sm-flex flex-row gap-5 fs-6 fw-medium ">
        <Link href={""}>Overview</Link>
        <Link href={""}>Features</Link>
        <Link href={""}>Pricing</Link>
      </div>
      <div className="d-none d-sm-block">
        <button
          className="btn btn-light"
          onClick={() =>
            router.push("https://console.stampd.ca/account/register")
          }
        >
          Try Now
        </button>
      </div>
      <div className="d-block d-sm-none">
        <button
          className="btn btn-outline-primary"
          onClick={() =>
            router.push("https://console.stampd.ca/account/register")
          }
        >
          Try Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
