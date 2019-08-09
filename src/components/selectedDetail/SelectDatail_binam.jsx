import React from "react";
import Tooltip from "react-tooltip-lite";
import chiz1 from "../../assets/chiz1.png";
import { non_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";

// import connectWithTransitionGroup from "connect-with-transition-group";

function SelectDatail() {
  const foods = store.getState().foods;
  const isSelected = id => {
    const res = foods.findIndex(food => food.id === id);

    return res !== -1;
  };
  // const images = [
  //   { src: chiz1, name: "یک" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz3, name: "سه" }
  // ];

  return (
    <div
      className="pa d-flex border-0 rounded-pill"
      style={{
        backgroundColor: "#49282876"
      }}
    >
      {non_data.map((non, index) => (
        <Tooltip content={non.name} key={index}>
          <div
            className={`si-box-item ${isSelected(non.id) ? "active-si" : ""}`}
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
