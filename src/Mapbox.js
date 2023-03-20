import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1Ijoia3Jpc2huYXJhamlya2FsIiwiYSI6ImNsZmR3YXk3ODBnanU0MGxyY3g2bjg2djIifQ.KeEKt9GRenH6ZYAnmV-RMg";

const Mapbox = ({ onCaptureMap }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4194, 37.7749],
      zoom: 13,
    });
  }, []);
  const captureMap = () => {
    const canvas = map.current.getCanvas();
    const url = canvas.toDataURL("image/png");
    onCaptureMap(url);
  };

  return (
    <div>
      <div ref={mapContainer} style={{ height: "500px" }} />
      <button onClick={captureMap}>Capture Map</button>
    </div>
  );
};

export default Mapbox;