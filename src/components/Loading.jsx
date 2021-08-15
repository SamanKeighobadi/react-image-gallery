import React from "react";
import {HashLoader} from 'react-spinners'

const Loading = () => {
  return (
    <div className="">
      <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center mt-32">
        <HashLoader size={80} />
      </h1>
    </div>
  );
};

export default Loading;
