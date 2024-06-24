import React, { useEffect, useState } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import Lock from './dopImg';
import { RiExpandDiagonalFill } from 'react-icons/ri';
import { LuPhoneCall } from 'react-icons/lu';
import { FaArrowRightLong } from 'react-icons/fa6';

const About = () => {
  const [count, setCount] = useState(0);
  const [change, setChange] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setChange((prevChange) => prevChange + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#1e1e20] pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-32 items-center">
          <div className="flex gap-10 w-[120%]">
            <div>
              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0 ">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(1)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? 'https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg'
                      : 'https://uic.group/media/cache/5a/70/5a70d134e3000c5ef605393b360f73fe.jpg'
                  }
                  alt="img"
                  className="mb-7 h-[400px] rounded-xl  duration-500"
                />
              </div>
              <hr />
              <div className="flex items-center gap-5 mt-7">
                <span className="text-7xl text-white font-bold">10</span>
                <span className="text-lg text-[#00ad9c] font-bold">
                  ANNUAL <br /> QUALIFICATION TEAM
                </span>
              </div>
            </div>
            <div className="flex items-end relative">

              <div className="relative group">
                <div className="bg-[#00ad9c] absolute w-full h-full z-[-8] bg-opacity-30 flex justify-center items-center rounded-xl group-hover:z-0">
                  <div
                    className="bg-white p-3 rounded-full bg-opacity-50"
                    onClick={() => setCount(2)}
                  >
                    <RiExpandDiagonalFill className="text-white text-lg" />
                  </div>
                </div>
                <img
                  src={
                    change % 2 === 1
                      ? 'https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg'
                      : 'https://uic.group/media/cache/1c/ac/1cac8a7441794ad91f2cc94093c84fd0.jpg'
                  }
                  alt=""
                  className="rounded-xl  h-[400px]  duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold text-slate-500 flex gap-5 mb-5">
              
              <span className="text-[#00ad9c] text-xl font-bold">IN THE WORLD</span>
            </p>
            <h2 className="text-[white] text-7xl font-bold mb-7">About us</h2>
            <p className="text-[#929293]">
              Every big company needs to thank not only itself, but also those who have stood beside
              it and believed in it. After all, the most important principle in our work is trust.{' '}
              <br /> <br /> Trust not only ensures the loyalty of customers and partners, but also
              increases our demand for ourselves. We cooperate on the basis of relations built on
              thousand-year human traditions.
            </p>
            <div className="mt-8 flex gap-32">
              <div className="flex gap-6">
                <BsLightningCharge className="w-12 h-12 text-[#00ad9c]" />
                <p className="text-white text-lg font-medium">
                  Quick <br /> solutions
                </p>
              </div>
              <div className="flex gap-6">
                <Lock />
                <p className="text-white text-lg font-medium">
                  Unique <br /> projects
                </p>
              </div>
            </div>

            <div className="flex items-center gap-9 mt-16 pb-28">
              <div className="flex items-center gap-3 text-white ">
                <div className="flex group duration-300 cursor-pointer items-center font-semibold rounded-xl gap-5 border-[2px] border-[#00a795] bg-[#1a8377] hover:bg-[#00a795] py-3 px-5 ">
                  <span>Portfolio</span>
                  <span className=" bg-[#4cc1b5] p-1 rounded-full  ">
                    <FaArrowRightLong className="text-[16px] rotate-[-45deg] group-hover:rotate-0 duration-300 " />
                  </span>
                </div>
                <div className="flex group duration-300 cursor-pointer items-center font-semibold rounded-xl gap-5 border-[2px] border-[#a9b7bf]  hover:border-[#00a795] hover:bg-[#00a795] py-3 px-5 ">
                  <span>Call</span>
                  <span>
                    <LuPhoneCall />
                  </span>
                </div>
              </div>
            </div>
          </div>
      <div
        data-v-d13273ec=""
        data-v-7179bf4a=""
        className="mt-10 bg-[#252527] hidden rounded-[12px] p-5 lg:p-7"
      >
        <p
          data-v-d13273ec=""
          data-aos="fade-up"
          data-aos-duration={800}
          className="text-[14px] md:text-[16px] font-extralight md:font-normal leading-[144%] tracking-[0.2px] aos-init aos-animate"
        >
          <span
            data-v-d13273ec=""
            className="text-[#00A795] md:text-[#fff] text-[18px] md:text-[16px]"
          >
            "UIC Group"
          </span>{' '}
          is the address of projects that have their own values and do not pass without quality
          control. Every opportunity and demand in our company serves to meet the needs of our
          customers with maximum efficiency. Our company is ready to serve customers not just as
          customers, but as partners for life with the best offers!
        </p>
        <div data-v-d13273ec="" className="relative">
          <div data-v-d13273ec="" className="mt-[22px] projects-list duration-300">
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init aos-animate"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-safenetpay.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  We have developed the safenetpay.com website of the international level using
                  various types of animation that meet all cybersecurity requirements. Safenetpay is
                  an international company engaged in the optimization of payment systems for
                  companies.
                </p>
              </div>
            </div>
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init aos-animate"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-prosm.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  The “Pro Service Management” project, for this project our team gave a
                  comprehensive solution - a mobile application, a website, a KPI system for
                  employees, an automated billing system. The Pro SM project belongs to the Akfa
                  holding group and manages all new buildings in Tashkent City. While our
                  application provides services for all residents of new buildings.
                </p>
              </div>
            </div>
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init aos-animate"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-express24.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  A mobile application for the largest food delivery service Express24, as well as
                  other solutions from our side. So Express 24 Merchant is a tool for establishments
                  to receive orders and update order statuses and an application for managing a
                  restaurant.
                </p>
              </div>
            </div>
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init aos-animate"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-tdiu.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  Website for Tashkent State University of Economics with interactive features for
                  staff, students and applicants of the university. Also, branding of the
                  university, an HR system for automating work with personnel and mandatory testing
                  of our products by a team of our QA engineers were carried out by our company.
                </p>
              </div>
            </div>
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init aos-animate"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-vilz.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  For a company that sells cars of leading brands in Uzbekistan, I prepared the
                  website Vilz.uz to increase sales of car dealerships. The site was prepared with
                  the necessary options for registering for a test drive, buying a car on credit and
                  other cars. The task was to create a mobile version of the site in the mode of a
                  full-fledged online store and give the opportunity to read e-books. The mobile app
                  is available on Google Play and the App Store.
                </p>
              </div>
            </div>
            <div
              data-v-d13273ec=""
              data-aos="fade-up"
              data-aos-duration={800}
              className="relative group project-item aos-init"
            >
              <div
                data-v-d13273ec=""
                className="flex flex-col items-center md:gap-5 md:flex-row py-6 md:py-0"
              >
                <span data-v-d13273ec="" className="min-w-[120px] flex-center">
                  <img
                    data-v-d13273ec=""
                    src="/uic-images/about/portfolio/about-ayoluchun.svg"
                    alt="company logo"
                    className="m-auto"
                  />
                </span>
                <p data-v-d13273ec="" className="pb-3 pt-5 md:pb-5 about_text">
                  Ayoluchun.uz, a special platform for women, provides them with comprehensive
                  support, regardless of age and profession, and provides them with video lessons in
                  areas of interest to them. Purpose: to unite women's education, spiritual,
                  cultural and educational development on a single platform.
                </p>
              </div>
            </div>
          </div>
          {/**/}
        </div>
        <div data-v-d13273ec="" className="flex justify-center mt-4">
          <a
            data-v-ef362752=""
            data-v-d13273ec=""
            href="/portfolio"
            className="flex group w-fit p-[10px] pl-[16px] items-center borders justify-center border-[1px] border-solid rounded-12 transition duration-500 ease-in-out backdrop-blur-xl cursor-pointer aos-init"
            data-aos="fade-up"
            data-aos-duration={800}
          >
            <p
              data-v-ef362752=""
              className="group-hover:bg-white linear-wipe lg:!leading-130 transition duration-500 ease-in-out leading-[16px] link text-base font-bold flex justify-center items-center lg:!text-base text-[13px] md:!text-base gap-x-[10px]"
            >
              Portfolio{' '}
              <i
                data-v-56c03d90=""
                data-v-ef362752=""
                className="icon hover:text-red-500 text-white flex items-center -rotate-90"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={16} height={16} rx={8} fill="white" fillOpacity="0.3" />
                  <path
                    d="M10.9997 6.50017L7.99986 9.49989L5 6.50012"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </p>
          </a>
        </div>
      </div>        </div>
        {count === 1 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/21/e5/21e58126b6c478060b6e6fd54ca6fbba.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}
        {count === 2 && (
          <div
            className="h-[100vh] fixed top-0 right-0 left-0 z-20 w-[100vw] bg-black bg-opacity-60 py-20 flex flex-col items-center justify-center"
            onClick={() => setCount(0)}
          >
            <div className="relative h-[90vh] w-[36vw]">
              <img
                src="https://uic.group/media/cache/63/2a/632ae021916378d650ff3ffb98fcb7c1.jpg"
                alt=""
                className="h-full rounded-xl w-full"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default About;
