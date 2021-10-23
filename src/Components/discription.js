import React, { Component } from "react";
import Fade from "react-reveal";
import Contact from "./Contact";
class Descrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: false,
    };
  }

  emailFlag = () => {
    this.setState({ email: !this.state.email });
  };
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home" className="secondPage">
        <div className="row banner">
          <div className="banner-text descrip">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social"></ul>
            </Fade>
          </div>
        </div>
      </header>
    );
  }
}

export default Descrip;
