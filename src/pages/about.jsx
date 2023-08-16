import Header from "../components/header";
import trendingBg from "../images/trending-item-01.jpg";
import {MdSupportAgent} from "react-icons/md";
import {CgGirl} from "react-icons/cg";
import {LiaCookieSolid} from "react-icons/lia";
import interiorBoy from "../images/interiorBoy.jpg"
import Hire from "../components/Hire";
import Accordion from "../components/Accordion";
import creator from "../images/creator.jpg";
import AboutCarousel from "../components/AboutCarousel";

const About = () => {

  const backgroundImageUrl = `url('${trendingBg}')`;
  
  return (
    <>
      <Header
        style={backgroundImageUrl}
        backgroundImageUrl={trendingBg}
        name={`ABOUT  `}
        span={` DESIGNER` }
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione sit laborum. Numquam quidem provident reiciendis."
        fonts="md:text-5xl text-4xl"
        padi="py-24 lg:py-36"
      />

      <div className="px-3.5 mt-[-87px]  xl:px-0">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
       <div className="bg-white rounded-xl shadow-md py-8">
        <div className="flex flex-col gap-3 justify-center items-center text-2xl p-1">
      <MdSupportAgent className="text-6xl text-[#FF565B]"/>
      <p className="text-black font-bold">Active Support 24/7</p>
      </div>
       </div>

       <div className="bg-white rounded-xl shadow-md py-8">
        <div className="flex flex-col gap-3 justify-center items-center text-2xl p-1">
      <CgGirl className="text-6xl text-[#FF565B]"/>
      <p className="text-black font-bold">Customer Care</p>
      </div>
       </div>

       <div className="bg-white rounded-xl shadow-md py-8">
        <div className="flex flex-col gap-3 justify-center items-center text-2xl p-1">
      <LiaCookieSolid className="text-6xl text-[#FF565B]"/>
      <p className="text-black font-bold">Easy to Customize</p>
      </div>
       </div>
      </div>
      </div>

   
   <section className="py-24 mt-5 px-3">
    <div className="max-w-screen-xl gap-20 mx-auto grid grid-cols-1 md:grid-cols-2 ">
   <div className="flex flex-col gap-7">
   <h1 className="md:text-3xl text-xl   font-bold">
   A COMPANY WHO SPECIALIZES
         
          <span className="md:text-3xl text-xl  text-[#FF565B] font-bold flex ">
            {" "}
            <hr className="w-20 bg-[#FF565B] my-auto p-[1.2px] mr-3 md:mr-5" />{" "}
            IN INTERIOR DESIGN<span className="text-black">.</span>
          </span>
          </h1>
          <img src={interiorBoy} className="rounded-lg" alt="" />
   </div>
   <div className="flex flex-col gap-7">
               <p className="text-[#7A7A7A]">Designer ReactJS is 100% free to download provided by TemplateMo website. You are allowed to use this template for your commercial or business websites. 
              You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact us for more info.  </p>
              <p className="text-[#7A7A7A]">Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel cilisis lorem ipsum dolor sit amet, 
                consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-col gap-4">
                  <p className="text-xl font-bold ">How it Works</p>
                  <Accordion/>
                  </div>
            
   </div>
    </div>
   </section>

  <section className="py-10">
 <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 ">
 <div className="">
 <AboutCarousel />
 </div>
 <div className="hidden md:block">
 <div
                className="hero h-[60vh] w-[100%]  bg-cover rounded-tr-lg rounded-br-lg relative hover:bg-[#FF565B]  "
                style={{ background: `url(${creator})` }}
              >
                
              </div>
 {/* <img
                src={creator}
                className="  rounded-tr-lg rounded-br-lg"
                alt=""
              /> */}
 </div>
 </div>
  </section>

      <Hire name="HIRE US TO WORK ON A PROJECT?"/>
    </>
  );
};

export default About;
