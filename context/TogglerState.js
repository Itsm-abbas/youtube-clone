import React, { useState } from "react";
import TogglerContext from "./contextapi";
const TogglerState = (props) => {
  const [toggler, setToggler] = useState(false);
  return (
    <TogglerContext.Provider value={{ toggler, setToggler }}>
      {props.children}
    </TogglerContext.Provider>
  );
};
export default TogglerState;
