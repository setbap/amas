import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "reactstrap";
import Pizza from "./components/Pizza";
import SelectDatail from "./components/SelectDatail";
import MainContent from "./components/MainContent";
import LeftDettail from "./components/LeftDettail";
import { connect } from "react-redux";
function App(props) {
  const [selecteditem, setSelecteditem] = useState(3);

  const selector = num => {
    console.log(num);

    if (typeof num !== "number") {
      setSelecteditem(0);
    }
    if (num < 0) {
      setSelecteditem(4);
    } else if (num > 4) {
      setSelecteditem(0);
    } else {
      setSelecteditem(num);
    }
    return selecteditem;
  };

  // const increaseNum = () => {
  //   setSelecteditem(selecteditem + 1);
  //   return selecteditem;
  // };

  // const dencreaseNum = () => {
  //   setSelecteditem(selecteditem - 1);
  //   return selecteditem;
  // };

  return (
    <>
      <Row style={{ margin: 0 }}>
        <Col
          xs="3"
          style={{
            backgroundColor: "#2c2828",
            color: "#f5dbc7"
          }}
          className="d-flex flex-column align-items-center "
        >
          <div className="w-100 mg-right-32 full-page">
            <h3
              className="mg-top-16 text-right"
              style={{ marginBottom: "48px" }}
            >
              ‍پیتزای من
            </h3>
            <LeftDettail />
          </div>
        </Col>
        <Col
          xs="9"
          style={{
            backgroundColor: "#20201e",
            color: "#f5dbc7"
          }}
          className="d-flex flex-column align-items-center text-center"
        >
          <h3 className="mx-0 mg-top-16">
            {[props.name]} مورد نظر خود را انتخاب کنید
          </h3>
          <Pizza />
          <SelectDatail num={selecteditem} />
          <MainContent num={selecteditem} selector={selector} />
        </Col>
      </Row>
    </>
  );
}
const mapStateToProps = state => ({
  name: state.name
});

// in kar kamlan eshteahe baese render koli mishe vali hesesh nist khodaee dir shode
export default connect(
  mapStateToProps,
  {}
)(App);
