import React, { Component } from "react";
import Fade from "react-reveal";

class OurExpertise extends Component {
  render() {
    if (!this.props.data) return null;
    const bio = this.props.data.bio;
    const subBio = this.props.data.subBio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="nine columns main-col">
              <h2>Our Expertise</h2>

              <p>{bio}</p>
              <p>{subBio}</p>
              <div className="row"></div>
            </div>
            <div className="three columns main-col">
              <h2>OUR SKILLS</h2>

              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                ISO Certification
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                CE Mark
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                HACCP
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                GDPR
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                HIPAA
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                CMMI
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                SOC 1 & SOC 2
              </p>
              <p className='skills'>
                <strong>
                  <b className="bold">.</b>{" "}
                </strong>
                SMETA
              </p>
             </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default OurExpertise;
