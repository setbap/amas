import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../../assets/chiz1.png";
// import chiz2 from "../../assets/chiz2.png";
import chiz3 from "../../assets/chiz3.png";
import { gosht_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";

function SelectDatail() {
  return (
    <div className="pa d-flex border-0 rounded-pill">
      {gosht_data.map((item, index) => (
        <Tooltip content={item.name} key={index}>
          <div
            className="si-box-item"
            onClick={() => {
              store.dispatch(selectedFood(item));
            }}
          >
            <img src={chiz3} alt={item.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
