import axios from 'axios';
import {useState,useEffect} from 'react'


const useFetchImage = (url,term) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //? fetch Data from API
  const fetchImages = async () => {
    const {data} = await axios.get(url).catch((err) => console.log(err));
    // console.log(data);
    //* set States
    setData(data.hits);
    setLoading(false);
  };

  //? useEffect Hook
  useEffect(() => {
    fetchImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return {data,loading}

};

export default useFetchImage;