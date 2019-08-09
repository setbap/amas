import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../../assets/chiz1.png";
// import chiz2 from "../../assets/chiz2.png";
import chiz3 from "../../assets/chiz3.png";
import { sos_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";
function SelectDatail() {
  // const images = [
  //   { src: chiz1, name: "یک" },
  //   { src: chiz1, name: "یک" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz2, name: "دو" },
  //   { src: chiz3, name: "سه" },
  //   { src: chiz3, name: "سه" }
  // ];
  return (
    <div className="pa d-flex border-0 rounded-pill">
      {sos_data.map((sos, index) => (
        <Tooltip content={sos.name} key={index}>
          <div
            className="si-box-item"
            onClick={() => {
              store.dispatch(selectedFood(sos));
            }}
          >
            <img src={chiz3} alt={sos.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
}

export default SelectDatail;
