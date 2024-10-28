import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';

const MapComponent = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapboxToken = 'pk.eyJ1Ijoicm9iaW5kYW5nMzUiLCJhIjoiY20yc3ByNzl0MDA0dDJqb28yMG9scmMyNyJ9.sGwpCJdCvLrlknV7mwKBtQ'

  return (
    <Map
      initialViewState={{
        latitude: 10.8231,
        longitude: 106.6297,
        zoom: 12,
      }}
      style={{ width: '100%', height: '100%', borderRadius: '10px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={mapboxToken}
      onLoad={() => setMapLoaded(true)}
    >
      {mapLoaded && (
        <Marker latitude={10.8231} longitude={106.6297} offsetLeft={-20} offsetTop={-10}>
          <div>📍</div>
        </Marker>
      )}
    </Map>
  );
};

export default MapComponent;
