import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
let formData={};
class Contact extends Component {
   handleSubmit=(e)=>  {
    e.preventDefault(); // Prevents default refresh by the browser
   window.emailjs.send('service_b6ed0lx', 'template_9vohlof', formData)
    .then(function(response) {
      // alert("Thanks for Your The Query...!");
      document.getElementById("contactForm").reset();
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {

      // alert("Thanks for Your The Query...!");
       console.log('FAILED...', error);
    });
    };
    Name=(e)=>{

     console.log(formData)
      formData.name=e.target.value;
    }
    email=(e)=>{

     console.log(formData)
      formData.to_email=e.target.value;
    }
    subject=(e)=>{

     console.log(formData)
      formData.subject=e.target.value;
    }
    message=(e)=>{

     console.log(formData)
      formData.message=e.target.value;
    }
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
              <form  id="contactForm" name="contactForm" >
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
                      name="contactMessage" onChange={this.message}
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit" onClick={this.handleSubmit}>Submit</button>
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
                <h4>Address and Phone</h4>
                <p className="address">
                Info@topmetrictechnologies.com
                <br/>
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  {/* <span>{phone}</span> */}
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
