import React from 'react';
import logo from '../../assets/pic/logo.png';
import { Link} from "react-router-dom";


import {IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
const Footer = () => {
    return (
      <>
      
<div className=' mt-[100px]  bg-sanaviye h-[500px] flex flex-wrap rounded-tr-[50%] rounded-tl-[50%] max-desktop:h-[750px] max-mtablet:h-[850px] max-mtablet:rounded-tl-[300px] max-mtablet:rounded-tr-[300px]  '  >

<div className='   flex flex-wrap w-[85%] h-[250px] mx-auto justify-between mt-[15%] '>


{/* avali */}


<div className='w-[400px] h-[240px] mx-auto max-desktopl:w-[250px]  '>
<img src={logo} alt="" className='h-[56px] mx-auto '  />

<p className='mr-[24px] font-[400px]  text-[14px] p-[5%] '  > 
<pre className=' font-bold  text-[16px]' >
  تخصص   تجربه   کیفیت
<br/>
<br />
  گروه نرم افزاری OYEK

</pre>



</p>

</div>


{/* dovomi */}

<div className='w-[400px] h-[240px]  mx-auto max-desktopl:w-[250px] max-desktop:mt-[10%]  '>
<p className='font-bold text-[16px] text-avaliye mt-[4%] mr-[10%] ' >تماس باما</p>


<div className='flex items-center mt-[39px]  '> 
<IoLocationOutline className=' mr-[10%] mt-[4px] text-avaliye text-[25px]  ' />
<p> کرج، کیانمهر، بلوار کشاورز، بلوار ولیعصر، بلوک 2</p>

</div>
 
 <div className='flex mt-[34px] items-center ' >
<IoCallOutline className=' mr-[10%] mt-[4px] text-avaliye text-[25px] transform rotate-[260deg] '  />
<a href="tel:02691010710"  className="flex  mr-[5%]" >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>

 </div>
 <div className='flex mt-[34px] items-center' >
<IoCallOutline className=' mr-[10%] mt-[4px] text-avaliye text-[25px] transform rotate-[260deg] '  />
<a href="tel:09220136476"  className="flex  mr-[5%]" >۴۷۶ ۰۱۳۶ ۰۹۲۲</a>

 </div>


</div>



{/* sevoni */}
<div className='w-[400px] h-[240px] mx-auto max-desktopl:w-[200px] max-desktop:mt-[10%]  '>
<p className='font-bold text-[16px] text-avaliye mt-[4%] mr-[10%] ' > لینک ها</p>


<ul className="font-bold text-[16px]  mt-[4%] mr-[10%] ">
            <li>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link to="/Khadamat">خدمات ما</Link>
            </li>
            <li>
              <Link to="/Amoozesh">آموزش</Link>
            </li>
            <li>
              <Link to="/Call">تماس با ما</Link>
            </li>
            <li>
              <Link to="/About">درباره ما</Link>
            </li>
          </ul>

</div>


</div>


      </div>
      
      
     
      </>
    );
}

export default Footer;
