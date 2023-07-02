import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../assets/pic/logo2.png";
import { Link, Outlet } from "react-router-dom";
import { useState,useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";

import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

export default function Header() {



  const [Close,setClose]=useState("hidden");
  const [Ham,setHam]=useState("max-desktop:flex");

  const [Top,setTop]=useState("absolute top-[-130%]");

  const [Dur,setDuration]=useState("duration-700");

  const [rotate,setRotate]=useState("block");

  const [rotateu,setRotateu]=useState("hidden");


  const Arrow=()=>{
    
  }

    const changrotate=()=>{

      setRotate("hidden");
      setRotateu("block");
 
      }

const changerotate2=()=>{
  setRotate("block");
      setRotateu("hidden");
}




/* 
    switch (Crotate) {
      case Crotate%2:
        console.log("hi")
        break;
    
      case Crotate%3:
        console.log("bye")
        break;
    } */


/* if(Crotate){
  setRotate("hidden") ;
  setRotateu("block");
  
  console.log("hi");

  Crotate=false;
}
else {
  Crotate=false;
  setRotate("block") ;
  setRotateu("hidden");
  console.log("bye");
} */







  const changeClose=()=>{
      setClose("block");
      setHam("max-desktop:hidden");
      setTop("absolute top-[0px]");
      setDuration("duration-700");
  }


  const changeClose2=()=>{
    setClose("hidden");
    setHam("max-desktop:flex");
    setTop("absolute bottom-[150%]");
    setDuration("duration-700");


  }
  return (

    <>


      <header className="flex h-[4.875rem] w-full bg-sanaviye items-center justify-center fixed z-50 ">

      
        <nav className="flex flex-row items-center justify-between w-[85%] h-full tablet:w-[85%] transition ease-in-out delay-100 max-desktop:justify-between">
      
        <RxHamburgerMenu onClick={changeClose} className={`text-[26px] desktop:hidden  max-desktop:order-1 ${Ham}`}/>
       
        <AiOutlineClose onClick={changeClose2} className={`text-[26px] text-black desktop:hidden  ${Close}`}/>

 
     
          <img className="h-[36px] max-desktop:order-3 max-desktop:ml-[10%]" src={Logo} alt="" />

          <ul className="flex flex-row justify-between w-[40%] h-full items-center max-desktop:hidden">
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/Seo">خدمات ما</Link>
            </li>
            <li className=" hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
  
 <a href="https://amoozeshkadeh.com/">آموزش</a>
 
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

         {/*  <div className="flex flex-row items-center max-desktop:order-4">
            <IoCallOutline className="transform rotate-[260deg] text-[22px] text-avaliye" />
            <a href="tel:02691010710"  className="flex flex-row-reverse" >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>
            <br />
            <IoCallOutline className="transform rotate-[260deg] text-[22px] text-avaliye" />
            <a href="tel:02691010710"  className="flex flex-row-reverse" >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>
          </div> */}
          
       <div className="w-[15%] h-full  max-desktopl:w-[20%]  max-desktop:order-4 max-mtablet:w-[50%] max-mtablet:h-[60%] " >

          <div className="w-full h-[50%]  flex items-center justify-around  "  >

          <IoCallOutline className="transform rotate-[260deg] text-[22px] text-avaliye  max-mtablet:text-[18px] mt-[15%] " />
            <a href="tel:02691010710"  className="flex flex-row-reverse max-mtablet:text-[12px]" >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>


          </div>

          <div className="w-full h-[50%]  flex items-center justify-around  "  >

          {/* <IoCallOutline className="transform rotate-[260deg] text-[22px] text-avaliye  max-mtablet:text-[16px]" /> */}
            <a href="tel:09220136476"  className="flex flex-row-reverse max-mtablet:text-[12px] ml-[-30%]  " > ۷۶ ۶۴ ۰۱۳ ۰۹۲۲</a>
          </div>

       </div>


          

        </nav>
  
    

        
   

      </header>








      <div className={`mtablet:h-[45vh] mobile:h-[47vh] bg-white w-full h-[48%] z-40 hidden max-desktop:block rounded-[5px]  ${Dur} ${Top}`} >



          <ul className="mtablet:pt-[12%] mobile:pt-[18%] pt-[25%] w-full h-full items-center  pr-[7%]  ">
            <li className=" w-[30%]  hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li  onClick={Arrow} className="flex items-center w-[25%] mt-[16px] hover:text-avaliye hover:border-b-[2px] hover:border-avaliye hover:transition ease-in-out delay-100">
              <Link >خدمات ما</Link>
              
              <IoIosArrowDown onClick={changrotate} className={`mr-[10%] ${rotate}`} />
             < IoIosArrowUp onClick={changerotate2} className={`mr-[10%] ${rotateu}`}/>

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