import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import MailLoader from "./MailLoader";
// import { toast } from "react-toastify";

const ContactForm = ({ setMsg }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState("");
  const [haveWebsite, sethaveWebsite] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (name && contact && email && service && budget && message !== "") {
      e.preventDefault();
      setLoading(true);
      console.log({
        name,
        contact,
        email,
        service,
        haveWebsite,
        budget,
        message,
      });

      const body = {
        name,
        contact,
        email,
        service,
        haveWebsite,
        budget,
        message,
      };

      await axios
        .post("https://backend/mail", body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          // alert("Email Sent Successfully");
          // toast.success("Email sent successfully! ");
          setMsg(true);
          setLoading(false);
          console.log(res);
          // window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          // toast.error("Email not sent!");
          setLoading(false);
        });
    } else {
      alert("Please fill all required filled!");
    }
  };

  // if (loading) {
  //   return <MailLoader />;
  // }

  return (
    <div className="container-fluid">
      <div className="container">
      {loading ? <MailLoader /> : 
        <div className="form-bg">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 p-5">
              <h1>Get in Touch</h1>
              <p>We love to hear from you. Our team is always here to chat.</p>
              <div className="d-flex mb-5">
                <FaEnvelope className="me-3 h3" />
                <div>
                  <h4>Email Us</h4>
                  <p>Our team is here to help you.</p>
                  <h6>info@digisurfaustralia.com.au</h6>
                </div>
              </div>
              <div className="d-flex mb-5">
                <FaMapMarkerAlt className="me-3 h3" />
                <div>
                  <h4>Office</h4>
                  <p className="mb-0">Come say hello at our office HQ.</p>
                  <h6 className="mb-0">Bondi Beach, Sydney</h6>
                </div>
              </div>
              <div className="d-flex mb-5">
                <FaPhoneAlt className="me-3 h3" />
                <div>
                  <h4>Phone</h4>
                  <p className="mb-0">Mon-Fri from 8am-6pm</p>
                  <a href="tel:+61 498 541 273">
                    <h6 className="mb-0 nav-link text-light">
                      +61 498 541 273
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
              <form
                onSubmit={handleSubmit}
                method="post"
                className="w-75 m-auto my-5 contact-form"
              >
                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label req-field">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id=""
                    className="form-control"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label req-field">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group mb-3">
                      <label htmlFor="" className="form-label req-field">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="" className="form-label">
                        Do you have a website?
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={haveWebsite}
                        onChange={(e) => sethaveWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group mb-3">
                      <label htmlFor="" className="form-label req-field">
                        Services
                      </label>
                      <select
                        name="services"
                        className="form-control"
                        required
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="" disabled defaultValue="" hidden>
                          Please Select
                        </option>
                        <option value="web">Web Development</option>
                        <option value="erp-crm">ERP/CRM Development</option>
                        <option value="graphic-design">
                          Graphic Designing
                        </option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="devops">DevOps</option>
                      </select>
                    </div>

                    <div className="form-group mb-3">
                      <label htmlFor="" className="form-label req-field">
                        Approximate Budget
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="" className="form-label req-field">
                    Your Message
                  </label>
                  <textarea
                    cols="30"
                    rows="3"
                    className="form-control"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn-white-border">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default ContactForm;
