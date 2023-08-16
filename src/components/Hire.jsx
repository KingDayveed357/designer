

const Hire = (props) => {
  return (
    <section className='bg-[#2A2A2A] py-12 mt-10'>
    <div className='max-w-screen-xl mx-auto'>
    <div className="flex flex-col md:gap-0 gap-5 md:flex-row md:justify-between justify-center items-center ">
    <div>
<h1 className='text-white md:text-4xl text-2xl font-bold text-center'>{props.name}</h1>
    </div>
    <div>

       <button
            
            className="p-2.5 px-6 rounded-lg hover:bg-[#F34945] hover:text-white delay-150 ease-in bg-white text-[#F34945]"
          >
            Contact Us Now
          </button>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Hire
