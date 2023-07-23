import React from "react";

import nose from "../../alpacas/src/assets/nose.png";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return null;
  });
  return images;
}

const eyes = importAll(require.context("./assets/eyes", false, /\.png/));
const neck = importAll(require.context("./assets/neck", false, /\.png/));
const acc = importAll(require.context("./assets/accessories", false, /\.png/));
const ears = importAll(require.context("./assets/ears", false, /\.png/));
const hair = importAll(require.context("./assets/hair", false, /\.png/));
const leg = importAll(require.context("./assets/leg", false, /\.png/));
const mouth = importAll(require.context("./assets/mouth", false, /\.png/));
// const bg = importAll(require.context("./assets/backgrounds", false, /\.png/));


const ImageComponent = () => {
  return (
    <div className="ALp">
      <h1>Displaying Image</h1>
      <img src={neck["default.png"]} alt="neck" className="alpaca" />
      <img src={ears["default.png"]} alt="ears" className="alpaca" />
      <img src={hair["default.png"]} alt="hair" className="alpaca" />
      <img src={acc["earings.png"]} alt="accessory" className="alpaca" />
      <img src={leg["default.png"]} alt="leg" className="alpaca" />
      <img src={eyes["default.png"]} alt="eyes" className="alpaca" />
      <img src={nose} alt="nose" className="alpaca" />
      <img src={mouth["default.png"]} alt="mouth" className="alpaca" />
    </div>
  );
};

export default ImageComponent;
