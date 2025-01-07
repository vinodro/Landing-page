"use client";

import GridViewer from "@/components/gridViewer";
import MainContent from "@/components/mainContent";
import NavBar from "@/components/navBar";
import Image from "next/image";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react"
import React from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })
  return (
    <body className="bg-custom bg-[#101010] text-white flex flex-col justify-center items-center font-poppins ">
      <NavBar />

      <>
        {/* <div className="text-container">
          Hello World, this text will appear letter by letter.
        </div> */}
        <MainContent />
        <div className="home-container relative flex flex-col sm:flex-row-reverse  gap-8 w-full items-start">
          <div className="flex flex-col items-center sm:block sm:w-[40%]">
            <h1 className="text-3xl sm:text-4xl">
              <span className="gradient-text ">Technologies</span> We Use
            </h1>
            <p className="text-gray-400 mt-4 text-center sm:text-start">
              Discover the advanced technologies that drive our solutions,
              ensuring performance, reliability, and innovation.
            </p>
            <a
              href="#projects"
              className="group btn-primary btn-23 inline-block mt-16"
            >
              <span className="text">Projects </span>
              <span>
                {" "}
                <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-gray-400 ml-2">
                  {" "}
                </i>
              </span>
            </a>
          </div>
          <GridViewer className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {[
              "/django-logo.svg",
              "/nodejs.svg",
              "/react.svg",
              "/git.svg",
              "/mysql.png",
              "/postgres.png",
              "/tailwindcss.svg",
              "/scikit.svg",
              "/angular.png",
            ].map((_, index) => (
              <div className="tech-card" key={_ + index}>
                <Image
                  width={0}
                  height={0}
                  src={_}
                  alt="Logo"
                  style={{ width: "auto", height: "32px" }}
                />
              </div>
            ))}
            <div className="tech-card  sm:hidden">
                <Image
                  width={0}
                  height={0}
                  src="/docker.svg"
                  alt="Logo"
                  style={{ width: "auto", height: "32px" }}
                />
              </div>
          </GridViewer>
        </div>
        <div id="about-us" className="home-container pt-60 ">
          <div className="text-center">
            <h1 className="heading">
              Who <span className="gradient-text">we</span> are
            </h1>
          </div>
          <div
            className="mt-12 flex flex-col lg:flex-row items-start gap-8 rounded-3xl p-8 md:p-16
        bg-gradient-to-b md:bg-gradient-to-r from-purple-500 to-cyan-500"
          >
            <img
              src="/3d-casual-life.png"
              alt=""
              className="w-[80%] md:w-[50%] self-center"
            />

            <div className="md:text-2xl text-justify">
              <h1 className="font-semibold md:text-xl pt-2 leading-relaxed drop-shadow-2xl">
                ● About Us
              </h1>
              <p className="my-4">
                At HiQual Solutions, we provide top-quality software
                development, web design, and SaaS services to help businesses
                streamline their processes and drive growth. Our team is
                dedicated to delivering innovative, custom solutions that meet
                your unique needs, from responsive websites to powerful
                applications. We prioritize close collaboration with clients to
                ensure our technology aligns with their goals and sets them up
                for long-term success.
              </p>
              <a
                href="#services"
                className="group btn-primary text-white btn-23 inline-block mt-4"
              >
                <span className="text">Services </span>
                <span className="translate-x-2">
                  {" "}
                  <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-white ml-2">
                    {" "}
                  </i>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative home-container pt-60 w-full overflow-x-hidden">
          <div className="absolute w-full max-w-[1600px] hidden lg:flex items-center justify-center select-none top-[50%] translate-y-[-50%] left-0 -z-20">
            <div className="w-[45rem] h-[45rem] flex-shrink-0 rounded-full bg-purple-400 bg-opacity-70 filter blur-[250px]"></div>
          </div>
          <div className="flex-col service-box" id="services">
            <div className="text-center">
              <h1 className="heading">
                What we <span className="gradient-text">offer</span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 md:mt-12">
            <div className="services-container">
              <img src="Web Development.png" alt="" />
              <div>
                <h1 className="text-4xl">Web Design &amp; Development</h1>
              </div>
              <div>
                <p>
                  Best if you need beautiful design &amp; rapid development on a
                  regular basis.
                </p>
              </div>
              {/* <!-- <div className="service-conatiner-button">
                    <a className="group btn-primary mt-4">
                        Learn More 
                        <span> <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-gray-400 ml-2"> </i></span>
                    </a>
                </div> --> */}
            </div>

            <div className="services-container">
              <img src="Web Development.png" alt="" />
              <div>
                <h1 className="text-4xl">CRM and application development</h1>
              </div>
              <div>
                <p>
                  At HiQual Solutions, we specialize in developing custom CRM
                  solutions and applications that streamline your business
                  processes and enhance customer interactions.
                </p>
              </div>
            </div>

            <div className="services-container">
              <img src="Website Management.png" alt="" />
              <div>
                <h1 className="text-4xl">Custom Chatbots</h1>
              </div>
              <div>
                <p>
                  Transform your business with our Custom Chatbots. Tailored to
                  your needs, our AI-powered solutions streamline operations,
                  enhance customer interactions, and integrate seamlessly. Scale
                  effortlessly and stay ahead with our reliable support.
                </p>
              </div>
            </div>

            <div className="services-container">
              <img src="Website Management.png" alt="" />
              <div>
                <h1 className="text-4xl">Website Management</h1>
              </div>
              <div>
                <p>
                  where innovation meets user-centric design. We specialize in
                  creating bespoke applications that elevate user experiences
                  and meet your business objectives seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative home-container pt-60">
          <div className="absolute w-full max-w-[1600px] hidden lg:flex items-center justify-center select-none top-[50%] translate-y-[-50%] left-0 -z-20">
            <div className="w-[35rem] h-[35rem] flex-shrink-0 rounded-full bg-cyan-400 bg-opacity-70 filter blur-[250px]"></div>
          </div>
          <div className="flex-col service-box">
            <div className="text-center">
              <h1 className="heading">
                <span className="gradient-text">Why</span> choose us?
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-5">
            <div className="box">
              <img src="/diamond-dark-mode--unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">Top-notch quality</h2>
              </div>
              <div>
                <p>
                  HiQual Solutions delivers excellence in every project,
                  ensuring top-tier results through meticulous attention to
                  detail and innovative solutions.
                </p>
              </div>
            </div>

            <div className="box">
              <img src="/clock-ldark-mode-unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">Lightning fast delivery</h2>
              </div>
              <div>
                <p>
                  We ensure your projects are completed swiftly without
                  compromising quality. Expect prompt, efficient service every
                  time.
                </p>
              </div>
            </div>

            <div className="box">
              <img src="/drop-dark-mode-unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">Fixed monthly rate</h2>
              </div>
              <div>
                <p>
                  high-quality services at a predictable, fixed monthly rate.
                  Enjoy peace of mind with no hidden fees or surprises.
                </p>
              </div>
            </div>

            <div className="box">
              <img src="/file-dark-mode-unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">No obligation contract</h2>
              </div>
              <div>
                <p>
                  We offer flexible services with no obligation contracts. Enjoy
                  the freedom to scale your projects without long-term
                  commitments.
                </p>
              </div>
            </div>

            <div className="box">
              <img src="/saving-dark-mode--unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">30-Days refund policy</h2>
              </div>
              <div>
                <p>
                  flexible services with no obligation contracts. Enjoy the
                  freedom to scale your projects without long-term commitments.
                </p>
              </div>
            </div>

            <div className="box">
              <img src="/customer-dark-mode-unscreen.gif" alt="" />
              <div>
                <h2 className="text-2xl">Excellent customer support</h2>
              </div>
              <div>
                <p>
                  At HiQual Solutions, we provide exceptional customer support,
                  ensuring your needs are met promptly and professionally.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-container pt-60 w-full">
          <div className="!flex-col service-box" id="projects">
            <div className="text-center">
              <h1 className="heading">
                Our <span className="gradient-text font-normal ">work</span>
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 md:mt-12">
            <div className="project-box group">
              <div>
                <img src="/project1.png" alt="" />
              </div>
            </div>

            <div className="project-box project-img ">
              <div>
                <img src="/project2.png" alt="" />
              </div>
            </div>

            <div className="project-box project-img ">
              <div>
                <img src="/project3.png" alt="" />
              </div>
            </div>

            <div className="project-box !hidden lg:!flex">
              <div>
                <img src="/project4.png" alt="" />
              </div>
            </div>

            <div className="project-box !hidden lg:!flex ">
              <div>
                <img src="/project5.png" alt="" />
              </div>
            </div>

            <div className="project-box !hidden lg:!flex">
              <div>
                <img src="/project6.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="home-container pt-60" id="testimonials">
          <div className="!flex-col service-box mb-12" id="projects">
            <div className="text-center">
              <h1 className="heading">
                <span className="gradient-text font-normal">What they say</span>
                about us
              </h1>
            </div>
          </div>

          <section className="rounded-xl text-white  ">
            <div className="mx-auto max-w-[1340px] px-4 py-8 sm:px-6 lg:me-0 lg:py14 lg:pe-0 lg:ps-8 xl:py-22 overflow-hidden">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                <div className="-mx-6 lg:col-span-2 lg:mx-0">
                  <div id="keen-slider"  ref={sliderRef} className="keen-slider">
                    <div
                      className="keen-slider__slide"
                      style={{
                        minWidth: "852.8px",
                        maxWidth: "852.8px",
                        transform: "translate3d(0px, 0px, 0px)",
                      }}
                    >
                      <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                        <div>
                          <div className="flex gap-0.5 text-cyan-400">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold sm:text-3xl">
                              Outstanding Service and Results
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-400">
                              Our experience with HiQual Solutions has been
                              exceptional. Their team&apos;s dedication to
                              quality and professionalism is evident in every
                              project they undertake. From website design to
                              digital marketing, they consistently deliver
                              results that exceed our expectations.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                          — Aarav Sharma
                        </footer>
                      </blockquote>
                    </div>

                    <div
                      className="keen-slider__slide"
                      style={{
                        minWidth: "852.8px",
                        maxWidth: "852.8px",
                        transform: "translate3d(32px, 0px, 0px)",
                      }}
                    >
                      <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                        <div>
                          <div className="flex gap-0.5 text-cyan-400">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold sm:text-3xl">
                              Transformed Our Online Presence!
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-400">
                              HiQual Media transformed our online presence with
                              their innovative approach to web development.
                              Their commitment to customer satisfaction and
                              technical expertise made them a valuable partner
                              for our business
                            </p>
                          </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                          — Rohit Mehta
                        </footer>
                      </blockquote>
                    </div>

                    <div
                      className="keen-slider__slide"
                      style={{
                        minWidth: "852.8px",
                        maxWidth: "852.8px",
                        transform: "translate3d(64px, 0px, 0px)",
                      }}
                    >
                      <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                        <div>
                          <div className="flex gap-0.5 text-cyan-400">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold sm:text-3xl">
                              Innovative Custom Chatbots
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-400">
                              The custom chatbots developed by this service have
                              revolutionized our customer interaction. They are
                              intelligent, efficient, and have greatly enhanced
                              our customer support experience. The
                              implementation was seamless, and the results have
                              been phenomenal.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                          — Rohan Verma
                        </footer>
                      </blockquote>
                    </div>

                    <div
                      className="keen-slider__slide"
                      style={{
                        minWidth: "852.8px",
                        maxWidth: "852.8px",
                        transform: "translate3d(-3443.2px, 0px, 0px)",
                      }}
                    >
                      <blockquote className="flex h-full flex-col bg-white/10 justify-between p-6 shadow-sm sm:p-8 lg:p-12 rounded-lg">
                        <div>
                          <div className="flex gap-0.5 text-cyan-400">
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                          </div>

                          <div className="mt-4">
                            <p className="text-2xl font-bold sm:text-3xl">
                              Reliable Website Management
                            </p>

                            <p className="mt-4 leading-relaxed text-gray-400">
                              Their website management services have been a
                              lifesaver for us. We can now focus on our core
                              business while they ensure our website runs
                              smoothly and efficiently. Their prompt support and
                              proactive approach to website maintenance are
                              truly impressive.
                            </p>
                          </div>
                        </div>

                        <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                          — Ananya Gupta
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center gap-4 lg:hidden">
                <button
                  disabled={currentSlide === 0}
                  onClick={()=>instanceRef.current?.prev()}
                  aria-label="Previous slide"
                  id="keen-slider-previous"
                  className="rounded-full border border-brand-light p-3 text-brand-light transition hover:bg-brand-light hover:text-white"
                >
                  <svg
                    className="h-5 w-5 -rotate-180 transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>

                <button
                
              disabled={currentSlide == (instanceRef?.current?.track?.details.slides.length ?? 1) - 1
              }
                  onClick={()=>instanceRef.current?.next()}
                  aria-label="Next slide"
                  id="keen-slider-next"
                  className="rounded-full border border-brand-light p-3 text-brand-light transition hover:bg-brand-light hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5l7 7-7 7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div id="contact" className="pt-60">
          <div className="home-container contact bg-gray-200 text-gray-700 rounded-3xl px-6 md:px-8 lg:px-10 w-full py-16 md:py-20 lg:py-24 flex flex-col justify-center items-center gap-10">
            <h3 className="text-center text-grey-700 max-w-[1011px] text-3xl md:text-6xl font-medium leading-tight">
              Have an Idea??... Let&apos;s Turn It into Reality with Our Expert
              Development Team!!
            </h3>
            <a
              rel="noreferrer"
              href="https://calendly.com/hiqualsoftwaresolutions/30min"
              className="group btn-primary !bg-black/70 hover:!bg-black/80"
            >
              Book a Call
              <span>
                {" "}
                <i className="fa-solid fa-chevron-right group-hover:translate-x-2 duration-200 text-xs text-gray-400 ml-2">
                  {" "}
                </i>
              </span>
            </a>
          </div>
        </div>
        <div className="home-container w-full">
          <footer className="bg-brand-dark">
            <div className="flex flex-col sm:flex-row w-full p-4 sm:p-8 justify-between mt-8 h-full">
              <Link href="/" className="flex items-center self-center max-w-[20%]">
                <img src="/Union.svg" alt="" className="" />{" "}
              </Link>

              <ul className="flex flex-col gap-2 font-light">
                <h2 className="font-medium">Pages</h2>

                <li className="menu__item">
                  <a className="menu__link" href="#home">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#about-me">
                    About
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#services">
                    Services
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#projects">
                    Project
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#testimonials">
                    Testimonial
                  </a>
                </li>
                <li className="menu__item">
                  <a className="menu__link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
              <i className="fa-sharp fa-light fa-user"></i>
              <div className="flex flex-col gap-4 font-light pt-8 sm:p-0">
                <h2 className="font-medium">Contact</h2>
                <div>
                  {" "}
                  <i className="fa-solid fa-phone w-6 text-center"></i> +91
                  9867975473{" "}
                </div>
                <div>
                  {" "}
                  <i className="fa-solid fa-envelope w-6 text-center"></i>{" "}
                  contact@hiqualsolutions.com{" "}
                </div>
                <div>
                  {" "}
                  <i className="fa-solid fa-location-dot w-6 text-center"></i>{" "}
                  Mumbai, Maharashtra, India{" "}
                </div>
              </div>

              <div className="flex gap-2 h-full mt-auto pt-8 sm:p-0">
                <Link
                  href="https://www.instagram.com/"
                  className="text-2xl hover:bg-gray-800 border border-gray-700 aspect-square w-14 rounded-full flex justify-center items-center"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="/"
                  className="text-2xl hover:bg-gray-800 border border-gray-700 aspect-square w-14 rounded-full flex justify-center items-center"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <p className="text-center text-gray-400">
                ©2024 Hiqual Solutions | All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      </>
    </body>
  );
}
