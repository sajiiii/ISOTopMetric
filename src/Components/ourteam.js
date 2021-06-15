import React, { Component } from "react";
import Fade from "react-reveal";

class OurTeam extends Component {
  networks(element){
return  this.props.data.social.map(function (network,i) {
  return (
    <li key={network.name}>
      <a href={network.url+element.social[i]}>
        <i className={network.className}></i>
      </a>
    </li>
  );
});
 }
  loopName() {
    return this.props.data.team.map((element, i) => {
      return (
        <div className="four columns main-col blocks">
        <img
                className="profile-pic"
                src={"images/" + element.image+".jpg"}
                alt="Pic"
              />
              <h5>{element.name}</h5>
          <h6 >{element.designation}</h6>
          <p>{element.content}</p>
          <div>
              <ul className="social-links">{this.networks(element)}</ul></div>
        </div>
      );
    });
  }
  render() {
    if (!this.props.data) return null;

    return (
      <section id="team">
          <div className=" teamBox">
            <Fade bottom>
              <h5>OUR TEAM</h5>
              <h2 className="responsive-headline">Who We Are</h2>
              <hr></hr>
            </Fade>

            {this.loopName()}
          </div>
      </section>
    );
  }
}

export default OurTeam;
