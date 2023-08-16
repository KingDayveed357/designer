import Hire from '../components/Hire';
import Header from '../components/header'
import trendingBg from "../images/trending-item-01.jpg";
import explore1 from "../images/explore-item-01.jpg";
import explore2 from "../images/explore-item-02.jpg";
import explore3 from "../images/explore-item-03.jpg";
import left from "../images/left-img.jpg"
import right from "../images/right-img.jpg"

const Explore = () => {

  const backgroundImageUrl = `url('${trendingBg}')`;
  return (
    <>
       <Header
        style={backgroundImageUrl}
        backgroundImageUrl={trendingBg}
        name={`EXPLORE `}
        span={`OUR WORK` }
        p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ratione sit laborum. Numquam quidem provident reiciendis."
        fonts="md:text-5xl text-4xl"
        padi="py-24 lg:py-36"
      /> 
 <main className="py-16 px-3 text-[#7A7A7A]">
    <div className="max-w-screen-xl mx-auto flex flex-col gap-8 ">
<div className='flex flex-col gap-8'>
   <h1 className='text-center text-3xl font-extrabold text-black'>MINIMALISTIC DESIGN FOR 2 BEDROOMS</h1>
   <div className='relative grid justify-items-center gap-5 items-end '>
    <img src={explore1} className='rounded-lg' alt="" />
    
    <div className='lg:grid hidden grid-cols-6 absolute justify-items-center gap-16 px-6 py-6 rounded-md mb-7 opacity-80 bg-white '>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Developer:</p>
   <p>Aniago David</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Client:</p>
   <p>King Day_veed</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Terms:</p>
   <p>6-12 Months</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Project Type:</p>
   <p>Web Development</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Strategy:</p>
   <p>Hardwork & Prayers</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Date:</p>
   <p>August 14th, 2023</p>
     </div>
    </div>
    </div>
    </div>
 <div className='opacity-80 shadow-xl rounded-md drop-shadow-xl bg-[#FAFAFA]'>
    <div className='flex lg:hidden gap-5   flex-col text-center py-6 max-w-screen-xl mx-auto'>
    <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Developer:</p>
   <p>Aniago David</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Client:</p>
   <p>King Day_veed</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Terms:</p>
   <p>6-12 Months</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Project Type:</p>
   <p>Web Development</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Strategy:</p>
   <p>Hardwork & Prayers</p>
     </div>
     <div className='flex flex-col'>
   <p className='font-semibold text-lg text-center text-black'>Date:</p>
   <p>August 14th, 2023</p>
     </div>
    </div>
    </div>
    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>This is an Interior Designer HTML5 Template that is 100% totally free to download, edit and use for your commercial or business websites. 
      You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. 
      Please contact TemplateMo website for more information. Thank you. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
     
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mx-auto'>
     <img src={explore2} className='rounded-lg ' alt="" />
     <img src={explore3} className='rounded-lg ' alt="" />
      </div>
      <div className='flex flex-col gap-5 ' >
     <p className='font-extrabold text-3xl text-black'>INCREDIBLE WORK</p>
     <p className='text-[16px] leading-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
      eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt.
       Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</p>
      </div>
      <div className='border-t border-t-[#EEEEEE] text-[#7A7A7A] py-6 lg:pt-16 lg:mt-12'>
        <div className='flex md:flex-row flex-col justify-between gap-8'>
        <div className='flex md:justify-between  lg:gap-6 gap-2'>
          <img src={left} className='rounded-lg  lg:w-fit w-[20%]' alt="" />
          <div className='flex flex-col my-auto gap-1'>
             <p className='font-bold text-lg hover:text-[#FF565B] delay-300 ease-in-out cursor-pointer   text-black'> Minimalistic Living Room </p>
            <p>Interior Design</p>
          </div>
        </div>
        <div className='flex md:justify-between justify-end lg:gap-6 gap-2 lg:border-none border-t border-t-[#EEEEEE] text-[#7A7A7A] py-6 lg:py-0'>
          <div className='flex flex-col my-auto gap-1'>
             <p className='font-bold text-lg hover:text-[#FF565B] delay-300 ease-in-out cursor-pointer  text-black'> Futuristic Interior Concept </p>
            <p>Interior Design</p>
          </div>
          <img src={right} className='rounded-lg lg:w-fit w-[20%]' alt="" />
        </div>
        </div>
      </div>
    </div>
    
   </main>
 
 {/* <section className='max-w-scr'>

 </section> */}
      <Hire
      name="LOOKING TO WORK ON A PROJECT ?"
      />
    </>
  )
}

export default Explore
