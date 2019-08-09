import React from "react";
import pizza from "../assets/pizza.svg";
import { connect } from "react-redux";
import place from "../assets/place.png";
function Pizza(props) {
  return (
    <div
      className="main-pizza"
      className="d-flex main-pizza justify-content-center w-100"
    >
      <img
        key={"-1"}
        src={place}
        alt={"zarf"}
        style={{
          zIndex: 99,
          position: "absolute"
        }}
      />
      {props.foods.map(food => (
        <img
          key={food.id}
          src={food.icon2}
          alt={food.name}
          style={{
            zIndex: food.zindex,
            position: "absolute"
          }}
        />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  foods: state.foods
});
export default connect(mapStateToProps)(Pizza);
