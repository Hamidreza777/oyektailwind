import lamp from "../../assets/pic/Final photo.png";
import dising from '../../assets/pic/Web design.png';
import ui from '../../assets/pic/ux ui.png';
import webapp from '../../assets/pic/Webapp.png';
import mohtava from '../../assets/pic/mohtava.png';
import ads from '../../assets/pic/ads.png';
import seo from '../../assets/pic/seo.png';
import about from '../../assets/pic/About.png';
import pic1 from '../../assets/pic/Project summary.png';
import pic2 from '../../assets/pic/final project.png';
import pic3 from '../../assets/pic/Initial project.png';
import team from '../../assets/pic/team members.png';
import blue from '../../assets/pic/blue.png';
import green from '../../assets/pic/green.png';
import oreng from '../../assets/pic/oreng.png';

import shop from '../../assets/pic/shop.png';
import componi from '../../assets/pic/componi.png';
import web from '../../assets/pic/Webapp.png';

import sard from '../../assets/pic/sard.png';
import khavian from '../../assets/pic/khavian.png';
import amoozesh from '../../assets/pic/amoozesh.png';
import sard2 from '../../assets/pic/sard2.png';
import sard3 from '../../assets/pic/sard3.png';

import { Link} from "react-router-dom";

import { HiOutlineArrowSmallLeft } from "react-icons/hi2";




