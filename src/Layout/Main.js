import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import RightSide from "../Shared/RightSide/RightSide";

const Main = () => {
  return (
    <div>
      <Header> </Header>
      <Container>
        <Row>
          <Col lg="2" className="d-none d-lg-block">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3" className="d-none d-lg-block">
            <RightSide></RightSide>{" "}
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
