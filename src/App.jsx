import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Row, Col } from "reactstrap";
import Pizza from "./components/Pizza";
import SelectDatail from "./components/SelectDatail";
import MainContent from "./components/MainContent";
import LeftDettail from "./components/LeftDettail";

function App() {
  return (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">pizaae</NavbarBrand>
      </Navbar>
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
              {" "}
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
          <h3 className="mx-0 mg-top-16">چیز مورد نظر خود را انتخاب کنید</h3>
          <Pizza />
          <SelectDatail />
          <MainContent />
        </Col>
      </Row>
    </>
  );
}

export default App;
