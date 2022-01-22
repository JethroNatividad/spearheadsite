import React from "react";

const Portfolio = ({ data }) => {


  return (
    <section id="invitations">
      <div className="row" id="invitations">
        <div className="twelve columns collapsed">
          <h1>Heto ang ilan sa mga Interview Invitations sa akin ng mga foreign employers .</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <img src="images/i/i1.png" alt="1" />
            <img src="images/i/i2.png" alt="2" />
            <img src="images/i/i3.png" alt="3" />
            {/* <div style={{ width: '300px', height: '100px', background: 'black', display: 'inline-block' }}>h</div>
            <div style={{ width: '300px', height: '100px', background: 'black', display: 'inline-block' }}>h</div>
            <div style={{ width: '300px', height: '100px', background: 'black', display: 'inline-block' }}>h</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
