import React, { useState } from "react";
import bar from "../assets/images/icon/bar.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoClose } from "react-icons/io5";

function Header() {
  const [activeNav, setActiveNav] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <header className="w-full py-5  flex items-center justify-between px-7 absolute top-0 left-0 z-[99] lg:px-16">
        <Link to="/" className="font-yellowTail text-white text-xl lg:text-2xl">
          Pravesh
        </Link>
        <img
          loading="lazy"
          src={bar}
          onClick={() => {
            setActiveNav(true);
          }}
          className="cursor-pointer md:hidden"
          alt=""
        />
        <nav className="gap-5 lg:gap-12 hidden md:flex">
          <Link
            to="/"
            className={`nav_items text-xs font-normal tracking-wider lg:text-base cursor_pointer ${
              activeTab === "home" ? "bg-[#ff2403]" : ""
            }`}
            onClick={() => {
              setActiveTab("home");
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav_items text-xs font-normal tracking-wider lg:text-base cursor_pointer ${
              activeTab === "about" ? "bg-[#ff2403]" : ""
            }`}
            onClick={() => {
              setActiveTab("about");
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav_items text-xs font-normal tracking-wider lg:text-base cursor_pointer ${
              activeTab === "projects" ? "bg-[#ff2403]" : ""
            }`}
            onClick={() => {
              setActiveTab("projects");
            }}
          >
            Projects
          </Link>
          <Link
            to="resume"
            className={`nav_items text-xs font-normal tracking-wider lg:text-base cursor_pointer ${
              activeTab === "resume" ? "bg-[#ff2403]" : ""
            }`}
            onClick={() => {
              setActiveTab("resume");
            }}
          >
            Resume
          </Link>
        </nav>
        <a
          href="mailto:praveshsaini.dev@gmail.com"
          className="bg-primary text-white rounded-[1rem] text-sm px-3 py-1 hidden md:block shadow-md shadow-white/80 lg:px-4 hover:translate-y-1 hover:shadow-none duration-500 active:duration-100 active:scale-90 cursor_pointer"
          aria-label="Send an email to Pravesh"
        >
          Let's Talk
        </a>
      </header>
      <div
        className={`w-full h-screen bg-[#111] fixed z-[100] duration-300 top-0 ${
          activeNav ? "left-0" : "-left-full"
        } flex flex-col gap-10 px-3 py-5`}
      >
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="font-yellowTail text-white text-3xl tracking-wide"
          >
            Pravesh
          </Link>
          <span
            className="text-white text-xl border border-primary/70 bg-primary/40 p-1 active:bg-primary"
            onClick={() => {
              setActiveNav(false);
            }}
          >
            <IoClose />
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className={`text-white text-sm font-semibold tracking-widest py-3 px-3 rounded-sm lg:text-base cursor_pointer ${
              activeTab === "home" ? "bg-[#ff250322]" : ""
            }`}
            onClick={() => {
              setActiveTab("home");
              setActiveNav(false)
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white text-sm font-semibold tracking-widest py-3 px-3 rounded-sm lg:text-base cursor_pointer ${
              activeTab === "about" ? "bg-[#ff250322]" : ""
            }`}
            onClick={() => {
              setActiveTab("about");
              setActiveNav(false)
            }}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`text-white text-sm font-semibold tracking-widest py-3 px-3 rounded-sm lg:text-base cursor_pointer ${
              activeTab === "projects" ? "bg-[#ff250322]" : ""
            }`}
            onClick={() => {
              setActiveTab("projects");
              setActiveNav(false)
            }}
          >
            Projects
          </Link>
          <Link
            to="resume"
            className={`text-white text-sm font-semibold tracking-widest py-3 px-3 rounded-sm lg:text-base cursor_pointer ${
              activeTab === "resume" ? "bg-[#ff250322]" : ""
            }`}
            onClick={() => {
              setActiveTab("resume");
              setActiveNav(false)
            }}
          >
            Resume
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
