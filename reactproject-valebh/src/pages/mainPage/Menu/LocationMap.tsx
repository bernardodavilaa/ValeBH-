import { ComponentProps, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN = process.env.REACT_APP_MAPBOX_API_KEY;

interface LocationMapProps extends ComponentProps<'div'> {
  zoom: number;
}

export function LocationMap({zoom, ...props}: LocationMapProps) {
  const [viewport, setViewport] = useState({
    latitude: -19.932094700182997,
    longitude: -43.933182163158506,
    zoom: 15
  });

  return (
    <div {...props}>
      <Map
        initialViewState={viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={TOKEN}
        style={{ width: '100%', height: '100%' }}
      >
        <Marker latitude={-19.932088934196575} longitude={-43.933171986271915} />
      </Map>
    </div>
  );
}
