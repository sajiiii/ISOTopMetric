import React, { Component } from "react";
import Fade from "react-reveal";

class Service extends Component {
  loopName() {
    return this.props.data.standards.map((element, i) => {
      return (
          
        <div className="four columns main-col blocks">
          <h4>
            <a href="iso-9001-certification.html">{element.name}</a>
          </h4>
          <p>{element.tag} </p>
        </div>
    );
    });
  }
  render() {
    if (!this.props.data) return null;

    return (
      <section id="service">
        <Fade duration={1000}>
          <div className=" serviceBox">
            <Fade bottom>
              <h5>OUR SERVICES</h5>
              <h2 className="responsive-headline">
                <span>What We</span>Do Best
              </h2>
            </Fade>
            {this.loopName()}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Service;
