import React from "react";
import gosht from "../assets/left/meat.png";
import sabzijat from "../assets/left/broccoli.png";
import panir from "../assets/left/panir.png";
import binam from "../assets/left/rolling-pin.png";
import { Button } from "reactstrap";

import sos from "../assets/left/sos.png";

function LeftDettail() {
  const pill = (
    <div
      className="border d-flex m-1  border-light py-0 px-2 rounded-pill"
      style={{ direction: "rtl" }}
    >
      <h6
        style={{ fontSize: "12px", direction: "rtl" }}
        className="  px-1 pt-2"
      >
        گی{" "}
      </h6>
      <span
        style={{ fontSize: "9px", cursor: "pointer" }}
        className=" border px-1 bg-light text-body py-0 my-2  rounded-pill"
      >
        x
      </span>
    </div>
  );

  return (
    <div className="text-right w-100 mx-2">
      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={binam} alt="بی نام" className="ml-2" />
        <h5>بی نام</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {pill}
        {pill}
        {pill}
      </div>

      {/*  ////////////// */}

      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={sos} alt="سس" className="ml-2" />
        <h5>سس</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
      </div>
      {/*  ////////////// */}

      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={panir} alt="پنیز" className="ml-2" />
        <h5>پنیز</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {pill}
        {pill}
        {pill}
      </div>
      {/*  ////////////// */}

      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={gosht} alt="گوشت" className="ml-2" />
        <h5>گوشت</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
      </div>
      {/*  ////////////// */}

      <div className="d-flex justify-content-start flex-row-reverse">
        <img src={sabzijat} alt="سبزیجات" className="ml-2" />
        <h5>سبزیجات</h5>
      </div>
      <div className="d-flex flex-wrap flex-row-reverse my-3 ">
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
        {pill}
      </div>
      <div className="mt-5 d-flex flex-row-reverse justify-content-around">
        <Button
          outline
          color="success"
          className="border-1 p-2 px-4 rounded-pill"
        >
          <h2>سفارش </h2>
        </Button>
        <span className="pt-3 d-flex">
          <h3 className="mx-1 text-success">30000</h3> <h4>تومان</h4>
        </span>
      </div>
    </div>
  );
}

export default LeftDettail;
