
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";


export default function Call() {
  return (
    <>
    <p className="pt-[10%] mx-auto flex justify-center text-[37px] text-avaliye  max-desktop:pt-[15%] max-mtablet:pt-[25%] max-mtablet:text-[20px] " >تماس با ما</p>


    <div className="h-[606px] w-[85%]  flex mx-auto max-desktopl:mt-[5%] max-desktop:h-[400px] max-mtablet:h-[200px] items-center " >

<div className="w-[377px] h-[606px] bg-sanaviye absolute z-30 max-desktop:w-[250px] max-desktop:h-[400px] max-mtablet:h-[200px] max-mtablet:w-[150px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] flex items-center max-mtablet:rounded-bl-[30px]  max-mtablet:rounded-br-[30px] max-mtablet:rounded-tl-[30px] ">

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2009.8450791708544!2d50.85794823456443!3d35.77941285948259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1685804612079!5m2!1sen!2s" frameborder="0"  className=" w-[319px] h-[541px] rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] mx-auto border-4 border-white max-desktop:w-[220px] max-desktop:h-[360px] max-mtablet:h-[170px] max-mtablet:w-[130px] max-mtablet:rounded-bl-[30px]  max-mtablet:rounded-br-[30px] max-mtablet:rounded-tl-[30px]     "  ></iframe>




</div>



<div className="w-[80%] ml-[-0] h-[508px] border-8 border-avaliye mx-auto  relative  z-10   max-mtablet:h-[150px]  max-desktop:h-[300px] " >

<div className="mx-auto flex  w-[440px] h-50px  items-center mt-[10%] max-desktopl:w-[300px]  max-desktopl:ml-[15%] max-desktopl:mt-[20%] max-desktop:mt-[10%] max-mtablet:w-[170px] max-mtablet:mr-[32%] max-mtablet:mt-[5%] " >
<IoLocationOutline className="text-[25px] text-avaliye ml-[5%]   " />
<p className=" text-[20px]  max-mtablet:text-[13px]   " >کرج، کیانمهر، بلوار کشاورز، بلوار ولیعصر، بلوک 2</p>

</div>

<div className="mx-auto flex   h-50px  w-[430px]   items-center mt-[5%] max-desktopl:w-[300px] max-desktopl:ml-[15%] max-mtablet:w-[170px] max-mtablet:mr-[32%]    " >
<IoCallOutline className="text-[25px] text-avaliye transform rotate-[260deg] ml-[5%] max-mtablet:text-[15px] " />
<a href="tel:02691010710" className="text-[25px] max-mtablet:text-[13px]    "  >۷۱۰ ۱۰ ۹۱۰ ۰۲۶</a>

</div>

<div className="mx-auto flex   h-50px  w-[430px]  items-center mt-[5%] max-desktopl:w-[300px]  max-desktopl:ml-[15%] max-mtablet:w-[170px] max-mtablet:mr-[32%]  " >
<AiOutlineMail className="text-[25px] text-avaliye ml-[5%] max-mtablet:text-[15px] " />
<a href="mailto:info@Oyek.net
" className="text-[25px]  max-mtablet:text-[13px]  "  >info@Oyek.net</a>

</div>










</div>



    </div>
    </>
  )
}
