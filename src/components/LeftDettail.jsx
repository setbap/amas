import React from "react";
import goshtImg from "../assets/left/meat.png";
import sabzijatImg from "../assets/left/broccoli.png";
import panirImg from "../assets/left/panir.png";
import binamImg from "../assets/left/rolling-pin.png";
import { Button } from "reactstrap";
import { removeFood } from "../action";
import sosImg from "../assets/left/sos.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import close from "../assets/left/close.png";
// import { CHANGE_MAME } from '../action';
import { connect } from "react-redux";

function LeftDettail(props) {
  const totalPrice = () => {
    let sum = 0;
    props.foods.forEach(food => (sum += food.price));
    return sum;
  };

  const dontHaveNon = () => {
    const res = props.foods.findIndex(food => food.parentId === "3");
    return res === -1;
  };

  const pill = (name, id) => (
    <CSSTransition key={id} timeout={500} classNames="move">
      <div
        className=" d-flex m-1  border-my-dark py-0 px-2 rounded-pill"
        style={{ direction: "rtl" }}
      >
        <h6
          style={{ fontSize: "12px", direction: "rtl" }}
          className="  px-1 pt-2"
        >
          {name}
        </h6>
        <img
          src={close}
          alt="close btn"
          style={{ cursor: "pointer" }}
          onClick={() => props.removeFood(id)}
          className="  px-2  py-2 my-1 mini-close-btn rounded-pill"
        />
      </div>
    </CSSTransition>
  );
  const meat = props.foods.filter(food => food.parentId === "0");
  const sabzi = props.foods.filter(food => food.parentId === "1");
  const panir = props.foods.filter(food => food.parentId === "2");
  const non = props.foods.filter(food => food.parentId === "3");
  const sos = props.foods.filter(food => food.parentId === "4");

  return (
    <div className="text-right w-100 mx-2">
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={binamImg} alt="بی نام" className="ml-2" />
        <h5>بی نام</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        <TransitionGroup className="items-section__list">
          {non.map(item => {
            return pill(item.name, item.id);
          })}
        </TransitionGroup>
      </div>
      {/*  ////////////// */}
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={sosImg} alt="سس" className="ml-2" />
        <h5>سس</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {sos.map(item => {
          return pill(item.name, item.id);
        })}
      </div>
      {/*  ////////////// */}
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={panirImg} alt="پنیز" className="ml-2" />
        <h5>پنیز</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {panir.map(item => {
          return pill(item.name, item.id);
        })}
      </div>
      {/*  ////////////// */}
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={goshtImg} alt="گوشت" className="ml-2" />
        <h5>گوشت</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {meat.map(item => {
          return pill(item.name, item.id);
        })}
      </div>
      {/*  ////////////// */}
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={sabzijatImg} alt="سبزیجات" className="ml-2" />
        <h5>سبزیجات</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {sabzi.map(item => {
          return pill(item.name, item.id);
        })}
      </div>{" "}
      <div className="mt-5 d-flex flex-row-reverse justify-content-center">
        <h3 className="mx-1 text-success">{totalPrice()}</h3> <h4>تومان</h4>
      </div>
      <div className="mt-3 d-flex flex-row-reverse justify-content-around">
        <Button
          disabled={dontHaveNon()}
          outline
          color={dontHaveNon() ? "secondary" : "success"}
          className="border-1 p-2 px-4 rounded-pill"
        >
          <h2>افزودن یه سید خرید </h2>
        </Button>
      </div>
      <p className="p-4 text-center">
        {dontHaveNon() ? "تا قبل از انتخاب نان نمیتوانید سفارش دهید" : ""}
      </p>
    </div>
  );
}
const mapStateToProps = state => ({
  foods: state.foods
});

export default connect(
  mapStateToProps,
  { removeFood }
)(LeftDettail);
