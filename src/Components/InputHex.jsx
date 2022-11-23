import React from "react";

function InputHex({ onColor, colorHex }) {
  return (
    <input
      onChange={onColor}
      className="form-input"
      spellCheck="false"
      name="hex"
      value={colorHex}
    />
  );
}

export default InputHex;
