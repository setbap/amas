import React from "react";
import Tooltip from "react-tooltip-lite";
// import chiz1 from "../../assets/chiz1.png";
// import chiz2 from "../../assets/chiz2.png";
import { gosht_data } from "../../data";
import { selectedFood } from "../../action";
import store from "../../store";

const SelectDatail = () => {
  const foods = store.getState().foods;
  const isSelected = id => {
    const res = foods.findIndex(food => food.id === id);
    return res !== -1;
  };

  // const [counter, setCounter] = useState(0) ;
  return (
    <div
      className="pa d-flex border-0 rounded-pill"
      style={{
        backgroundColor: "#98484876"
      }}
    >
      {gosht_data.map((item, index) => (
        <Tooltip content={item.name} key={index}>
          <div
            className={`si-box-item ${isSelected(item.id) ? "active-si" : ""}`}
            onClick={() => {
              store.dispatch(selectedFood(item));
            }}
          >
            <img src={item.icon1} alt={item.name} />{" "}
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SelectDatail;
