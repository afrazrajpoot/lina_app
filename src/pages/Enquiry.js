import React from "react";
import Layout from "../components/Layout/Layout";

const Enquiry = () => {
  return (
    <>
      <Layout>
        <section class="register-box">
          <div class="inner">
            <article class="left-side">
              <h1>Find out more about Lina</h1>
              <p>Please fill out the form & we will be in touch</p>
            </article>
            <article class="right-side">
              <div class="form">
                <aside id="search" class="form-block">
                  <article class="field">
                    <label>Full Name:</label>
                    <div>
                      <input class="error" placeholder="" type="text" />
                    </div>
                  </article>
                  <article class="field">
                    <label>Phone number:</label>
                    <div>
                      <input id="phone" name="phone" type="number" />
                    </div>
                  </article>
                  <article class="field">
                    <label>Email address:</label>
                    <div>
                      <input placeholder="" type="text" />
                    </div>
                  </article>
                  <article class="field">
                    <label>
                      General Enquiry:
                      <span class="sm">
                        Please include details of your enquiry
                      </span>
                    </label>
                    <div>
                      <textarea cols="1" rows="1"></textarea>
                    </div>
                  </article>
                  <article class="field checkbox one">
                    <label>
                      How did you hear about Lina?
                      <span>Please select any that apply</span>
                    </label>
                    <div class="error">
                      <label>
                        <input type="checkbox" />
                        <p>Word of mouth</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>X (formerly Twitter)</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Facebook</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Instagram</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>LinkedIn</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Search Engine</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Rightmove</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Work (discount market rent)</p>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>Other</p>
                      </label>
                    </div>
                  </article>
                  <article class="field checkbox two">
                    <label>
                      Are you a <br />
                      key worker?
                    </label>
                    <div>
                      <label>
                        <input type="checkbox" />
                        <p>Yes</p>
                      </label>
                      <label class="select">
                        <select>
                          <option>Please select from the list</option>
                        </select>
                      </label>
                      <label>
                        <input type="checkbox" />
                        <p>No</p>
                      </label>
                    </div>
                  </article>
                  <article class="field last">
                    <label>
                      <a href="#" class="btn">
                        ENQUIRE NOW
                      </a>
                    </label>
                    <div>
                      <span>
                        In processing your enquiry, we will share your details
                        with our agent partners, <br />
                        who will get in touch. For more information, please see
                        our <a href="#">Terms + Conditions</a>.
                      </span>
                    </div>
                  </article>

                  <div
                    id="loading"
                    class="loading-data"
                    style={{ display: "none" }}
                  >
                    <span id="loading-image" class="ld-icon" />
                  </div>
                  <div class="popupv" style={{ display: "none" }}>
                    <div class="shade"></div>
                    <div class="popupv-block">
                      <div class="popupv-block-detail">
                        <span class="icon-close close-p ir">Close</span>
                        <h2>Thank you</h2>
                        <p>Our team will get in touch with you soon.</p>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Enquiry;