export default function Body() {
  return (
    <>
      <div className="flex flex-wrap w-full h-[750px] desktop:h-[950px] bg-sanaviye rounded-b-[30%] justify-center">
       
       <div className="flex items-center justify-between w-[85%] h-[40%] desktop:h-[70%] mt-[5%]"> 
       <p className="text-[16px] text-avaliye font-bold desktop:text-[37px] desktop:mt-[-50%] tablet:mt-[-38%] desktopl:mt-[-30%]">به اُیک خوش آمدید</p>
        <img src={lamp} alt="" className="w-[153px] h-[212px] desktop:w-[320px] desktop:h-[500px]  tablet:h-[450px]" />
       </div>
        
        <p className="w-[85%]  h-[50%] mt-[-00px] font-normal text-[14px] leading-[21.88px] desktop:w-[50%] desktop:text-[24px] desktop:leading-[37.5px] desktop:mr-[-34%]  desktop:mt-[-55%] tablet:mt-[-40%] desktopl:mt-[-30%] ">
       
        با ما رتبه یک گوگل شوید!! گروه برنامه نویسی اُیک با ارائه نازلترین
              قیمت و بالا ترین کیفیت در خدمت مشتریان می باشد. ما با استفاده از
              بروز ترین  متدها به بررسی سایت شما میپردازیم و در زمانی کوتاه با
            استاندارد های سئو سایت شما را به رتبه اول گوگل تبدیل می نمایم .
              نگران نباشید! اگر کسب و کار خود را اینترنتی نکرده اید، گروه طراحی
               سایت اُیک با استفاده از استاندارد های به روز طراحی و برنامه نویسی
              و به کار گیری پرسنل متخصص ۰ تا ۱۰۰ سایت شما را با بالاترین سرعت
              طراحی می نماید .
        </p>
      </div>

      <div className="flex justify-center">
      <p className="text-[16px] text-avaliye font-bold mt-[-30%] desktop:mt-[-20%]" >خدمات اُیک</p>
      </div>
        

      <div className="w-[85%] mx-auto grid grid-cols-2 place-items-center gap-2 mt-[-18%] desktop:flex desktop:justify-between desktop:mt-[-13%] ">
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox  bg-white grid place-items-center">
<img className="h-[72px] w-[72px]" src={dising} alt="" />


<Link to="/Khadamat">
<p className="text-[14px] font-bold">طراحی سایت</p>

</Link>


        </div>
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox bg-white/30 backdrop-blur-md grid place-items-center desktop:mb-[-13%]">

<img className="h-[72px] w-[72px]" src={ui} alt="" />



              <Link to="/Khadamat"> <p className="text-[14px] font-bold ">رابط و تجربه کاربری</p> </Link>
      


        </div>
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox bg-white/30 backdrop-blur-md grid place-items-center desktop:mb-[-23%]">

<img  className="h-[72px] w-[72px]" src={webapp} alt="" />


<Link to="/Khadamat"> <p className="text-[14px] font-bold">وب اپلیکشن</p> </Link>




        </div>
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox bg-white grid place-items-center desktop:mb-[-23%]  ">

<img  className="h-[72px] w-[72px]   " src={mohtava} alt="" />


<Link to="/Khadamat"><p className="text-[14px] font-bold">تولید محتوا</p> </Link>


        </div>
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox bg-white grid place-items-center desktop:mb-[-13%]">

<img  className="h-[72px] w-[72px]" src={ads} alt="" />


<Link to="/Khadamat"><p className="text-[14px] font-bold">تبلیغات گوگل </p></Link>


        </div>
        <div className="h-[128px] w-[128px] rounded-[5px] shadow-mybox bg-white grid place-items-center">

<img  className="h-[72px] w-[72px]" src={seo} alt="" />


<Link to="/Khadamat"> <p className="text-[14px] font-bold">سئو</p> </Link>

        </div>


      </div>


<p className="text-[28px] text-avaliye font-bold mt-[20%] flex justify-center">درباره اُیک</p>



<div className=" w-[85%] h-[450px] mx-auto  flex justify-between items-center  " >

<div className=" h-[250px] w-[322px] text-black ">
<p className=" font-bold text-[24px]   ">که هستیم؟</p>

<p className="mt-[24px] text-[16px] w-[327px] h-[155px]   max-mobile:mt-[40%]  leading-[25px] max-desktop:w-[290px] max-mtablet:w-[350px]     ">

امروزه بیش تر کسب و کار ها اینترنتی شده است اگر شما همچنان تردید دارید به راه اندازی کسب و کار اینترنتی، گروه پشتیبانی اُیک درخدمت شما است، تا بهترین راهنمایی را به شما ارائه نماید.<br/> گروه اُیک با در برداشتن بروزترین اطلاعات و بهترین متخصصان، سایت شما را  طراحی، سئو  ، UI & UX  وپشتیبانی می نماید.  همچنین با داشتن نمونه کارهای متعدد باعث رضایت مشتریان می گردد.

</p>



</div>

<img src={about} alt=""  className=" h-[354px] w-[355px] max-mtablet:h-[190px] max-mtablet:mt-[-60%] max-mtablet:mr-[-45%] max-desktop:mr-[15%]  "/>



</div>












<p className="text-[28px] text-avaliye font-bold mt-[100px] flex justify-center">مراحل طراحی سایت</p>
<div className="w-[75%] flex flex-wrap justify-center  mx-auto h-[1086px] mt-[16px] desktop:justify-between desktop:h-[352px] desktopl:w-[60%] ">

<div  className="h-[352px] w-[237px] bg-gradient-to-t from-white to-cyan-200  mt-[10px] rounded-t-[150px]  flex items-center justify-center flex-col">

<img className="h-[88px] w-[88px]   " src={pic1} alt="" />
<p className="text-[14px] font-bold mt-[5%] ">
دریافت خلاصه پروژه
</p>
<p className="w-[187px] text-[14px] font-normal mt-[5%] leading-[21.88px] ">
این یک سند کوتاه یک یا دو صفحه ای است که اهداف سایت : چالش ها ، پیام رسانی ، راه حل و سایر جزئیات یک پروژه را مشخص می‌کند همچنین به راهنمایی تیم خلاق اُ یک درمورد چگونگی دستیابی به اهداف پروژه کمک می‌کند.

</p>

</div>
<div className="h-[352px] w-[237px] bg-gradient-to-t from-white to-orange-200 mt-[10px]  rounded-t-[150px]  flex items-center justify-center flex-col">
<img className="h-[88px] w-[60.6px]   " src={pic2} alt="" />
<p className="text-[14px] font-bold mt-[5%] ">
ارائه نسخه اولیه
</p>
<p className="w-[187px] text-[14px] font-normal mt-[5%] leading-[21.88px]">
در این مرحله ما نسخه اولیه از مطالب خواسته شده را در اختیار شما قرار می‌دهیم تا از روند انجام پروژه مطلع باشید.

</p>

</div>
<div className="h-[352px] w-[237px] bg-gradient-to-t from-white to-green-200  mt-[10px]  rounded-t-[150px]  flex items-center justify-center flex-col ">
<img className="h-[100px] w-[72px]   " src={pic3} alt="" />
<p className="text-[14px] font-bold mt-[5%] ">
ارائه نسخه نهایی

</p>
<p className="w-[187px] text-[14px] font-normal mt-[5%] leading-[21.88px] ">
بعد از تکمیل پروژه یک فایل تست در اختیار شما قرار می‌گیرد تا به بررسی پروژه بپردازید و در صورت مشکل به ما اطلاع بدهید تا تیم اُ یک به بررسی مشکل ایجاد شده بپردازد.
</p>



</div>
</div>

<p className="text-avaliye font-bold text-[24px]  mt-[96px]  flex justify-center">اعضای تیم اُیک</p>


<div className="relative w-full h-[600px] -z-50 max-mtablet:h-[430px] mt-[20px]">



<img src={team} alt="" className=" absolute w-[50%] h-[386px] right-[40%] max-desktop:right-[30%] max-mtablet:w-[80%] max-mtablet:h-[200px] max-mtablet:right-[10%] backdrop-blur-md" />



<div className=" absolute  w-[25%] h-[273px] bg-sanaviye rounded-[5px] flex mx-auto left-[-0%] -z-10 top-[50%] max-desktop:h-[200px] max-mtablet:top-[35%] max-mtablet:h-[150px]  "></div>



<div className=" absolute  w-[47%] h-[237px] bg-avaliye rounded-[5px] top-[30%] max-desktop:h-[300px] max-desktop:top-[40%] max-mtablet:w-[70%] max-mtablet:h-[280px]   ">

<p className="text-white text-[24px] font-bold  mt-[16px]  pr-[15%]   max-mtablet:text-[14px] max-mtablet:pr-[5%] ">
همه اعضای تیم ما حرفه ایی هستند
</p>

<p className="w-[90%] h-[113px] text-[16px] font-bold text-white pr-[15%] mt-[16px]  max-mtablet:text-[14px]  max-mtablet:pr-[5%]  leading-[25px]  ">
اکنون همکاران oyekدر زمینه طراحی وب سایت و سئو رابط و تجربه کاربری،وب اپلیکشن، تولید محتوا و تبلیغات گوگل و همچنین ارائه راهکارهایی نوین برای معرفی وب سایت از طریق بهینه سازی seo و شبکه های اجتماعی تلاش می نماید تا تجربه ای منحصر به فرد برای کاربران و مشتریان خود در فضای مجازی ایجاد نماید.
</p>





</div>





</div>





<p className="text-avaliye font-bold text-[24px] mt-[100px]   flex justify-center">انواع طراحی سایت</p>

<div className="h-[956px]  w-full mtablet:flex  mtablet:h-[337px] mt-[32px] ">



<div className="flex justify-center mx-auto  w-[237px] h-[272px] mt-[16px] " >

<img  src={green} alt="" className="w-[237px] h-[272px] relative"  />

<p className="absolute text-[14px] font-bold  ml-[-8%] mt-[3%] max-desktop:mt-[7%] max-mtablet:mr-[15%]  ">فروشگاهی</p>

<img src={shop } alt="" className="absolute  w-[72px] h-[72px]  mt-[1%] mr-[-10%] max-desktop:ml-[9%] max-desktop:mt-[3%]  max-mtablet:mr-[-20%] "   />
<p className=" absolute w-[177px] h-[86px]  text-[14px] font-normal mt-[11%] max-desktop:mt-[20%]  max-mtablet:mt-[35%]  ">
طراحی فروشگاه اقدامی تخصصی است که با بکارگیری UI&UX باعث جذب مخاطبان و انتخال شما به عنوان بهترین است.
</p>


</div>


{/* dovom */}
<div  className="flex justify-center mx-auto  w-[237px] h-[272px]  mt-[46px]  ">
<img src={oreng} alt="" className="   w-[237px] h-[272px] relative   " />

<img src={componi} alt="" className="absolute  w-[72px] h-[72px]  mt-[1%] mr-[-10%] max-desktop:ml-[9%] max-desktop:mt-[3%]  max-mtablet:mr-[-20%]   "/>
<p className="absolute text-[14px] font-bold  ml-[-8%] mt-[3%]  max-desktop:mt-[7%] max-mtablet:mr-[15%]  ">شرکتی</p>

<p className=" absolute w-[177px] h-[86px] text-[14px] font-normal mt-[11%] max-desktop:mt-[20%]  max-mtablet:mt-[35%]    ">
گروه  oyek می تواند همراهی مناسب برای حضور فعال و قدرتمند شما در فضای رقابتی باشد.



</p>


</div>




{/* sovom */}


<div className=" flex justify-center mx-auto  w-[237px] h-[272px]  mt-[46px]   ">

<img src={blue} alt="" className=" w-[237px] h-[272px] relative  " />

<img src={web} alt="" className="absolute  w-[72px] h-[72px] mt-[1%] mr-[-10%] max-desktop:ml-[9%] max-desktop:mt-[3%] max-mtablet:mr-[-20%]  " />


<p className="absolute text-[14px] font-bold ml-[-8%] mt-[3%] max-desktop:mt-[7%] max-mtablet:mr-[15%]   ">وب اپلیکشن</p>


<p className=" absolute w-[177px] h-[86px] text-[14px] font-normal mt-[11%] max-desktop:mt-[20%] max-mtablet:mt-[35%]   ">
        این برنامه نیازی به نصب ندارد و سریع از طریق مرورگر در اختیار کاربر قرار می گیرد و با توجه به در خواست شما طراحی می شود.
</p>


</div>



</div>




<p className=" mt-[96px]  text-avaliye font-bold text-[24px]  flex justify-center ">چرا باید اُیک را انتخاب کنیم؟</p>



<div className="w-full h-[760px]  flex flex-wrap justify-between flex-row-reverse  ">
<div className=" relative  w-[60%] h-[750px] max-mtablet:h-[400px]  flex top-[16px]  " >
{/* avali */}
<div className="absolute w-[319px] h-[176px] bg-white  left-40 z-20 top-[70%] 
max-mtablet:w-[282px] max-mtablet:h-[117px] max-mtablet:left-10 rounded-[5px] max-mtablet:top-[70%] shadow-mybox p-[15px] ">

<p className="font-bold text-[24px] text-black   max-mtablet:text-[14px] ">پشتیبانی سریع</p>

<p className="font-normal text-[16px]  leading-[25px] max-mtablet:text-[14px] ">یکی از نکات موفقیت در هر فضا رقابتی ، پاسخگویی است که پشتیبانی قوی یکی از  افتخارات oyek است.</p>





</div>



{/*  dovom  */}   
<div className="absolute w-[319px] h-[176px] bg-white left-60 z-20 top-[40%] max-mtablet:w-[282px] max-mtablet:h-[117px]  max-mtablet:left-20 max-mtablet:top-[35%] shadow-mybox rounded-[5px]  p-[15px] ">
<p className="font-bold text-[24px] text-black  max-mtablet:text-[14px] ">تیم حرفه ایی</p>

<p className="font-normal text-[16px] leading-[25px] max-mtablet:text-[14px] ">مهم ترین نکته ی موجود در یک شرکت طراحی سایت ،تیم متخصص با تجربه و اطلاعات بروز آن است.</p>


</div>

{/* sovom */}

<div className="absolute w-[319px] h-[176px] bg-white left-40 z-20 top-[10%] max-mtablet:w-[282px] max-mtablet:h-[117px] max-mtablet:left-10   rounded-[5px] max-mtablet:top-[2%] shadow-mybox  p-[15px] ">


<p className="font-bold text-[24px] text-black   max-mtablet:text-[14px]">قیمت های مقرون به صرفه</p>

<p className="font-normal text-[16px]  leading-[25px] max-mtablet:text-[14px]  ">هزینه های طراحی سایت بسته به نیاز شما طبقه بندی شده و انتخاب هر پلن با توجه به سرمایه و  کسب و کارتان امکان پذیر است. </p>

</div>


<div className="absolute  w-[360px] h-[720px] bg-avaliye flex   left-0 rounded-tr-[24rem] rounded-br-[24rem] rounded-tl-[0px] rounded-bl-[0px] top-6 max-mtablet:w-[180px] max-mtablet:h-[360px] "></div>








</div>














<div className=" relative  w-[550px] h-[760px] flex mx-auto  max-desktopl:w-[400px] max-desktop:w-[90%] max-desktop:h-[230px]  max-mtablet:right-0  ">

<p className=" absolute w-[450px] h-[326px] font-normal text-[16px] top-[40%]   max-desktopl:w-[300px] max-desktopl:right-20  max-desktopl:top-[35%] max-desktop:top-[5%] max-desktop:w-[70%] max-desktop:h-[200px]    leading-[25px]  max-desktop:right-14  max-mtablet:w-[100%] max-mtablet:right-2  " >
از آنجا که طراحی سایت با استفاده از روشها و فنون متفاوتی انجام می شود نکات قابل تو جهی که در میزان دانش و تجارت حرفه ای در زمینه های گوناگون  <br/> web desing ، کیفیت پیاده سازی مطالب ،قابلیت انعطاف پذیری وب سایت، زمان تحویل پروژه، بررسی محتوای قابل اجرا ،سئو تخصصی ونحوه پشتیبانی  پروژه وجود دارد، باعث تفاوت در نتیجه ی کار طراحان oyek خواهد بود.

</p>



</div>



</div>


<p className="  mt-[70px]  text-avaliye font-bold text-[24px]  flex justify-center  " >برخی از نمونه کار های اُیک</p>


<div className="w-[95%]  mx-auto flex
justify-between gap-3 mt-[56px] "   >

{/* avali */}
<div>
<img src={sard} alt="" />


</div>

{/* domvomi */}

<div>

<img src={amoozesh} alt="" />

</div>



{/* sevomi */}

<div>

<img src={khavian} alt="" className="w-[338px]  " />


</div>





</div>

<div className="w-[95%]  mx-auto flex
justify-between gap-3 mt-[7px] "   >

<div>
<img src={sard2} alt="" />


</div>

<div>
<img src={sard3} alt="" />

</div>




</div>

<ul>
<li  >

<Link to="/Khadamat" >
<button className="w-[198px] h-[38px] bg-avaliye mx-auto flex mt-[56px] rounded-[5px] items-center p-[8px]  ">

<p className="text-[14px] text-white font-normal   ">

مشاهده نمونه کارهای بیشتر 
</p>

<HiOutlineArrowSmallLeft className=" text-[40px] text-white font-normal w-[20px] "   />

</button>

</Link>



</li>

</ul>







    </>
  );
}
