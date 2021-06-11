import React, { Component } from "react";
import Fade from "react-reveal";

class Consulting extends Component {
  render() {
    if (!this.props.data) return null;
    const consulting = this.props.data.consulting;
    const subConsulting = this.props.data.subConsulting;
    const Training = this.props.data.training;
    const Documentation = this.props.data.Documentation;
    const Support = this.props.data.Support;
    const Guaranted = this.props.data.Guaranted;

    return (
      <section id="consulting">
        <Fade duration={1000}>
          <div className="row">
            <div className="six columns main-col pad">
              <h2>Consulting Services</h2>

              <p>{consulting}</p>
              <p>{subConsulting}</p>
            </div>
            <div className="six columns main-col">
            <div className="six columns main-col pop ">
        <div>
          <h2>Training</h2>
          <p className='textpage'>{Training}</p>
        </div>
            </div>
            <div className="six columns main-col pop">
            <div>
          <h2>Documentation</h2>
          <p className='textpage'>{Documentation}</p>
        </div>
            </div>
            <div className="six columns main-col pop ">
            <div>
          <h2>Support</h2>
          <p className='textpage'>{Support}</p>
        </div>
            </div>
            <div className="six columns main-col pop">
            <div>
          <h2>Guaranted</h2>
          <p className='textpage'>{Guaranted}</p>
        </div>
            </div>
             
             </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Consulting;
