import React, { Component } from "react";
import Fade from "react-reveal";

class Infibanner extends Component {
 
  render() {
    if (!this.props.data) return null;
    return (
      <section id="infibanner">
        <Fade duration={1000}>
          <div className="infibannerBox">
            <img src="" alt="im"/>
            <img src="" alt="im"/>
            <img src="" alt="im"/>
            <img src="" alt="im"/>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Infibanner;
