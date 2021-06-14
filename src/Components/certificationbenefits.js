import React, { Component } from "react";
import Fade from "react-reveal";

class Benefits extends Component {
  loopName() {
    return this.props.data.Benefits.map((element, i) => {
      return (
          
        <div className="four columns main-col blocks">
        <h1 className={element.image}> </h1>
          <h1 >
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
      <section id="benefits">
        <Fade duration={1000}>
          <div className=" benefitsBox">
          <Fade bottom>
              <h5>CERTIFICATION BENEFITS</h5>
              <h2 className="responsive-headline">
                <span>Some Of </span>The Advantages
              </h2>
              <hr></hr>
            </Fade>
            
            {this.loopName()}
          </div>
        </Fade>
      </section>
    );
  }
}

export default Benefits;
