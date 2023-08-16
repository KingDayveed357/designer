import  { useState } from 'react';
import {IoIosArrowUp} from "react-icons/io";
import {IoIosArrowDown} from "react-icons/io";
function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col ">
      <div className="">
        {items.map((item, index) => (
          <div key={index} className="border-b border-b-[#EEEEEE] mb-4">
            <div
              className={`p-4 cursor-pointer flex justify-between items-center `}
              onClick={() => toggleAccordion(index)}
            >
              <span className='text-lg'>{item.title}</span>
              <span className="text-lg">{index === activeIndex ? <IoIosArrowUp className="my-auto" /> :  <IoIosArrowDown className="my-auto" />}</span>
            </div>
            {index === activeIndex && (
              <div className="p-4 " >{item.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const accordionItems = [
    {
      title: 'What is Interior Design?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
      Risus commodo viverra maecenas ai accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      title: 'What is Exterior Decoration?',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai accumsan 
      lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      title: '3D Rendering Models',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas ai 
      accumsan lacus vel cilisis lorem ipsum dolor sit amet, consectetur adipiscingii elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
  ];

  return <Accordion items={accordionItems} />;
}

export default App;
