import React from "react";
import Tooltip from "react-tooltip-lite";
import chiz1 from "../../assets/chiz1.png";
import { non_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";

// import connectWithTransitionGroup from "connect-with-transition-group";

function SelectDatail() {
  // const images = [
  //   { src: chiz1, name: "یک" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz3, name: "سه" }
  // ];
  console.log(store.getState());

  return (
    <div className="pa d-flex border-0 rounded-pill">
      {non_data.map((non, index) => (
        <Tooltip content={non.name} key={index}>
          <div
            className="si-box-item"
            onClick={() => {
              store.dispatch(selectedFood(non));
            }}
          >
            <img src={chiz1} alt={non.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
