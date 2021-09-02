/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Why is technology so interesting? {" "}
                      </h1>
                      <p className="lead text-white">
                        The development of new technologies helps to save lives;
                        it improves work and makes the world better.
                        In reality, technology has played a very important role in how we live in the world
                        today and how we communicate in the atmosphere with everything around us.
                        Impact of technology is higher than that we expected

                        reasons to be excited about the future of technology:
                        Self-Driving Cars. ...
                        Clean Energy. ...
                        Virtual and Augmented Reality. ...
                        Drones and Flying Cars. ...
                        Artificial Intelligence. ...
                        Pocket Supercomputers for Everyone. ...
                        Cryptocurrencies and Blockchains. ...
                        High-Quality Online Education.
                      </p>

                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">

                          <h6 className="text-primary text-uppercase">
                            201 project
                          </h6>
                          <p className="description mt-3">
                            In our project, we created a webpage that sells photography equipment
                            (cameras, lenses, tripods ..etc).

                            The users can either buy packages , or buy seperated equipment.
                          </p>


                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">

                          <h6 className="text-success text-uppercase">
                            301 Project
                          </h6>
                          <p className="description mt-3">
                            301 Project description (in the future)
                          </p>


                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">

                          <h6 className="text-warning text-uppercase">
                            401 Project
                          </h6>
                          <p className="description mt-3">
                            401 Project description (in the future)

                          </p>

                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          <Download />
        </main>
   
      </>
    );
  }
}

export default Landing;
