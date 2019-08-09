import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../../assets/chiz1.png";
// import chiz2 from "../../assets/chiz2.png";
import chiz3 from "../../assets/chiz3.png";
import { sos_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";
function SelectDatail() {
  const foods = store.getState().foods;
  const isSelected = id => {
    const res = foods.findIndex(food => food.id === id);
    return res !== -1;
  };
  // const images = [
  //   { src: chiz1, name: "یک" },
  //   { src: chiz1, name: "یک" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz3, name: "سه" },
  //   { src: chiz3, name: "سه" }
  // ];
  return (
    <div
      className="pa d-flex border-0 rounded-pill"
      style={{
        backgroundColor: "rgba(234, 188, 76, 0.45)"
      }}
    >
      {sos_data.map((sos, index) => (
        <Tooltip content={sos.name} key={index}>
          <div
            className={`si-box-item ${isSelected(sos.id) ? "active-si" : ""}`}
            onClick={() => {
              store.dispatch(selectedFood(sos));
            }}
          >
            <img src={sos.icon1} alt={sos.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
