import React, { useEffect, useState } from 'react';
import './main.css';

const GetStart = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Récupérer les images depuis l'API http://localhost:8080/photo
    fetch('http://localhost:8080/photo')
      .then(response => response.json())
      .then(data => {
        setImages(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des images:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Galerie d'images</h1>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-4" key={index}>
            <img src={image.url} alt={image.photoid} className="img-fluid" />
            <p>{image.resto.nom}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStart;
