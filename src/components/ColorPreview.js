import React from "react";
import { Painter } from './ColorsPallete';

function ColorPreview() {
  const {color} = React.useContext(Painter);

  return (
    <div className="colorPreview">Color selected: {color.name}</div>
  );
}

export default ColorPreview;
