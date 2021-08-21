import React, { Component } from "react";
import Fade from "react-reveal";
import Contact from "./Contact";
class Header extends Component {
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
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="dropdown current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
              <div class="dropdown-content-home">
                <li>
                  <a className="smoothscroll" href="#specification">
                    Insight
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#benefits">
                    Certification Benefits
                  </a>
                </li>
              </div>
            </li>
            <li>
              <a className="smoothscroll" href="#ourexpertise">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#consulting">
                Consulting Service
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#service">
                Our Services
              </a>
            </li>
            <li>
              <div className="dropdown">
                <span>consulting Process</span>
                <div class="dropdown-content">
                  <p>GAP ANALYSIS</p>
                  <p>Awarness Training</p>
                  <p>Documentation Support</p>
                  <p>Internal Audit Training</p>
                  <p>Internal Audit</p>
                  <p>Exnternal Audit</p>
                </div>
              </div>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
       
        <div className="float-icon"  onClick={(e) => {
              this.emailFlag();
            }}>
          <img
            src={"images/email.png"}
            alt="doc"
           
          ></img>
        </div>
        {this.state.email &&<div className="mail">
          <Contact data={this.props.data} close={()=> this.emailFlag()}/>
        </div>}
        <div className="row banner">
          <div className="banner-text">
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

        <p className="scrolldown">
          <a className="smoothscroll" href="#ourexpertise">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
