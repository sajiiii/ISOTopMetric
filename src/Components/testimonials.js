import React, { Component } from "react";
import Fade from "react-reveal";

class OurTeam extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="testimonial">
        <div className="testimonialBox">
          <Fade bottom>
            <h5>FEEDBACKS</h5>
            <h1>People Say Nicest Thing</h1>
            <hr></hr>
          </Fade>

        </div>
      </section>
    );
  }
}

export default OurTeam;
