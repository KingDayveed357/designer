import Hire from '../components/Hire';
import Header from '../components/header'
import trendingBg from "../images/trending-item-01.jpg";
import trending2 from "../images/trending-item-02.jpg";
import trending3 from "../images/trending-item-03.jpg";
import trending4 from "../images/trending-item-04.jpg";
import trending5 from "../images/trending-item-05.jpg";
import trending6 from "../images/trending-item-06.jpg";
import trending7 from "../images/trending-item-07 .jpg";
import trending8 from "../images/trending-item-08.jpg";
import {GoArrowRight} from "react-icons/go";

const Trending = () => {
  const backgroundImageUrl = `url('${trendingBg}')`;
  return (
    <>
      
       <Header
        style={backgroundImageUrl}
        backgroundImageUrl={trendingBg}
        name={`CHECK `}
        span={`TRENDING WORK` }
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione sit laborum. Numquam quidem provident reiciendis."
       fonts="md:text-5xl text-4xl"
       padi="py-24 lg:py-36"
      /> 
       
   
    <section className='py-16 mt-5 px-3 xl:px-0'>
      <div className="max-w-screen-xl mx-auto rounded-lg flex flex-col gap-10">
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
          <div className="relative group">
            <img
              src={trendingBg}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
          <div className="relative group">
            <img
              src={trending3}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src={trending5}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="relative group">
            <img
              src={trending2}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
          <div className="relative group">
            <img
              src={trending4}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src={trending6}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>
            
          </div>
        </div>


        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='flex flex-col gap-6'>
          <div className="relative group">
            <img
              src={trending7}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src={trending4}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="relative group">
            <img
              src={trending2}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6'>
          <div className="relative group">
            <img
              src={trending8}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <img
              src={trending5}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>
            
          </div>
          <div className="relative group">
            <img
              src={trendingBg}
              alt="Zoomable Image"
              className="w-full  rounded-lg h-auto transition-transform duration-300 transform group-hover:scale-105 cursor-pointer"
            />
            <div className="absolute inset-0 flex justify-between opacity-100 transition-opacity">
              <div className='flex flex-col justify-between '>
                <p className="bg-[#ff565cdb] relative  w-32 text-white px-2 rounded-tl-lg rounded-br-lg p-2 ">Interior Design</p>
                <div className='bg-[#ff565cdb] px-2 p-3 mx-auto opacity-0 group-hover:opacity-100 transition-opacity'>
                <p className="text-xl font-semibold text-white mx-5 flex text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Minimal Design Interior <GoArrowRight className="my-auto mt-2" />
                </p>
                </div>
              </div>
            </div>
          </div>
        
        </div>


      </div>
    </section>

   
      <Hire name="HIRE US TO WORK ON A PROJECT?"/>
    </>
  )
}

export default Trending
