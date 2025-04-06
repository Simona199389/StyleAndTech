import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_o7xpfno', 'template_8q47nrp', e.target, 'DtrZbpHW3D11C7uaN')
      .then((result) => {
        console.log(result.text);
        window.location.reload();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <>
      <h1 className="display-5 fw-bolder mb-2" style={{ textAlign: "center", margin: "48px" }}>Contact us</h1>
      <section className="mb-4">
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <br />

                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>
              <br />

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <br />

              <div className="text-center text-md-left">
                <button className="btn btn-primary" type="submit">Send</button>
              </div>
            </form>
            <div className="status"></div>
          </div>

          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Plovdiv, Bulgaria</p>
              </li>
              <li>
                <i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 359 89 404 3918</p>
              </li>
              <li>
                <i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>simona.simeonova6300@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

