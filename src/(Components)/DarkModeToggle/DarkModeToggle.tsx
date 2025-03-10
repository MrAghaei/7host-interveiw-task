"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DarkModeToggle.scss";
import Image from "next/image";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark-mode");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <div className="d-flex gap-3 align-items-center justify-content-center">
      <div className="toggle-icon-switch">
        {darkMode ? (
          <Image
            src="/darkModeIcon.svg"
            alt="Dark mode"
            width={32}
            height={32}
            className="icon dark-icon"
          />
        ) : (
          <Image
            src="/lightModeIcon.svg"
            alt="Light mode"
            width={32}
            height={32}
            className="icon light-icon"
          />
        )}
      </div>

      <div
        className={`toggle-container ${darkMode ? "dark" : "light"}`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div className="toggle-circle">
          {darkMode ? (
            <Image
              src={"/darkModeOff.svg"}
              alt={"dark mode"}
              width={20}
              height={20}
            />
          ) : (
            <Image
              src={"/darkModeOn.svg"}
              alt={"dark mode"}
              width={20}
              height={20}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkModeToggle;
