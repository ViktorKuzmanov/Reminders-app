import React from "react";

const Reminder = (props) => {
  return (
    <div style={{ backgroundColor: "#fca652", height: "50px", width: "100px" }}>
      {props.name}
    </div>
  );
};

export default Reminder;
