import React, { useEffect, useState } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

import './App.css';

const GetStart = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [images, setImages] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/photo')
      .then(response => response.json())
      .then(data => {
        setImages(data);
        const newMarkers = data.map(image => ({
          lat: image.resto.latitude,
          lng: image.resto.longitude,
        }));
        setMarkers(newMarkers);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des images:', error);
      });
  }, []);

  const openMap = (marker) => {
    if (marker.lat && marker.lng) {
      setSelectedMarker(marker);
      setShowMap(true);
    } else {
      console.error('Les coordonnées sont manquantes pour afficher la carte.');
    }
  };

  useEffect(() => {
    setSelectedMarker({ lat: 31.6295, lng: -7.9811 }); // Set initial coordinates for Marrakech
    setShowMap(true);
  }, []);

  return (
    <div className="container" style={{ overflow: "hidden" }}>
      <div className="row">
        {images.map((image, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card">
              <img
                src={image.url}
                alt={image.photoid}
                className="card-img-top img-fluid"
                style={{ height: '300px', objectFit: 'cover' }}
              />

              <div style={{ background: "#5cb85c", boxShadow: "0 1px rgba(0,0,0,0.2)", mozboxshadow: "0 1px rgba(0,0,0,0.2)", webkitboxshadow: "0 1px rgba(0,0,0,0.2)", color: "#fff", textshadow: "2px 2px #333", position: "absolute", right: "-10px", top: "16px", padding: "5px 10px", fontsize: "20px", borderradius: '3px', boxsizing: "border-box" }}>
                7/7
              </div>

              <div className="card-body" style={{ backgroundColor: 'yellow' }}>

                <h2 style={{ color: "#e7480f", fontSize: "18px", fontWeight: "bold" }}>{image.resto.nom}</h2>

                <tr>
                  <td><h5>Heure d'ouverture:</h5></td>
                  <td><p className="card-text">{image.resto.heure_open}</p></td>
                </tr>

                <tr>
                  <td><h5>Heure de fermeture:</h5></td>
                  <td><p className="card-text">{image.resto.heure_close}</p></td>
                </tr>
                <button className="btn btn-danger" style={{ width: "100%" }} onClick={() => openMap(image)}>Maps</button>


              </div>
            </div>


          </div>
        ))}
      </div>

      {showMap && selectedMarker && selectedMarker.lat && selectedMarker.lng && (
        <div className="row">
          <div className="col-12" >
            <Map
              google={props.google}
              zoom={15}
              initialCenter={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            >
              {markers.map((marker, index) => (
                <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
              ))}
            </Map>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyATpb9OaW1RfsHtw9BUkZgiospCasFeLB8'
})(GetStart);
