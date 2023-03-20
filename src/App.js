import React, { useState } from "react";
import Mapbox from "./Mapbox";
import Cuboid from "./Cuboid";

const App = () => {
  const [textureUrl, setTextureUrl] = useState(null);

  const handleCaptureMap = (url) => {
    setTextureUrl(url);
  };

  return (
    <div>
      <Mapbox onCaptureMap={handleCaptureMap} />
      <Cuboid textureUrl={textureUrl} />
      {/* {textureUrl && <Cuboid textureUrl={textureUrl} />} */}
    </div>
  );
};

export default App;