import React, { useState } from "react";
import PropTypes from 'prop-types';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    searchText(text);
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Serach Image..."
            className="appearance-none bg-transparent border-none w-full
                    text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
          <button
            className="flex-shrink-0 font-semibold bg-blue-500 text-white p-1 rounded-md"
            type="submit"
          >
            Serach
          </button>
        </div>
      </form>
    </div>
  );
};


// Prop Types
ImageSearch.propTypes = {
  searchText: PropTypes.func  
}

export default ImageSearch;