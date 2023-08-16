import {MdSupportAgent} from "react-icons/md";
import {RxAvatar} from "react-icons/rx";
import {RiMailStarLine} from "react-icons/ri";
import Hire from '../components/Hire';
import Header from '../components/header'
import trendingBg from "../images/trending-item-01.jpg";


const Contact = () => {

  const backgroundImageUrl = `url('${trendingBg}')`;
  return (
    <>
      
    <Header
     style={backgroundImageUrl}
     backgroundImageUrl={trendingBg}
     name={`CONTACT `}
     span={`US` }
     p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione sit laborum. Numquam quidem provident reiciendis."
     fonts="md:text-5xl text-4xl"
     padi="py-24 lg:py-36"
   /> 

<section className="py-16 mt-8">
<div className="max-w-screen-xl rounded-lg gap-10  bg-white drop-shadow-lg py-16  lg:gap-0 grid lg:grid-cols-2 grid-cols-1  mx-auto">
            <div
              className="   bg-white  px-7 lg:px-14 flex flex-col  justify-center "
             
            >
              <h1 className="md:text-3xl text-xl  text-left font-bold">
                DON&apos;T BE HESITATED
              </h1>
              <h1 className="md:text-3xl text-lg   text-left text-[#FF565B] font-bold flex ">
                {" "}
                <hr className="w-20 bg-[#FF565B] my-auto p-[1.2px] mr-2 md:mr-5" />{" "}
                SEND A MESSAGE NOW <span className="text-black ">!</span>
              </h1>
              <form action="#" className="space-y-5 mt-5 ">
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
            <div className=" flex flex-col gap-7 lg:px-12 px-5">
            <div className="bg-[#F34945] rounded-lg text-white py-8">
        <div className="flex flex-col  justify-center items-center  ">
      <RxAvatar className="text-5xl "/>
      <p className="text-lg font-bold mt-3">Mailing Address</p>
      <p className="mt-1">Sunny Isles Beach, Florida 33160, USA</p>
      </div>
       </div>
       <div className="bg-[#F34945] rounded-xl text-white py-8">
        <div className="flex flex-col  justify-center items-center  ">
      <RiMailStarLine className="text-5xl "/>
      <p className="text-lg font-bold mt-3">Email Address</p>
      <p className="mt-1">davidaniago@gmail.com</p>
      </div>
       </div>
       <div className="bg-[#F34945] rounded-xl text-white py-8">
        <div className="flex flex-col  justify-center items-center  ">
      <MdSupportAgent className="text-5xl "/>
      <p className="text-lg font-bold mt-3">Chat With US</p>
      <p className="mt-1">+234 7086293912</p>
      </div>
       </div>
            </div>
          </div>
          </section>



  

   <Hire name="HIRE US TO WORK ON A PROJECT?"/>
 </>
  )
}

export default Contact
