import React from "react";

import {
  stars,
  buttonArrow,
  buttonArrow2,
  miniLogo,
  statsLogo1,
  statsLogo2,
  landing1,
  landing2,
  landing3,
  landing4,
  business1,
  process1,
  process2,
  services1,
  services2,
  services3,
  services4,
  services5,
  tech1,
  tech2,
  tech3,
  tech4,
  tech5,
  tech6,
  tech7,
  tech8,
  tech9,
  tech10,
} from "../../public/images/Landing";

const servicesData = [
  {
    id: "01",
    title: "Web App Development",
    img: services1,
  },
  {
    id: "02",
    title: "Branding And Identity",
    img: services2,
  },
  {
    id: "03",
    title: "Mobile Application Development",
    img: services3,
  },
  {
    id: "04",
    title: "Software Solution",
    img: services4,
  },
  {
    id: "05",
    title: "SEO and Performance Optimization",
    img: services5,
  },
  {
    id: "06",
    title: "E - Commerce Solution",
    img: services1,
  },
];

const technologyData = [
  {
    name: "Saas",
    img: tech1,
  },
  {
    name: "SolidJS",
    img: tech2,
  },
  {
    name: "Spring",
    img: tech3,
  },
  {
    name: "SQLLite",
    img: tech4,
  },
  {
    name: "StackOverFlow",
    img: tech5,
  },
  {
    name: "Swift",
    img: tech6,
  },
  {
    name: "TailwindCSS",
    img: tech7,
  },
  {
    name: "Typescript",
    img: tech8,
  },
  {
    name: "VueJS",
    img: tech9,
  },
  {
    name: "Photoshop",
    img: tech10,
  },
];

const stats = [
  {
    percentage: "90%",
    description: "Increase in operational efficiency",
    logo: statsLogo1,
  },
  {
    percentage: "100%",
    description: "Customer satisfaction improvement",
    logo: statsLogo2,
  },
  {
    percentage: "99%",
    description: "Long-term client retention rate",
    logo: statsLogo2,
  },
];

