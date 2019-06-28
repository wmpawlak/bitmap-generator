import React from "react";
import { Painter } from "./Painter";

function ColorPicker(_) {
  const { colors, setColor } = React.useContext(Painter);

  const colorOption = color => {
    return (
      <div
        key={color.name}
        className="color"
        style={{ backgroundColor: color.hex }}
        onClick={() => setColor(color)}
      />
    );
  };

  const colorOptions = () => {
    return colors.map(color => {
      return colorOption(color);
    });
  };

  return <div className="colorpicker">{colorOptions()}</div>;
}

export default ColorPicker;
