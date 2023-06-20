import React from 'react';
import error from '../../assets/aks/404.jpg'
const Error = () => {
    return (
   <>
   <p className='pt-[10%] mx-auto flex justify-center text-[32px] font-bold text-avaliye max-desktop:pt-[15%] max-mtablet:pt-[30%] ' >صفحه مورد نظر یافت نشد!</p>
   
   
   


<img src={error} alt="" className='w-[85%]  h-[550px] mx-auto mt-[32px] max-mtablet:h-[350px] ' />


   </>
    );
}

export default Error;
