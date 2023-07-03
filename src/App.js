import React from "react";
import Testmonial from './components/Testmonial'
import reviews from "./data"

const App = () => {
  return(
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

      <div className="text-right ">

        <h1 className="text-4xl font-bold text-center">Our Testimonials</h1>

        <div className="bg-violet-400 h-[4px] w-1/5 mx-auto"></div>

        <Testmonial reviews={reviews}></Testmonial>

      </div>

      

    </div>
  );
};

export default App;
