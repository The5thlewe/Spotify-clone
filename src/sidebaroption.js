import React from "react";
import "./sidebaroption.css";

function sidebaroption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4> {title} </h4> : <p> {title} </p>}
    </div>
  );
}

export default sidebaroption;
