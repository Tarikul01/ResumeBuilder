import React from 'react'

import Accordion from './Accordion';
import { accordions } from '../data/Accordians';

const Faqgrid = () => {
  return (
    <div className="wrapper mt-20">
    <h1 className="text-center text-5xl font-semibold mb-10 underline-offset-4">Resume Builder FAQ.</h1>

    {/* main content here */}
    <div className="max-w-[700px] w-full mx-auto mt-10 flex flex-col gap-4">
      {accordions.map((item, id) => {
        // destruct
        const { question, answer } = item;
        return (
          <div className="bg-black p-5 rounded-md text-white" key={id}>
            {/* passing two props to this component */}
            <Accordion question={question} answer={answer}></Accordion>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Faqgrid
