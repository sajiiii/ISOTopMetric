import React, { Component } from "react";
// import Fade from "react-reveal";

class Consulting extends Component {
  render() {
    if (!this.props.data) return null;
    const consulting = this.props.data.consulting;
    const subConsulting = this.props.data.subConsulting;
    const Training = this.props.data.training;
    const Documentation = this.props.data.Documentation;
    const Support = this.props.data.Support;
    const Guaranteed = this.props.data.Guaranteed;

    return (
      <section id="consulting">
        <div className="row">
          <div className="six columns main-col pad consult-width">
            <h2>Consulting Services</h2>

            <p>{consulting}</p>
            <p>{subConsulting}</p>
          </div>
          <div className="six columns main-col blockwidth">
            <div className="six columns main-col pop ">
              <div>
              <div className="block-div">
                  <img src={"images/computer.png"} alt="doc"></img>
                  <span className="content">Training</span>
                </div>
                <p className="textpage">{Training}</p>
              </div>
            </div>
            <div className="six columns main-col pop">
              <div>
                <div className="block-div">
                  <img src={"images/document.png"} alt="doc"></img>
                  <span className="content">Document</span>
                </div>
                <p className="textpage">{Documentation}</p>
              </div>
            </div>
            <div className="six columns main-col pop ">
              <div>
              <div className="block-div">
                  <img src={"images/headphones.png"} alt="doc"></img>
                  <span className="content">Support</span>
                </div>
                <p className="textpage">{Support}</p>
              </div>
            </div>
            <div className="six columns main-col pop">
              <div>
              <div className="block-div">
                  <img src={"images/support.png"} alt="doc"></img>
                  <span className="content">Guaranteed</span>
                </div>
                <p className="textpage">{Guaranteed}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Consulting;
