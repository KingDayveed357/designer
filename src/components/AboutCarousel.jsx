import {useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {GoStarFill} from 'react-icons/go';
import {BsChatQuote} from 'react-icons/bs';

const AboutCarousel = () => {
  const testimonials = [
     
    {
      name: "Aniago David",
      role: "CEO of Designer",
      rating: <GoStarFill/>,
       
           },
    {
      name: "King Day_veed",
      role: "Frontend Developer",
      rating: <GoStarFill/>,
         },
    {
     
      name: "King Dave",
      role: "Full-Stack Developer",
      rating: <GoStarFill/>,
      },
  
    // Add more testimonials here
  ];
 
  const [slidesToShow, setSlidesToShow] = useState(1);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000, 
  };

  useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth >= 1024) {
        setSlidesToShow(2); 
      } else {
        setSlidesToShow(1); 
      }
    };

    
    handleResize();
    window.addEventListener('resize', handleResize);

   
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative  isolate overflow-hidden bg-white px-3 py-8">
      <div className="absolute  inset-0 -z-10 bg-white space-x-7 opacity-20"></div>
      <div className="mx-auto max-w-2xl   lg:max-w-4xl">
        <Slider {...sliderSettings} >
          {testimonials.map((testimonial, index) => (
            <div key={index} className='shadow-xl ' >
     <div className='relative '>      
  <BsChatQuote className=' text-4xl absolute text-[#FF565B]  ml-7'/>
<div className="max-w-sm p-6  py-14 bg-white  border-r-8 border-b-8 rounded-r-xl border-b-[#F6C5C6]   border border-r-[#F6C5C6] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className='flex flex-col px-10 '>
<p className='text-xl font-bold mb-1'>{testimonial.name}</p>
<p className='mb-4'>{testimonial.role}</p>
<p className='mb-6 flex gap-1 text-[#FF565B] '>{testimonial.rating} {testimonial.rating} {testimonial.rating}{testimonial.rating}{testimonial.rating}</p>
<p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quia est in laborum. Provident non atque doloremque.</p>
  </div>
</div>
</div>  
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default AboutCarousel;