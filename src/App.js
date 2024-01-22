import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import MyCards from "./Cards";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          width: "80%",
          margin: "20px auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Navbar bg="primary" style={{ height: "80px" }}>
          <Container>
            <Navbar.Brand
              href="#home"
              style={{
                marginLeft: "auto",
                marginRight: "3.2rem",
                color: "white",
              }}
            >
              Navbar
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                style={{ marginRight: "3rem", color: "white" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#features"
                style={{ marginRight: "3rem", color: "white" }}
              >
                Features
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                style={{ marginRight: "3rem", color: "white" }}
              >
                Pricing
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div style={{ backgroundColor: "black" }}>
          <MyCards />
        </div>
      </div>
    </>
  );
}

export default App;
