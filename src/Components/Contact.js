import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
let formData = {};
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (e) => {
    let prop = this.props;
    e.preventDefault(); // Prevents default refresh by the browser
    window.emailjs.send("service_4rhy07w", "template_9vohlof", formData).then(
      function (response) {
        prop.close();
        document.getElementById("contactForm").reset();
        alert("Thanks for Your Query...!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  Name = (e) => {
    formData.name = e.target.value;
  };
  // Number = (e) => {
  //   console.log(e.target.value)
  //   formData.number = e.target.value;
  // };
  email = (e) => {
    formData.to_email = e.target.value;
  };
  subject = (e) => {
    formData.subject = e.target.value;
  };
  message = (e) => {
    formData.message = e.target.value;
  };
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="ten columns">
              <h2 className="lead">{message}</h2>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.Name}
                    />
                  </div>
                  {/* <div>
                    <label htmlFor="contactNumber">
                      number <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactNumber"
                      name="contactNumber"
                      onChange={this.Number}
                    />
                  </div> */}
                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.email}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.subject}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      onChange={this.message}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={this.handleSubmit}>
                      Submit
                    </button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <div className="logo-icon">
                  <img src={"images/logo.png"} alt="doc"></img>
                </div>
                <div className="headDiv" >
                <strong className='HeaderAddress'>Address and Phone</strong>
                </div>
                <p className="address">
                  <a
                    class="link"
                    href="mailto: Info@topmetrictechnologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Info@topmetrictechnologies.com
                    <img
                      id="okapi-wasb-icon"
                      src="/images/gmail.png"
                      data-no-retina=""
                      alt="watsapp"
                      className="whatsapp-image"
                    />
                  </a>
                 
                   
                  <br />
                  <a
                    class="link"
                    href="tel:+919987998752"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +91 9987 9987 52
                  </a>
                  <a
                    href="https://wa.me/919987998752?text=Hello%2C+How+can+we+help+you%3F"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      id="okapi-wasb-icon"
                      src="/images/whatsapp.png"
                      data-no-retina=""
                      alt="watsapp"
                      className="whatsapp-image"
                    />
                  </a>
                  <br />
                 <strong className='HeaderName'> TopMetric Technologies</strong>
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
