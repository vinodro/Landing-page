"use client";

import Image from "next/image";

export default function NavBar({
  toggle,
  setToggle,
}: {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <nav
      id="bg-color"
      className="sticky max-w-[1600px] m-auto top-0 left-0 z-10 flex justify-between items-center px-8 py-4 sm:py-8 w-full backdrop-blur-xl"
    >
      <a href="#home" className="max-w-[50%]">
        <Image
          width={0}
          height={0}
          src="/Union.svg"
          alt="Logo"
          style={{ width: "100%", height: "auto" }}
        />
      </a>

      <ul
        className="nav-links w-full lg:w-auto "
        style={{ display: toggle ? "flex" : "" }}
      >
        <li className="nav-link ">
          <a href="#about-us">About us</a>
        </li>
        <li className="nav-link">
          <a href="#services">Services</a>
        </li>
        <li className="nav-link">
          <a href="#projects">Project</a>
        </li>
        <li className="nav-link">
          <a href="#testimonials">Testimonials</a>
        </li>
        <li className="nav-link">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a
        href="https://calendly.com/hiqualsoftwaresolutions/30min"
        className="btn-home hidden lg:flex !text-base border-t !border-blue-400"
      >
        Book A Call
      </a>

      <a className="hamburger flex lg:hidden">
        <i
          className="fa-solid fa-bars fas fa-2x"
          onClick={() => setToggle((prev) => !prev)}
        ></i>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </nav>
  );
}
