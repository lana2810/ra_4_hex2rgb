import React, { useState } from "react";
import convertor from "../convertor";
import InputRgb from "./InputRgb";
import InputHex from "./InputHex";

function Container() {
  const [color, setColor] = useState({
    hex: "#",
    rgb: "",
  });
  const handleColor = (evt) => {
    const { value } = evt.target;
    const tmp = convertor(value);
    setColor((prevColor) => ({ ...prevColor, rgb: tmp, hex: value }));
  };
  return (
    <div
      className="container"
      style={
        color.rgb === "error!!!"
          ? { backgroundColor: "red" }
          : { backgroundColor: `${color.rgb}` }
      }
    >
      <div className="centre-div">
        <InputHex onColor={handleColor} colorHex={color.hex}></InputHex>
        <InputRgb colorRgb={color.rgb}></InputRgb>
      </div>
    </div>
  );
}

export default Container;
