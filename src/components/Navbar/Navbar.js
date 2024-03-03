"use client";
import React from "react";
import "./Navbar.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const router = useRouter();
  return (
    <nav className="navBar w-100 px-4 d-flex flex-row justify-content-between align-items-center">
      <h1 className="logo">stampd</h1>
      <div className="links d-none d-sm-flex flex-row gap-5 fs-6 fw-medium ">
        <Link href={"#overview"}>Overview</Link>
        <Link href={"#features"}>Features</Link>
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
          type="button"
          className="btn btn-outline-primary"
          onClick={() => router.push("https://console.stampd.ca/account/login")}
        >
          Login
        </button>
        {/* <GiHamburgerMenu size={"1.5em"} color="#6e72fc" /> */}
      </div>
    </nav>
  );
}

export default Navbar;
