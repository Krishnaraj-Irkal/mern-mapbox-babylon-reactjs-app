import React, { useEffect, useRef, useState } from "react";
import * as BABYLON from "babylonjs";
import "babylonjs-loaders";

const Cuboid = ({ textureUrl }) => {
  const canvasRef = useRef(null);
  const [textureLoaded, setTextureLoaded] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new BABYLON.Engine(canvasRef.current, true);
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2,
      5,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    camera.attachControl(canvasRef.current, true);

    const light = new BABYLON.HemisphericLight(
      "light",
      new BABYLON.Vector3(0, 1, 0),
      scene
    );

    const material = new BABYLON.StandardMaterial("material", scene);
    if (textureLoaded) {
      material.diffuseTexture = new BABYLON.Texture(textureUrl, scene);
    }

    const box = BABYLON.MeshBuilder.CreateBox("box", {}, scene);
    box.material = material;

    engine.runRenderLoop(() => {
      scene.render();
    });

    return () => {
      engine.dispose();
    };
  }, [textureLoaded, textureUrl]);

  useEffect(() => {
    const texture = new BABYLON.Texture(textureUrl, null, true, false, BABYLON.Texture.BILINEAR_SAMPLINGMODE, null, null, textureUrl, true);

    texture.onLoadObservable.addOnce(() => {
      setTextureLoaded(true);
      texture.dispose();
    });

    return () => {
      texture.dispose();
    };
  }, [textureUrl]);

  return <canvas ref={canvasRef} style={{ height: "500px" }} />;
};

export default Cuboid;