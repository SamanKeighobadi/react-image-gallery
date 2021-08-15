import axios from "axios";
import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import ImageNotFound from "./components/ImageNotFound";

import "./assets/main.css";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  const fetchImages = async () => {
    let url = `https://pixabay.com/api/?key=18771872-b42ff40097332c73214ab569a&q=${term}&image_type=photo&pretty=true`;
    const response = await axios.get(url).catch((err) => console.log(err));
    setImages(response.data.hits);
    console.log(response.data.hits);
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [term]);
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!loading && images.length === 0 ? (<ImageNotFound />): null}
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
          {images.map((image) => (
            <ImageCard image={image} key={image.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
