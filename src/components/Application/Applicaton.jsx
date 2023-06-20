import React from 'react';

import app from '../../assets/pic/APPLECATION.png';
import app1 from '../../assets/aks/app1.jpg';
import app2 from '../../assets/aks/app2.jpg'

const Applicaton = () => {
    return (
        <>

    
    
        <h1 className='pt-[10%] max-desktop:pt-[20%] max-mtablet:pt-[30%] '  ></h1>
    
    
     <div className=' w-[85%] h-[420px] bg-sanaviye rounded-[30px] flex mx-auto justify-around  items-center relative max-desktop:h-[153px]  '>
    
    <h1 className=' text-[50px] text-avaliye max-desktop:text-[16px] font-bold ' >وب  اپلیکشین </h1>
    
    <img src={app} alt="" className='w-[380px] h-[383px]  rounded-tr-[50%] rounded-tl-[50%] rounded-br-[50%] max-desktop:w-[132px] max-desktop:h-[133px] mb-[-3.2%] max-desktopl:mb-[-4%] max-desktop:mt-[-1%] max-mtablet:mb-[-5.5%] ' />
    
    </div>
      


    <div className='w-[85%] h-[630px]  shadow-myshadow bg-white mx-auto mt-[56px] rounded-[10px]  max-desktopl:h-[700px] max-desktop:h-[750px] max-mtablet:h-[900px] '  >

<div className='w-[78%] h-full mx-auto max-mtablet:w-[96%]  ' >
{/* 
<h2 className='  text-[24px] text-avaliye font-bold pt-[56px] max-mtablet:text-[18px] max-mtablet:pt-[28px] max-mtablet:pr-[5%] '  > اثر تجربه کاربری و رابط کاربری   </h2> */}


<p className='w-full text-[16px] pt-[56px]  font-normal leading-[35px] mt-[32px] max-mtablet:w-[96%] max-mtablet:mt-[16px] max-mtablet:pr-[5%] ' > 

وب اپلیکیشن یک برنامه کامپیوتری است که از تکنولوژی وب و توانایی مرورگرها برای انجام وظایف خود استفاده ‌می‌کند.  اپلیکیشن تحت وب برای اجرا شدن نیاز به وب سرور و
 پایگاه داده اطلاعاتی و سرور برنامه دارد .
نکته مهم در خصوص برنامه‌های تحت وب این است که  برای استفاده کردن نیاز به بارگیری ندارند؛ زیرا همه‌ اقدامات تحت شبکه و در بستر آن انجام میگردد.
 همه کاربران برای دسترسی به یک برنامه تحت وب کافی است از طریق مرورگرهای وب، مانند 
  اقدام نمایند .Google Chrome، Mozilla Firefox یا Safari
باید افزود تعدادی از وب اپلیکیشن‌ها یک نسخه اولیه دارند که باید یک بار روی دستگاه کاربر نصب شود . در نهایت برای ذخیره اطلاعات مورد نیاز از پایگاه داده استفاده می‌شود.



</p>



<img src={app1} alt="" className='w-[547px] h-[324px] rounded-[5px] mx-auto mt-[32px] max-desktop:w-[447px] max-desktop:h-[224px] max-mtablet:pr-[-3%]  ' />

{/* 
<h2 className='  text-[24px] text-avaliye font-bold pt-[56px] max-mtablet:text-[18px] max-mtablet:pt-[28px] max-mtablet:pr-[5%] '  >  مزایای UI&UX  </h2> */}


{/* <p className='w-full text-[16px] font-normal leading-[35px] mt-[32px] max-mtablet:w-[96%] max-mtablet:mt-[16px] max-mtablet:pr-[5%]  ' > 
" دو بعد جدایی ناپذیر طراحی وب سایت هستند. UI & UX "
  به معنای رابط کاربری است، در واقع ظاهر هر بخش از سایت که شما مشاهده   UI
 مینمایید، به جنبه های گرافیکی میپردازد تا جلوه مناسبی به وب سایت بدهد. , 
      به معنای تجربه کاربر‌ی است، به احساسات وراحتی کاربرحین استفاده    UX  
از اجزای مختلف سایت گفته میشود و جوانب تعامل کاربر را با هر بخش در نظر می‌گیرد. این نکته که ‌سایت به گونه ای طراحی شده باشد که هر مطلب به راحتی در دسترس کاربران قرار بگیرد و برای کار کردن با هر قسمت آسودگی و راحتی کاربر درنظر گرفته شوداز مسائل مورد توجه طراح تجربه ی کاربری است .
میتوان گفت که تجربه کاربری و رابط کاربری مکمل همدیگر هستند و دست در دست هم به موفقیت سایت و وفاداری کاربر، بازدید بالاو فروش بهتر منجر میشوند.





</p> */}

{/* <img src={app2} alt="" className='w-[547px] h-[324px] rounded-[5px] mx-auto mt-[32px] max-desktop:w-[447px] max-desktop:h-[224px] ' />  */}


</div>





















</div>






        </>
    );
}

export default Applicaton;
