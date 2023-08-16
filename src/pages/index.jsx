
import Chairs from "../images/two-chairs.jpeg";
import cushion from "../images/cushion.jpeg";
import "./style.css";
// import Header from "../components/header";
import { BsCalendarDateFill } from "react-icons/bs";
import { BsMapFill } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Header from "../components/header";

import trendingOne from "../images/fancy-light.jpeg";
import bgMap2 from "../images/bgMap-4.jpg";
import maps from "../images/maps.jpg";

const Index = () => {

  const backgroundImageUrl = `url('${Chairs}')`;
  return (
    <>
      <Header
        style={backgroundImageUrl}
        backgroundImageUrl={Chairs}
        name={`INTERIOR `}
        span={` DESIGNER`}
        fonts="md:text-5xl text-5xl"
        disp="flex justify-center items-center mx-auto"
        padi="py-24 lg:py-56"
      />

      <div className=" px-3.5 mt-[-130px]  xl:px-0">
        <div className="bg-white   max-w-screen-xl mx-auto md:px-12 px-6 py-12 shadow-xl  rounded-lg ">
          <form action="flex flex-col p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7  ">
              <div className="flex flex-col gap-7">
                <p className="text-xl font-bold">Search Work by Title</p>
                <input
                  type="text"
                  placeholder="Type any work title..."
                  required
                  className="border border-[#EEEEEE] p-3 px-8 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-xl font-bold">Choose Category</p>
                <select
                  name=""
                  className="border border-[#EEEEEE] outline-blue-200  p-3 px-8 rounded-lg"
                  required
                  id=""
                >
                  <option value="">Choose category</option>
                  <option value="">Interior Design</option>
                  <option value="">Exterior Design</option>
                  <option value="">New Ideas</option>
                  <option value="">Trendy Design</option>
                </select>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-xl font-bold">Price Range</p>
                <select
                  name=""
                  className="border border-[#EEEEEE] outline-blue-200 p-3 px-8 rounded-lg"
                  required
                  id=""
                >
                  <option value="">Choose price</option>
                  <option value="">$100 - $200</option>
                  <option value="">$250 - $500</option>
                  <option value="">$500 - $1000</option>
                  <option value="">$1000+</option>
                </select>
              </div>
              <div className="flex flex-col gap-7">
                <p className="text-xl font-bold">Pick a Plan</p>
                <select
                  name=""
                  className="border border-[#EEEEEE] outline-blue-200 p-3 px-8 rounded-lg"
                  required
                  id=""
                >
                  <option value="">Choose plan</option>
                  <option value="">Standard</option>
                  <option value="">Professional</option>
                  <option value="">Golden</option>
                  <option value="">Premium</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full mt-7 rounded-lg p-2.5 ease-in delay-100 bg-[#FF565B] text-white hover:bg-black"
            >
              Search Now
            </button>
          </form>
        </div>
      </div>

      <section>
        <div className="max-w-screen-xl mx-auto py-2 md:py-24 mt-10 px-3 xl:px-0">
          <h1 className="md:text-4xl text-xl   font-bold">
            EXPLORE SOME OF OUR LATEST
          </h1>
          <h1 className="md:text-4xl text-xl  text-[#FF565B] font-bold flex ">
            {" "}
            <hr className="w-20 bg-[#FF565B] my-auto p-[1.2px] mr-3 md:mr-5" />{" "}
            INTERIOR DESIGN WORK<span className="text-black">.</span>
          </h1>

          <div className="grid lg:grid-cols-2 text-[#7A7A7A] grid-cols-1 gap-16 my-10">
            <img
              src={cushion}
              className="rounded-md md:mx-auto lg:mx-0"
              alt=""
            />
            <div className="flex flex-col gap-7 ">
              <div className="flex flex-col  ">
                <p className="font-bold text-[1.3rem] mb-3 text-black ">
                  Interior Design
                </p>
                <hr />
                <div className="flex flex-col my-7 gap-7">
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12 gap-6   md:gap-0">
                    <p className="lg:col-span-5 flex">
                      <BsCalendarDateFill className="my-auto  text-lg mx-2  mt-1" />{" "}
                      September 15, 2023
                    </p>
                    <p className="font-bold text-lg flex text-black lg:col-span-7 hover:text-[#FF565B] hover:delay-300 ease-in-out  cursor-pointer ">
                      The Waterfront Cafe and Restaurant{" "}
                      <BsArrowRight className="my-auto text-2xl md:mx-2 mx-0 font-semibold mt-1" />{" "}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12  gap-6  ">
                    <p className="flex lg:col-span-5">
                      <BsMapFill className="my-auto text-lg mx-2  mt-1" /> Aba,
                      Nigeria
                    </p>
                    <p className="lg:col-span-7">
                      Designer ReactJS Template is 100% free to download
                      provided by King Day_veed website.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  ">
                <p className="font-bold text-[1.3rem] mb-3 text-black ">
                  Building & Developing
                </p>
                <hr />
                <div className="flex flex-col my-7 gap-7">
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12 gap-6   md:gap-0">
                    <p className="lg:col-span-5 flex">
                      <BsCalendarDateFill className="my-auto  text-lg mx-2  mt-1" />{" "}
                      September 15, 2023
                    </p>
                    <p className="font-bold text-lg flex text-black lg:col-span-7 hover:text-[#FF565B] hover:delay-300 ease-in-out  cursor-pointer ">
                      Home Land Port Canaveral Suites{" "}
                      <BsArrowRight className="my-auto text-2xl md:mx-2 mx-0 font-semibold mt-1" />{" "}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12  gap-6  ">
                    <p className="flex lg:col-span-5">
                      <BsMapFill className="my-auto text-lg mx-2  mt-1" />
                      Miami Beach, Florida, USA
                    </p>
                    <p className="lg:col-span-7">
                      Designer ReactJS Template is 100% free to download
                      provided by King Day_veed website.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col  ">
                <p className="font-bold text-[1.3rem] mb-3 text-black ">
                  Giving Your Brand Power
                </p>
                <hr />
                <div className="flex flex-col my-7 gap-7">
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12 gap-6   md:gap-0">
                    <p className="lg:col-span-5 flex">
                      <BsCalendarDateFill className="my-auto  text-lg mx-2  mt-1" />{" "}
                      October 23, 2022
                    </p>
                    <p className="font-bold text-lg flex text-black lg:col-span-7 hover:text-[#FF565B] hover:delay-300 ease-in-out  cursor-pointer ">
                      Hallandale Beach Motel Design{" "}
                      <BsArrowRight className="my-auto text-2xl md:mx-2 mx-0 font-semibold mt-1" />{" "}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12  gap-6  ">
                    <p className="flex lg:col-span-5">
                      <BsMapFill className="my-auto text-lg mx-2  mt-1" />
                      North City Beach Park
                    </p>
                    <p className="lg:col-span-7">
                      Feel free to download & use this template for your
                      websites. Please tell your friends about.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  ">
                <p className="font-bold text-[1.3rem] mb-3 text-black ">
                  Boost Up Your Style
                </p>
                <hr />
                <div className="flex flex-col my-7 gap-7">
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12 gap-6   md:gap-0">
                    <p className="lg:col-span-5 flex">
                      <BsCalendarDateFill className="my-auto  text-lg mx-2  mt-1" />{" "}
                      November 4, 2023
                    </p>
                    <p className="font-bold text-lg flex text-black lg:col-span-7 hover:text-[#FF565B] hover:delay-300 ease-in-out  cursor-pointer ">
                      Interior for Marina Beach Resort{" "}
                      <BsArrowRight className="my-auto text-2xl md:mx-2 mx-0 font-semibold mt-1" />{" "}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-12  gap-6  ">
                    <p className="flex lg:col-span-5">
                      <BsMapFill className="my-auto text-lg mx-2  mt-1" /> Sunny
                      Isles Beach, FL 33160
                    </p>
                    <p className="lg:col-span-7">
                      You are NOT allowed to redistribute the downloadable ZIP
                      file of this template on any other website. Please contact
                      us for more info.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trending">
        <div className="  px-3 py-8 md:mb-20 mb-10 xl:px-0">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
            <div className="flex flex-col justify-center  max-w-xl mx-auto">
              <h1 className="md:text-3xl text-xl font-bold">
                CHECK OUT WHATS TRENDING IN{" "}
              </h1>
              <h1 className="md:text-3xl text-xl  text-[#FF565B] font-bold flex ">
                {" "}
                <hr className="w-[75px] bg-[#FF565B] my-auto p-[1.1px] mr-3 md:mr-5" />{" "}
                OUR INTERIOR WORK<span className="text-black">.</span>
              </h1>
              {/* <h1 className="text-4xl text-[#FF565B] font-bold"> <hr  className="w-24 bg-[#FF565B]"/> <span className="text-black">.</span></h1> */}
              <p className="mt-10 text-left ">
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg
                kohm tokito adipcingi elit, sed do eismuod larehai med at vero
                eos et suscipit neque rerum molestias accusamus et iusto odio
                dignissimos ducimus qui blanditis.
              </p>
              <div className="flex">
                <button className="p-2.5 px-6     rounded-lg bg-[#F34945] text-white delay-150 ease-in hover:bg-black mt-8">
                  Discover More
                </button>
              </div>
            </div>

            <div className="lg:flex hidden">
              <div
                className="hero h-[70vh] bg-cover rounded-lg relative hover:bg-[#FF565B]  "
                style={{ background: `url(${cushion})` }}
              >
                <div
                  className={`hero-overlay rounded-lg  justify-center hover:bg-[#ff565cdb] flex  `}
                >
                  {/* <img src={cushion} className="h-[70vh] w-[100%] rounded-lg "  alt=""  /> */}
                  <div
                    className={`flex flex-col gap-4  justify-center items-center  text-white  `}
                    
                  >
                    <p className="text-xl font-bold ">MODERNIZED INTERIOR</p>
                    <p>Guest Room Decoration</p>
                  </div>
                </div>
              </div>
              <img
                src={trendingOne}
                className="h-[40vh] mt-28 text-center  rounded-lg"
                alt=""
              />
              <div className="flex flex-col h-[40vh] py-6 ">
                <img
                  src={trendingOne}
                  className=" mt-28 text-center  w-[100% "
                  alt=""
                />
                <img src={trendingOne} className="  text-center    " alt="" />
              </div>
              {/* <img src={trendingOne} className="h-[40vh]  text-center  w-[20%] rounded-lg"  alt=""  /> */}
            </div>
          </div>
        </div>
      </section>

      <div
        className="hero min-h-screen "
        style={{ backgroundImage: `url('${bgMap2}')` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center ">
          <div className="max-w-screen-xl gap-10 lg:gap-0 grid lg:grid-cols-2 grid-cols-1  mx-auto">
            <div
              className="cols-span-6  py-10   bg-white p-5 px-7 lg:px-14 flex flex-col  justify-center "
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <h1 className="md:text-3xl text-xl  text-left font-bold">
                DON&apos;T BE HESITATED
              </h1>
              <h1 className="md:text-3xl text-xl  text-left text-[#FF565B] font-bold flex ">
                {" "}
                <hr className="w-20 bg-[#FF565B] my-auto p-[1.2px] mr-3 md:mr-5" />{" "}
                TALK TO US <span className="text-black ml-1"> NOW!</span>
              </h1>
              <form action="#" className="space-y-8 mt-5 lg:p-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <input
                      type="email"
                      className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Subject*"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 outline-blue-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="grid grid-cols-1">
                  <button
                    type="submit"
                    className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-[#F34945] hover:bg-black hover:text-white delay-150 ease-in  text-white bg-primary-700 w-full hover:bg-primary-800   "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="cols-span-6 ">
              <img
                src={maps}
                className="h-[83vh] md:rounded-none rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
