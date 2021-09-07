
import React, { useState } from "react";
//? Import Components
import Loading from "./components/Loading";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import ImageNotFound from "./components/ImageNotFound";
//? Custom hook
import useFetchImage from "./customHook/useFetchImage";
//? TailwindCSS
import "./assets/main.css";

function App() {
  const [term, setTerm] = useState("");

  const API_KEY = "18771872-b42ff40097332c73214ab569a";

  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`;

  const { data: images, loading } = useFetchImage(url, term);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {/* Cheeck if user search eny images and that not found  */}
      {!loading && images.length === 0 ? <ImageNotFound /> : null}
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
