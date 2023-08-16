import { useState } from "react";
import whiteLogo from "../images/white-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  const buttonStyle = {
    display: props.disp || "none",
  };
  const title = {
    // fontSize: props.font || "50px",
  };
  
  


  return (
    <>
      <section
        className="bg-center bg-no-repeat bg-cover   bg-gray-800 bg-blend-multiply"
        style={{ backgroundImage: `url('${props.backgroundImageUrl}')`  }} 
      >
        {/* <Header/> */}

        <header className="flex flex-col ">
          <div className="navbar max-w-screen-xl mx-auto ">
            <div className="flex-1">
              <img src={whiteLogo} className="" alt="" />
            </div>
            <div
              className={`  hidden lg:flex  gap-16 text-white ${
                toggle ? "" : "hidden lg:flex"
              }`}
            >
              <li className=" list-none ">
                <NavLink
                  to="/"
                  className="hover:text-[#F34945] cursor-pointer p-4 rounded-lg active:text-[#F34945] focus:text-[#F34945] active:border-t-[#F34945]"
                  activeClassName=" active:bg-white focus:bg-white active:text-[#F34945] focus:text-[#F34945] active:border-t-[#F34945] p-4 rounded-lg" >
                  Homepage
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink to="/about" className="hover:text-[#F34945]">
                  About Us
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink to="/explore" className="hover:text-[#F34945]">
                  Explore Work
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink to="/trending" className="hover:text-[#F34945]">
                  Trending
                </NavLink>
              </li>
              <li className="list-none ">
                <NavLink to="/contact" className="hover:text-[#F34945]">
                  Contact Us
                </NavLink>
              </li>
            </div>
            {/* <div> */}
            <RxHamburgerMenu
              className="text-white text-3xl flex lg:hidden"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            {/* </div> */}
          </div>
          <div
            className={`  text-center delay-300 ease-in-out transition-all    bg-[#2A2A2A] overflow-y-auto  mx-5   rounded-lg  lg:mx-16   gap-16 text-white ${
              toggle ? "lg:hidden" : "hidden "
            }`}
          >
            <li className="mt-[-5px] list-none p-4  border-b border-b-[#bdbcbc] mx-7">
              <NavLink
                to="/"
                className="hover:text-[#F34945] cursor-pointer  active:bg-white  active:border-t-[#F34945]"
              >
                Homepage
              </NavLink>
            </li>
            <li className="list-none p-4 border-b border-b-[#bdbcbc] mx-7">
              <NavLink to="/about" className="hover:text-[#F34945]">
                About Us
              </NavLink>
            </li>
            <li className="list-none p-4 border-b border-b-[#bdbcbc] mx-7">
              <NavLink to="/explore" className="hover:text-[#F34945]">
                Explore Work
              </NavLink>
            </li>
            <li className="list-none p-4 border-b border-b-[#bdbcbc] mx-7">
              <NavLink to="/trending" className="hover:text-[#F34945]">
                Trending
              </NavLink>
            </li>
            <li className="list-none p-4">
              <NavLink to="/contact" className="hover:text-[#F34945]">
                Contact Us
              </NavLink>
            </li>
          </div>
        </header>

        <div className={`px-6 mx-auto max-w-screen-sm text-center   ${props.padi}`}>
          <h1
            className={`mb-4 md:text-2xl text-[22px] font-bold text-white`}
            style={buttonStyle}
          >
            WE PROVIDE EVERYTHING
          </h1>
          <h1
            className={`mb-8 font-bold  leading-snug md:leading-normal text-[#F34945] ${props.fonts}`}
            style={title}
          >
            {props.name} <span className="text-white">{props.span}</span>
          </h1>

          <p className="text-center text-white mb-5 font-semibold ">
            {props.p}
          </p>
          <button
            style={buttonStyle || hoverStyle}
            className="p-2.5 px-6 mb-20 rounded-lg hover:bg-[#F34945] hover:text-white delay-150 ease-in bg-white text-[#F34945]"
          >
            Discover More
          </button>
        </div>
      </section>
    </>
  );
};

export default Header;
