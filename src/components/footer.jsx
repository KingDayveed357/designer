import logo from "../images/footer-logo.png";
import {RiFacebookCircleFill} from "react-icons/ri"
import {TiSocialTwitter} from "react-icons/ti"
import {RiLinkedinBoxFill} from "react-icons/ri"
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import  {BsArrowRightShort} from "react-icons/bs";
import { useState } from "react";

const Footer = () => {
const [top, goTop] = useState(false);

const takeToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  goTop(top)
}

  return (
    <>
<footer >
  <div className="footer-top ">
    <div className="footer  p-10  md:py-24 py-16 ">
  <div className="grid lg:grid-cols-12 gap-10 ">
  <div className="md:col-span-5 col-span-6 flex flex-col  gap-10 lg:px-12">
  <img src={logo} className="w-64" alt=""  />
 <p className="text-[16px] text-[#7A7A7A] leading-7 text-center md:text-left">Designer is free Bootstrap v5.1.3 CSS template. Everyone can get the best HTML CSS templates from TemplateMo website.</p>
  </div>
  <div className="col-span-6  md:place-self-center md:justify-self-end flex flex-col gap-10">
<div className="flex flex-col lg:flex-row lg:space-x-20 justify-center items-center gap-10 text-center md:text-left">
<div className="flex  flex-col gap-4 text-[#7A7A7A]">
 <p className="text-black font-bold text-lg md:text-xl">Our Location</p>
 <p className="text-[16px] ">Sunny Isles Beach</p>
 <p className="text-[16px] ">Florida 360</p>
 <p className="text-[16px] ">United States</p>
</div>
<div className="flex  flex-col gap-4 text-[#7A7A7A]">
 <p className="text-black font-bold text-lg md:text-xl">Customer Care</p>
 <p className="hover:text-[#FF7B5B] text-[16px] cursor-pointer">010-020-0340</p>
 <p className="hover:text-[#FF7B5B] text-[16px] cursor-pointer">07086293912</p>
 <p className="hover:text-[#FF7B5B] text-[16px] cursor-pointer">info@company.com</p>
</div>
<div className="flex  flex-col gap-4 text-[#7A7A7A]">
 <p className="text-black font-bold text-lg md:text-xl">Follow Us</p>
 <p className="hover:text-[#FF7B5B] text-[16px] flex  gap-1 cursor-pointer"><RiFacebookCircleFill className="text-lg text-[#7A7A7A] hover:text-[#FF7B5B]"/> Facebook</p>
 <p className="hover:text-[#FF7B5B] text-[16px] flex gap-1 cursor-pointer"><TiSocialTwitter className="text-lg text-[#7A7A7A] hover:text-[#FF7B5B]" />Twitter</p>
 <p className="hover:text-[#FF7B5B] text-[16px] flex gap-1 cursor-pointer"><RiLinkedinBoxFill className="text-lg text-[#7A7A7A] hover:text-[#FF7B5B]" /> Linkedin</p>
</div>
</div>
<div className="flex flex-col md:gap-6 gap-3 ">
<p className="text-xl font-bold text-black">Subscribe To Our Newsletter</p>
<form className="relative ">
<input type="email" placeholder="Type your email..."  required className="text-[#7A7A7A] text-[16px] p-2.5 md:border-b border-b-[#EEEEEE] w-full" />
<button type="submit" className="absolute flex justify-end items-end inset-3 text-right">Submit<BsArrowRightShort className="text-[#7A7A7A]  text-[21px]"/></button>
</form>
</div>
</div>

  </div>
    </div>
    </div>
</footer>

<footer className="footer text-[16px] text-[#7A7A7A] md:px-20 px-3 md:text-left text-center py-4 border-t   border-base-300">
  <div className=" flex flex-col md:justify-between md:items-start justify-center  items-center md:text-left text-center">
    <p>Copyright © 2023 Designer Co., Ltd. All Rights Reserved.</p>
    <p className="">Designer: <span className="text-[#FF7B5B]">King Day_veed</span></p>
  </div> 
  <div className="md:place-self-center md:justify-self-end px-20">
  <p className="flex gap-2" onClick={takeToTop}>Go to Top  <HiOutlineArrowUpTray className="mt-1"/> </p>
  </div>
</footer>
  </>
  )
}

export default Footer