const Landing = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto overflow-hidden">
      {/* <-------------Hero Section-------------> */}
      <section className="w-full flex justify-center font-PlusJakartaSans">
        <div className="p-10  md:py-[70px] lg:pt-[100px] lg:pb-10   flex flex-col gap-10 lg:gap-12 items-center justify-center w-full max-w-[1290px]">
          {/* 1. Text Content */}
          <div className="flex flex-col gap-6 items-center justify-center">
            {/* Heading and Subheading */}
            <div className="flex flex-col gap-6 items-center justify-center">
              <h2 className="text-center text-[50px] md:text-[62px] lg:text-[73px] leading-normal lg:leading-[88px] font-bold bg-gradient-to-r from-[#08BFF7] to-[#3386EE] text-transparent bg-clip-text">
                Innovative Enterprise Web & Mobile App Development
              </h2>
              <p className="text-[#1F1F1F] text-center text-base font-normal leading-6 tracking-[-0.16px] max-w-[788px]">
                Transform your business with cutting-edge web and mobile apps.
                We design scalable solutions to elevate your brand and
                accelerate growth. Contact us today to build your enterprise's
                future.
              </p>
            </div>
            {/* Stars and Reviews */}
            <div className="flex flex-row gap-1 justify-center items-center">
              <img src={stars} alt="" />
              <p className="text-[#1F1F1F] font-SegoeUI text-[15.625px] font-normal leading-6 tracking-[-0.16px]">
                4.7 (1552+ reviews)
              </p>
              <img src={miniLogo} alt="" />
            </div>
            {/* Hero Buttons */}
            <div className="flex flex-row gap-4">
              <button className="px-4 py-3 bg-[#08BFF7] rounded-lg text-white">
                Schedule a Consultation
              </button>
              <button className="flex flex-row gap-[10px] justify-center items-center px-4 py-3 text-white rounded-lg border border-[rgba(0,0,129,0.11)] bg-[#292929]">
                Explore Services{" "}
                <img src={buttonArrow} alt="" className="w-[20px] h-[20px]" />
              </button>
            </div>
          </div>
          {/* 2. Image gallery */}
          <div className="w-full h-full relative flex justify-center">
            <img
              src={landing1}
              alt=""
              className="max-w-[80vw] min-h-[350px]  md:max-w-[75vw] lg:max-w-[880px] max-h-[495px] flex-shrink-0 rounded-2xl"
            />

            <div className="flex flex-col gap-10 absolute top-10 lg:top-12 left-0 lg:left-10">
              <img
                src={landing2}
                alt=""
                className="  w-[118px] h-[118px]  lg:w-[180px] lg:h-[180px] flex-shrink-0 rounded-2xl"
              />
              <img
                src={landing3}
                alt=""
                className=" w-[118px] h-[118px]  lg:w-[180px] lg:h-[180px] flex-shrink-0 rounded-2xl"
              />
            </div>

            <img
              src={landing4}
              alt=""
              className="absolute top-10 lg:top-12 right-0 w-[147px] h-[251px]  lg:w-[224px] lg:h-[381px] flex-shrink-0 rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* <-------------Trusted By-------------> */}
      <section className="w-full flex justify-center font-PlusJakartaSans">
        <div className="p-10 flex flex-col gap-6 items-center justify-center w-full  max-w-[1290px]">
          <p className="text-[#647491] font-PlusJakartaSans text-base font-normal leading-[18px] tracking-[-0.14px]">
            Trusted by 300,000+ businesses:
          </p>
          <div className="flex gap">
            <img src={business1} alt="" className="px-[57px] py-[19px]" />
            <img src={business1} alt="" className="px-[57px] py-[19px]" />
            <img src={business1} alt="" className="px-[57px] py-[19px]" />
            <img src={business1} alt="" className="px-[57px] py-[19px]" />
          </div>
        </div>
      </section>

      {/* <-------------Our Process-------------> */}
      <section className="w-full font-PlusJakartaSans">
        <div className="p-10 flex flex-col gap-10 lg:gap-12 items-center max-w-[1290px] mx-auto">
          {/* Header Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 w-full">
            <div className="flex flex-col gap-2 lg:flex-1">
              <p className="text-[#08BFF7] text-base leading-6 tracking-[-0.16px]">
                Our Process
              </p>
              <h3 className="text-black font-Inter text-[40px] font-bold max-w-[440px]">
                Empowering Businesses for Sustainable Growth
              </h3>
            </div>

            <div className="flex flex-col gap-6 lg:flex-1">
              <div className="flex flex-col gap-6 text-[#080F1A] text-base leading-6 tracking-[-0.16px]">
                <p>
                  Bloomtide Consulting delivers tailored solutions to drive
                  strategic growth. We provide actionable insights and
                  data-driven strategies to optimize operations and enhance
                  decision-making.
                </p>
                <p>
                  Our streamlined approach allows your team to focus on
                  high-value initiatives while scaling your business with
                  predictable consulting costs.
                </p>
              </div>

              <button className="flex items-center gap-2 px-4 py-3 rounded-lg border bg-[#08BFF7] text-black hover:bg-[#07a8db] transition-colors w-fit">
                Discover Our Process
                <img src={buttonArrow2} alt="Arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stats and Images Section */}
          <div className="flex flex-col lg:flex-row lg:gap-6 w-full">
            <img
              src={process1}
              alt="Process illustration"
              className="hidden lg:block lg:w-[40%] rounded-2xl object-cover"
            />

            <div className="flex flex-row gap-6 w-full">
              {/* Vertical line for mobile */}
              <div className="h-auto w-[1px] bg-[#EFF2F6] lg:hidden block" />

              <div className="flex flex-col gap-6 w-full">
                {/* Stats Container */}
                <div className="py-8 flex flex-col md:flex-row items-center justify-center rounded-2xl border border-[#D3DBE5] w-full">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className={`px-8 py-4 flex flex-col w-full md:w-auto
                      ${
                        index !== stats.length - 1
                          ? "border-b md:border-b-0 md:border-r border-[#D3DBE5]"
                          : ""
                      }
                    `}
                    >
                      <div className="flex items-start justify-center md:justify-start">
                        <p className="text-[#080F1A] text-5xl font-medium leading-tight tracking-[-1.56px]">
                          {stat.percentage}
                        </p>
                        <img src={stat.logo} alt="" className="ml-1" />
                      </div>
                      <div className="text-[#647491] text-sm leading-[18px] tracking-[-0.14px] mt-2 text-center md:text-left">
                        {stat.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Image */}
                <div className="w-full">
                  <img
                    src={process2}
                    alt="Process visualization"
                    className="w-full h-[220px] rounded-2xl border border-[#D3DBE5] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <-------------Our Services-------------> */}
      <section className="w-full flex justify-center font-Inter">
        <div className="p-10 flex flex-col gap-8  w-full  max-w-[1290px]">
          {/* 1.Heading and Text */}
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#08BFF7] font-PlusJakartaSans text-base font-normal leading-6 tracking-[-0.16px]">
              OUR SERVICES
            </p>
            <h3 className="text-black font-Inter text-[40px] font-bold ">
              Services we offer
            </h3>
          </div>
          {/* 2.Advance Accordion component */}
          <div className="flex flex-col">
            {servicesData.map((item) => (
              <div
                className="py-3 flex flex-row gap-10 justify-between border-b border-b-[rgba(90,90,90,0.05)]"
                key={item.id}
              >
                <div className="flex flex-row gap-10 just items-center">
                  {" "}
                  <div className="text-[#08BFF7] text-xl font-normal">
                    {item.id}
                  </div>
                  <div className="text-black font-Inter text-[24px] md:text-[32px] font-semibold">
                    {item.title}
                  </div>
                </div>

                <div className="w-[280px] h-[120px] flex justify-center items-center">
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[92px] max-h-[109px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <-------------Our Technology-------------> */}
      <section className="w-full flex justify-center font-PlusJakartaSans ">
        <div className="p-10 flex flex-col gap-10 lg:gap-12  w-full  max-w-[1290px]">
          {/* 1.Heading and Text */}
          <div className="flex flex-col gap-[10px]">
            <p className="text-[#08BFF7] text-base font-normal leading-6 tracking-[-0.16px]">
              OUR TECHNOLOGY
            </p>
            <h3 className="text-black font-Inter text-[40px] font-bold max-w-[600px]">
              Find the Best Technology for Your Product
            </h3>
          </div>
          {/* 2.Infinite scroll Technologies */}
          <div className="relative w-screen">
            {/* Left gradient overlay */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[250px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            />

            {/* Right gradient overlay */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[250px] z-10"
              style={{
                background:
                  "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            />

            {/* Scrolling content */}
            <div className="flex flex-row overflow-hidden w-full">
              <div className="flex flex-row py-6 animate-infinite-scroll-right">
                {technologyData.map((item, i) => (
                  <div
                    className="flex flex-col gap-[10px] justify-center items-center w-[120px] lg:w-[153px]"
                    key={i}
                  >
                    <img src={item.img} alt={item.name} />
                    <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row py-6 animate-infinite-scroll-right">
                {technologyData.map((item, i) => (
                  <div
                    className="flex flex-col gap-[10px] justify-center items-center w-[120px] lg:w-[153px]"
                    key={`duplicate-${i}`}
                  >
                    <img src={item.img} alt={item.name} />
                    <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative w-screen">
            {/* Left gradient overlay */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[250px] z-10"
              style={{
                background:
                  "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            />

            {/* Right gradient overlay */}
            <div
              className="absolute right-0 top-0 bottom-0 w-[250px] z-10"
              style={{
                background:
                  "linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            />

            {/* Scrolling content */}
            <div className="flex flex-row overflow-hidden w-full">
              <div className="flex flex-row py-6 animate-infinite-scroll">
                {technologyData.map((item, i) => (
                  <div
                    className="flex flex-col gap-[10px] justify-center items-center w-[120px] lg:w-[153px]"
                    key={i}
                  >
                    <img src={item.img} alt={item.name} />
                    <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row py-6 animate-infinite-scroll">
                {technologyData.map((item, i) => (
                  <div
                    className="flex flex-col gap-[10px] justify-center items-center w-[120px] lg:w-[153px]"
                    key={`duplicate-${i}`}
                  >
                    <img src={item.img} alt={item.name} />
                    <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
