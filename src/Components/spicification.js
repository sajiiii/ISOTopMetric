import React, { Component } from "react";
import Fade from "react-reveal";

class Specification extends Component {
  loopName() {
    return this.props.data.Specification.map((element, i) => {
      return (
          
        <div className="three columns main-col blocks">
          <h1>
            {element.number}
          </h1>
          <h4>{element.name} </h4>
        </div>
    );
    });
  }
  render() {
    if (!this.props.data) return null;

    return (
      <section id="specification">
        <Fade duration={1000}>
          <div className=" specificationBox">
            
            {this.loopName()}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Specification;
