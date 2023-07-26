import React, { useEffect, useState } from "react";
import photoData from '../../api.json'
import './PhotoGallery.css'
import axios from "axios";
export const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(photoData);
  }, []);
  
  const [modelData, setModelData] = useState([]);
  // const idModelo = '<id modelo>'; // Replace this with the actual model ID you want to request
  useEffect(() => {
     
    const fetchModelData = async () => {
      try {
        const response = await axios.get(`https://challenge.egodesign.dev/api/models/`);
        setModelData(response.data);
      } catch (error) {
        console.error('Error fetching model data:', error);
      }

    };
        
        fetchModelData();
      }, []);
      console.log( modelData)
    return photos.map((p, row) => {
      return (
        <div className="image-container" key={p.id}>
          <img src={p.photo} alt={p.id} />
        </div>
      );
    });
  
  
};
