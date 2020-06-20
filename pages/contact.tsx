import React from "react";
import Layout from "../src/components/layout/layout";
import { NextPage } from "next";

const initalPayload = {
  title: "Lets Work",
};

const ContactPage: NextPage = () => {
  return (
    <Layout payload={initalPayload} headerTitle="Contact">
      <div className="Contact">
        <div className="Contact-Container">
          <div className="Title">
            <h1>Let's help the world see your vision</h1>
          </div>
          <div className="Contact-Pitch">
            <p>
              You're just a couple of steps away from making your brand grow &
              reach the audience it needs to.
            </p>
          </div>
          {/*<script id="setmore_script" type="text/javascript" src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"></script><a id="Setmore_button_iframe" style={{ float: "none" }} href="https://my.setmore.com/bookingpage/2b6967d0-859e-42e3-a163-b3c8f403697a"><img border="none" src="https://my.setmore.com/webapp/images/bookappt/SetMore-book-button.png" alt="Book an appointment with Anthony Gayflor using SetMore" /></a> */}
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
