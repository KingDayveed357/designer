import Chairs from "../images/two-chairs.jpeg";
import "./style.css";
import Header from "../components/header";
import { useState } from "react";

const Home = () => {
  const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {
  //     setToggle(!toggle)  
  // }

  return (
 <>
 <div className="background min-h-screen" style={{ width: "100%", height:"100vh", backgroundImage: `url('${Chairs}')`, backgroundSize: "cover", backgroundPosition: "center center",  backgroundRepeat: "no-repeat"}}>
    <div className="hero-overlay flex flex-col  bg-opacity-80">
    <Header toggle={toggle} handleToggle={() => setToggle(!toggle)} />
 <div className="hero-content   text-center max-w-screen-lg mx-auto my-auto py-auto  ">
    <div className={`provide`}>
      <h1 className={`mb-5 text-2xl font-bold text-white ${toggle ? 'hidden' : ''}`}>WE PROVIDE EVERYTHING</h1>
      <p className={`mb-7 font-bold text-5xl leading-snug md:leading-normal text-[#F34945] ${toggle ? 'hidden' : ''}`}>INTERIOR <span className="text-white">DESIGNER</span></p>
      <button className="p-2.5 px-6 rounded-lg hover:bg-[#F34945] hover:text-white delay-150 ease-in bg-white text-[#F34945]">Discover More</button>
    </div>
 </div>
 </div>
 </div>

<div className=" px-3.5 xl:px-0">
 <div className="bg-white  max-w-screen-xl mx-auto px-12 py-12 shadow-xl  rounded-lg ">
  <form action="flex flex-col p-5 ">
 <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-7  ">
 <div className="flex flex-col gap-7">
  <p className="text-xl font-bold">Search Work by Title</p>
  <input type="text" placeholder="Type any work title..." required className="border border-[#EEEEEE] p-3 px-8 rounded-lg" />
 </div>
 <div className="flex flex-col gap-7">
  <p className="text-xl font-bold" >Choose Category</p>
  <select name=""  className="border border-[#EEEEEE] outline-blue-200  p-3 px-8 rounded-lg" required id="">
 <option value="">Choose category</option>
 <option value="">Interior Design</option>
 <option value="">Exterior Design</option>
 <option value="">New Ideas</option>
 <option value="">Trendy Design</option>
  </select>
 </div>
 <div className="flex flex-col gap-7">
  <p className="text-xl font-bold">Price Range</p>
  <select name=""  className="border border-[#EEEEEE] outline-blue-200 p-3 px-8 rounded-lg" required id="">
 <option value="">Choose price</option>
 <option value="">$100 - $200</option>
 <option value="">$250 - $500</option>
 <option value="">$500 - $1000</option>
 <option value="">$1000+</option>
  </select>
 </div>
 <div className="flex flex-col gap-7">
  <p className="text-xl font-bold">Pick a Plan</p>
  <select name=""  className="border border-[#EEEEEE] outline-blue-200 p-3 px-8 rounded-lg" required id="">
 <option value="">Choose plan</option>
 <option value="">Standard</option>
 <option value="">Professional</option>
 <option value="">Golden</option>
 <option value="">Premium</option>
  </select>
 </div>

 </div>
 <button type="submit" className="w-full mt-7 rounded-lg p-2.5 ease-in delay-100 bg-[#FF565B] text-white hover:bg-black">Search Now</button>
 </form>
 </div>
</div>

 
 <div className="hero h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

 </>
  )
}

export default Home
