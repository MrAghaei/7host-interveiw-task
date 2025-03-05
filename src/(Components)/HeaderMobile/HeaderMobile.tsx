"use client";
import Logo from "@/(Components)/Logo/Logo";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import style from "./HeaderMobile.module.scss";

function HeaderDesktop() {
  //region hooks
  const [isMenuActive, setIsMenuActive] = useState(false);
  //endregion

  //region function
  function handleHamburgerMenuClick(): void {
    setIsMenuActive(true);
  }
  function handleHamburgerMenuClose(): void {
    setIsMenuActive(false);
  }
  //endregion
  return (
    <header className="py-custom-3 border-bottom border-custom-border ">
      {/* closed menu */}
      <div
        className={`container d-flex justify-content-between align-items-center px-custom-8 ${isMenuActive ? "d-none" : ""}`}
      >
        <Logo />
        <div
          onClick={handleHamburgerMenuClick}
          role={"button"}
          className="position-relative bg-custom-primary rounded-circle"
          style={{ width: "48px", height: "48px" }}
        >
          <div className="d-flex align-items-center justify-content-center position-absolute top-0 start-0 w-100 h-100">
            <Image
              src={"/hamburgerMenuIcon.svg"}
              alt={"menu icon"}
              width={20}
              height={8}
            />
          </div>
        </div>
      </div>

      {/* opened menu */}
      <div
        className={` d-flex flex-column gap-custom-12 position-fixed top-0 start-0 w-100 vh-100 bg-white z-3 px-custom-8 pt-custom-3 pb-custom-12 ${style.menuGradient} ${isMenuActive ? "" : "d-none"}`}
      >
        <div className="d-flex align-items-center justify-content-between">
          <Logo />
          <div onClick={handleHamburgerMenuClose} role={"button"}>
            <Image
              src={"/xIcon.svg"}
              alt={"exit icon"}
              width={48}
              height={48}
            />
          </div>
        </div>

        <div className="d-flex flex-column align-items-start justify-content-center gap-4">
          <button className="btn text-custom-light-text1 fw-semibold">
            Pricing
          </button>
          <button className="btn text-custom-light-text1 fw-semibold">
            How it Works
          </button>
          <button className="btn text-custom-light-text1 fw-semibold">
            FAQ
          </button>
          <Link
            href="/currencies"
            className="btn text-custom-secondary fw-semibold"
          >
            Currencies
          </Link>
        </div>
        <div className="d-flex flex-column gap-3 mt-auto">
          <button
            className={`btn btn-custom-primary ${style.btnSizingPrimary}`}
          >
            Get Started
          </button>
          <button
            className={`btn text-custom-light-text1 fw-semibold ${style.btnSizingPrimary}`}
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
