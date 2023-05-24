import lamp from "../../assets/pic/Final photo.png";

export default function Body() {
  return (
    <>
      <div className="flex flex-wrap w-full h-[750px] desktop:h-[950px] bg-sanaviye rounded-b-[30%] justify-center">
       
       <div className="flex items-center justify-between w-[85%] h-[40%] desktop:h-[70%] mt-[5%]"> 
       <p className="text-[16px] text-avaliye font-bold desktop:text-[37px] desktop:mt-[-50%] tablet:mt-[-38%] desktopl:mt-[-30%]">به اُیک خوش آمدید</p>
        <img src={lamp} alt="" className="w-[153px] h-[212px] desktop:w-[320px] desktop:h-[500px]  tablet:h-[450px]" />
       </div>
        
        <p className="w-[85%]  h-[50%] mt-[-00px] font-normal text-[14px] leading-[21.88px] desktop:w-[50%] desktop:text-[24px] desktop:leading-[37.5px] desktop:mr-[-34%]  desktop:mt-[-55%] tablet:mt-[-40%] desktopl:mt-[-30%] ">
          با ما رتبه یک گوگل شوید!! گروه برنامه نویسی اُ یک با ارائه متناسب قیمت
          و کیفیت در بسیاری از خدمات در خدمت مشتریان است. ما با استفاده از بروز
          ترین متد ها به بررسی سایت شما میپردازیم و در عرض چند ماه با استاندارد
          های سئو سایت شما رو به رتبه اول گوگل تبدیل میکنیم . نگران نباشید اگر
          کسب و کار خود را اینترنتی نکرده اید ! گروه طراحی سایت اُ یک با استفاده
          از استاندارد های به روز طراحی و برنامه نویسی ۰ تا ۱۰۰ سایت شمارو با
          بالاترین سرعت طراحی می‌کنند.
        </p>
      </div>

      <div className="flex justify-center">
      <p className="text-[16px] text-avaliye font-bold mt-[-40%]">خدمات اُیک</p>
      </div>
        

      <div>
        <div></div>
        <div></div>
        <div></div>

        <div></div>
        <div></div>
        <div></div>


      </div>

    </>
  );
}
