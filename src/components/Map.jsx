import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import axios from 'axios';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZnVtZXRzdSIsImEiOiJjbWZsMzVha3YwMHo4MmtzaHF0MnJpb2JvIn0.IkXLBfFOx6Cf7T_w7Nk7gw';

const monasteries = [
  { 
    name: 'Rumtek Monastery', 
    coords: [88.6103, 27.3306],
    info: 'One of the most important monasteries in Sikkim, known for Kagyu teachings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Vikramjit-Kakati-Rumtek.jpg'
  },
  { 
    name: 'Pemayangtse Monastery', 
    coords: [88.308, 27.3276],
    info: 'A 17th-century Buddhist monastery near Pelling.',
    image: 'https://live.staticflickr.com/5787/20222324323_cf2d8dbbb6_b.jpg'
  },

  { 
    name: 'Tashiding Monastery', 
    coords: [88.3654, 27.2977],
    info: 'One of the most important monasteries in Sikkim, known for Kagyu teachings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mani_stone_slabs_outside_Tashiding_Monastery.jpg/1920px-Mani_stone_slabs_outside_Tashiding_Monastery.jpg' 
  },

  { 
    name: 'Ralang Monastery', 
    coords: [88.7038, 27.1773],
    info: 'One of the most important monasteries in Sikkim, known for Kagyu teachings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ralong_monastery_-_top_view.jpg/1280px-Ralong_monastery_-_top_view.jpg' 
  },

  { 
    name: 'Enchey Monastery', 
    coords: [88.6160, 27.3333],
    info: 'One of the most important monasteries in Sikkim, known for Kagyu teachings.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Enchey_Monastery_in_Gangtok_district%2C_East_Sikkim.jpg/500px-Enchey_Monastery_in_Gangtok_district%2C_East_Sikkim.jpg'
  },
];

const Map = () => {
  const mapContainer = useRef(null);
  const [overlay, setOverlay] = useState(null); // {type: 'info' | 'image', monastery: {}}

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [88.5122, 27.5330],
      zoom: 8,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers + name labels
    monasteries.forEach((m, idx) => {
      const marker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat(m.coords)
        .addTo(map);

      // When marker is clicked → show panel
      marker.getElement().addEventListener('click', () => {
        setOverlay({ type: 'info', monastery: m });
      });

      // Add text labels
      map.on('load', () => {
        map.addSource(`label-${idx}`, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: { title: m.name },
            geometry: { type: 'Point', coordinates: m.coords },
          },
        });

        map.addLayer({
          id: `label-${idx}-layer`,
          type: 'symbol',
          source: `label-${idx}`,
          layout: {
            'text-field': m.name,
            'text-offset': [0, 1.5],
            'text-anchor': 'top',
            'text-size': 14,
          },
          paint: {
            'text-color': '#ffffff',
            'text-halo-color': '#000000',
            'text-halo-width': 1,
          },
        });
      });
    });

    // Fetch route
    const getRoute = async () => {
      const coords = monasteries.map((m) => m.coords.join(',')).join(';');
      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coords}?geometries=geojson&overview=full&access_token=${mapboxgl.accessToken}`;

      try {
        const response = await axios.get(url);
        const route = response.data.routes[0].geometry;

        map.on('load', () => {
          map.addSource('route', {
            type: 'geojson',
            data: { type: 'Feature', geometry: route },
          });

          map.addLayer({
            id: 'route',
            type: 'line',
            source: 'route',
            layout: { 'line-join': 'round', 'line-cap': 'round' },
            paint: {
              'line-color': 'rgba(0,255,255,0.5)',
              'line-width': 6,
            },
          });
        });
      } catch (err) {
        console.error('Error fetching route:', err);
      }
    };

    getRoute();

    return () => map.remove();
  }, []);

  return (
    <>
      <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />

      {overlay && (
        <div className="info-panel" style={{ top: '20px', left: '20px', bottom: 'unset' }}>
          <h2>{overlay.monastery.name}</h2>

          <div className="button-row">
            <button onClick={() => setOverlay({ type: 'info', monastery: overlay.monastery })}>
              Info
            </button>
            <button onClick={() => setOverlay({ type: 'image', monastery: overlay.monastery })}>
              Image
            </button>
          </div>

          <div className="panel-content">
            {overlay.type === 'info' ? (
              <p>{overlay.monastery.info}</p>
            ) : (
              <img
                src={overlay.monastery.image}
                alt={overlay.monastery.name}
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            )}
          </div>

          <button className="close-btn" onClick={() => setOverlay(null)}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Map;
