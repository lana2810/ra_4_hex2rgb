import React from "react";

function InputRgb({ colorRgb }) {
  return (
    <input className="form-input" readOnly name="hex" defaultValue={colorRgb} />
  );
}

export default InputRgb;
