import React, { useState } from "react";
import { FcCheckmark, FcExpand } from "react-icons/fc";

const DataItems = ({ title, des, index }) => {
  const [isShown, setIsShown] = useState(false);

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  const [isShowing, setIsShowing] = useState(-1);

  //to show and hide description once click on the icon

  const [showDetails, setShowDetails] = useState(false);

  const handleIconClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      key={index}
      className="data-item"
      onMouseEnter={() => setIsShowing(index)}
      onMouseLeave={() => setIsShowing(-1)}
      // onMouseEnter={() => toggle(index)}
      // onMouseLeave={() => toggle(index)}
      // onMouseEnter={() => setIsShown(true)}
      // onMouseLeave={() => setIsShown(false)}
    >
      <div>
        <h5>{title}</h5>
        {showDetails ? <p>{des}</p> : null}
        {isShowing == index ? (
          <p style={{ backgroundColor: "white" }}><FcExpand size={30} onClick={handleIconClick} /></p>
        ) : null}
      </div>
      {isShowing == index ? (
        <div className="icons">
          <FcExpand size={30} onClick={handleIconClick} />
          <FcCheckmark size={30} />
        </div>
      ) : null}
    </div>
  );
};

export default DataItems;
