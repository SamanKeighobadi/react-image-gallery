import React from "react";
import PropTypes from 'prop-types' 
//? Import Icons
import {FaEye,FaDownload,FaHeart} from 'react-icons/fa'

const ImageCard = ({image}) => {

    //? tags of images are entier string and use split methods 
    const tags = image.tags.split(',');

  return (
    <div className="sm:mx-auto " >
      <div className="max-w-sm sm:ml-4 overflow-hidden rounded shadow-lg sm:mb-4 ">
        <img
          src={image.webformatURL}
          alt="text"
          className="w-full"
        />
        <div className="py-4 px-6">
          <div className="font-bold text-blue-700 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li className='relative'>
             <strong > <FaEye className='inline-block' /> Viwes: </strong>
              {image.views}
            </li>
            <li>
              <strong> <FaDownload className="inline-block" /> Downloads:  </strong>
              {image.downloads}
            </li>
            <li>
              <strong> <FaHeart className="inline-block" /> Likes:  </strong>
              {image.likes}
            </li>
          </ul>
        </div>

        <div className="px-6 py-4">
          {tags.map((tag,index) => (
            <span key={index} className="inline-block bg-blue-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
          ))}
        </div>
      </div>
    </div>
  );
};

//Prop Types 
ImageCard.propTypes = {
  image:PropTypes.object
}

export default ImageCard;
