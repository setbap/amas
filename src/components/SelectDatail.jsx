import React from "react";
import { CSSTransition } from "react-transition-group";

// hard code is shet but feeling sleep so shet it
import Noon from "./selectedDetail/SelectDatail_binam";
import Ghosht from "./selectedDetail/SelectDatail_gosht";
import Panir from "./selectedDetail/SelectDatail_panir";
import Sabzi from "./selectedDetail/SelectDatail_sabzi";
import Sos from "./selectedDetail/SelectDatail_sos";

function SelectDatail({ num }) {
  const items = [Ghosht, Sabzi, Panir, Noon, Sos];
  return (
    <div className=" si-box si-box-mg border-0 rounded-pill">
      <CSSTransition
        in={num === 0}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        {items[0]}
      </CSSTransition>
      <CSSTransition
        in={num === 1}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        {items[1]}
      </CSSTransition>
      <CSSTransition
        in={num === 2}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        {items[2]}
      </CSSTransition>
      <CSSTransition
        in={num === 3}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        {items[3]}
      </CSSTransition>
      <CSSTransition
        in={num === 4}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        {items[4]}
      </CSSTransition>
    </div>
  );
}

export default SelectDatail;
