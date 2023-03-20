# MERN Stack Web Application with Mapbox and BabylonJS
This is a MERN (MongoDB, Express, React, Node.js) stack web application that allows users to choose a location on a map using Mapbox API and capture a screenshot of the visible region. The captured image is then applied as a material (texture) to a 3D cuboid using BabylonJS.

### Mapbox.js

The Mapbox.js file contains the code for the Mapbox component, which is responsible for rendering the Mapbox map and capturing the visible region. The component uses the useRef and useEffect hooks from React to initialize the map and capture the visible region when the user clicks the "Capture Map" button. The captured image is then passed to the parent component using the onCaptureMap callback function.

### Cuboid.js

The Cuboid.js file contains the code for the Cuboid component, which is responsible for rendering the 3D cuboid and applying the captured image as a texture. The component uses the useRef and useEffect hooks from React to initialize the BabylonJS engine and scene, and to load and apply the texture. The textureLoaded state is used to determine when the texture has been loaded and can be applied to the cuboid.

### App.js

The App.js file contains the main code for the web application. It imports the Mapbox and Cuboid components, and renders them inside a div element. The handleCaptureMap function is passed to the Mapbox component as a prop, which allows the captured image to be passed to the Cuboid component. The textureUrl state is used to store the URL of the captured image, and is passed to the Cuboid component as a prop.

Overall, the code allows users to interact with a Mapbox map and capture the visible region, which is then applied as a texture to a 3D cuboid using BabylonJS.
