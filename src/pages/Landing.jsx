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

const Landing = () => {
  return (
    <div className="w-full flex flex-col items-center mx-auto overflow-hidden">
      {/* <-------------Hero Section-------------> */}
      <section className="w-full flex justify-center font-PlusJakartaSans">
        <div className="p-10  md:py-[70px] lg:pt-[120px] lg:pb-[0px] flex flex-col gap-6 items-center justify-center w-full max-w-[1290px]">
          {/* 1. Text Content */}
          <div className="flex flex-col gap-6 items-center justify-center">
            {/* Heading and Subheading */}
            <div className="flex flex-col gap-6 items-center justify-center">
              <h2 className="text-center text-[62px] lg:text-[73px] leading-normal lg:leading-[88px] font-bold bg-gradient-to-r from-[#08BFF7] to-[#3386EE] text-transparent bg-clip-text">
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
          <div></div>
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
      <section className="w-full flex justify-center font-PlusJakartaSans">
        <div className="p-10 flex flex-col  gap-10 lg:gap-12 items-center justify-center w-full  max-w-[1290px]">
          {/* 1.Text Content */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
            {/* 1.Left Side */}
            <div className="flex flex-col gap-2 lg:flex-1">
              <p className="text-[#08BFF7] text-base font-normal leading-6 tracking-[-0.16px]">
                Our Process
              </p>
              <h3 className="text-black font-Inter text-[40px] font-bold max-w-[440px]">
                Empowering Businesses for Sustainable Growth
              </h3>
            </div>
            {/* Right Side */}
            <div className="flex flex-col gap-6 justify-center lg:flex-1">
              <div className="flex flex-col gap-6 text-[#080F1A] text-base font-normal leading-6 tracking-[-0.16px]">
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

              <button className="flex justify-center items-center gap-2 px-[17px] py-3 rounded-lg border border-[#08BFF7] bg-[#08BFF7] w-fit">
                Discover Our Process
                <img src={buttonArrow2} alt="" />
              </button>
            </div>
          </div>
          {/* 2.Image and Stats */}
          <div className="flex flex-row lg:gap-6 ">
            <img
              src={process1}
              alt=""
              className="hidden lg:block lg:w-[40%] rounded-2xl"
            />

            <div className="flex flex-row gap-6 lg:w-[60%] w-full">
              {/* horizontal line */}
              <div className="h-full w-[1px] bg-[#EFF2F6] lg:hidden"></div>

              <div className="flex flex-col gap-6 w-full ">
                {/* Stats Container */}
                <div className="py-[33px] flex flex-row items-center justify-center rounded-2xl border border-[#D3DBE5] w-full">
                  {/* stat1 */}
                  <div className="px-8 py-4 flex flex-col border-r border-[#D3DBE5]">
                    <div className="flex ">
                      <p className="text-[#080F1A] text-[52px]  font-medium leading-[64px] tracking-[-1.56px]">
                        90%
                      </p>
                      <div className="h-full items-start justify-start shrink-0">
                        <img src={statsLogo1} alt="" className="" />
                      </div>
                    </div>
                    <div className="text-[#647491]  text-sm  font-normal leading-[18px] tracking-[-0.14px]">
                      Increase in operational efficiency
                    </div>
                  </div>
                  {/* stat2 */}
                  <div className="px-8 py-4 flex flex-col border-r border-[#D3DBE5] ">
                    <div className="flex ">
                      <p className="text-[#080F1A] text-[52px]  font-medium leading-[64px] tracking-[-1.56px]">
                        100%
                      </p>
                      <div className="h-full items-start justify-start shrink-0">
                        <img src={statsLogo2} alt="" className="" />
                      </div>
                    </div>
                    <div className="text-[#647491]  text-sm  font-normal leading-[18px] tracking-[-0.14px]">
                      Customer satisfaction improvement
                    </div>
                  </div>
                  {/* stat3 */}
                  <div className="px-8 py-4 flex flex-col ">
                    <div className="flex ">
                      <p className="text-[#080F1A] text-[52px]  font-medium leading-[64px] tracking-[-1.56px]">
                        99%
                      </p>
                      <div className="h-full items-start justify-start shrink-0">
                        <img src={statsLogo2} alt="" className="" />
                      </div>
                    </div>
                    <div className="text-[#647491]  text-sm  font-normal leading-[18px] tracking-[-0.14px]">
                      Long-term client retention rate
                    </div>
                  </div>
                </div>
                {/* b.Images */}
                <div className="w-full">
                  <img
                    src={process2}
                    alt=""
                    className="rounded-2xl border border-[#D3DBE5] object-cover"
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
                  <div className="text-black font-Inter text-[32px] font-semibold">
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
      <section className="w-full flex justify-center font-PlusJakartaSans">
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
          <div>
            <div className="flex flex-row py-6">
              {technologyData.map((item, i) => (
                <div
                  className="flex flex-col gap-[10px] justify-center items-center w-[153px]"
                  key={i}
                >
                  <img src={item.img} alt="" />
                  <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-row py-6">
              {technologyData.map((item, i) => (
                <div
                  className="flex flex-col gap-[10px] justify-center items-center w-[153px]"
                  key={i}
                >
                  <img src={item.img} alt="" />
                  <p className="text-[#373636] text-center font-Inter text-[15px] not-italic font-medium leading-[24px]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
