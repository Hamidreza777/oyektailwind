import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../assets/pic/logo2.png";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";



export default function Header() {
const [Menu,setMenu]=useState("hidden");





  return (
    <>
      <header className="flex h-[4.875rem] w-full bg-sanaviye/30 items-center justify-center fixed z-50 backdrop-blur-md">
        <nav className="flex flex-row items-center justify-between w-[85%] h-full tablet:w-[85%] transition ease-in-out delay-100 max-desktop:justify-between">
      
        <RxHamburgerMenu className="text-[26px] desktop:hidden max-desktop:flex max-desktop:order-1"/>
    
 
     
          <img className="h-[36px] max-desktop:order-3 max-desktop:ml-[10%]" src={Logo} alt="" />

          <ul className="flex flex-row justify-between w-[40%] h-full items-center max-desktop:hidden">
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Khadamat">خدمات ما</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Amoozesh">آموزش</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Call">تماس با ما</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/About">درباره ما</Link>
            </li>
          </ul>

          <div className="flex  items-center max-desktop:order-2">
            <HiMagnifyingGlass className="text-[22px]  text-avaliye mr-[10px]" />
            <input
              type="text"
              placeholder="جستجو ..."
              className=" bg-sanaviye/30 backdrop-blur-md focus:border-none focus:outline-none mr-[4px] w-[80px] "
            />
          </div>

          <div className="flex flex-row items-center max-desktop:order-4">
            <IoCallOutline className="transform rotate-[260deg] text-[22px] text-avaliye" />
            <a href="tel:02691010710"  className="flex flex-row-reverse" >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>
          </div>


          

        </nav>
  
    

        
   

      </header>

<div className="w-full h-[324px] z-50 bg-white   hidden max-desktop:block   "  >

<ul className="pt-[25%]  h-full items-center mr-[5%] ">
            <li className=" w-[30%]  hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className="w-[20%] mt-[16px]   hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Khadamat">خدمات ما</Link>
            </li>
            <li className="w-[20%] mt-[16px]   hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Amoozesh">آموزش</Link>
            </li>
            <li className="w-[20%] mt-[16px]   hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Call">تماس با ما</Link>
            </li>
            <li className="w-[20%] mt-[16px]   hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/About">درباره ما</Link>
            </li>
          </ul>


</div>

      <Outlet />

  



    </>
  );
}
