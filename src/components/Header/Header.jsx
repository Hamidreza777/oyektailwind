import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import Logo from "../../assets/pic/logo2.png";
import { Link, Outlet } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="flex h-[4.875rem] w-full bg-sanaviye items-center justify-center fixed">
        <nav className="flex flex-row items-center justify-between w-[85%] h-full tablet:w-[85%] transition ease-in-out delay-100 max-desktop:justify-between">
      
        <RxHamburgerMenu className="text-[24px] desktop:hidden max-desktop:flex max-desktop:order-1"/>
         
          <img className="h-[56px] max-desktop:order-3 max-desktop:ml-[10%]" src={Logo} alt="" />

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
            <HiMagnifyingGlass className="text-[24px]  text-avaliye" />
            <input
              type="text"
              placeholder="جستجو . . ."
              className="bg-sanaviye focus:border-none focus:outline-none mr-[4px] w-[80px] "
            />
          </div>

          <div className="flex flex-row items-center max-desktop:order-4">
            <IoCallOutline className="transform rotate-[260deg] text-[24px] text-avaliye" />
            <a href="tel:02691010710">02691010710</a>
          </div>



    

        </nav>
      </header>
      <Outlet />
    </>
  );
}
