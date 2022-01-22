import React from "react";

const Testimonials = ({ data }) => {


  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              <li>
                <blockquote>
                  <p>Hanggang ngayon, I am still working from home using my computer and I also taught my son the techniques my coach taught me. And by God’s grace, ang anak ko ay nakakuha din ng client from the US. He is earning 40,000 a month. Imagine, a Senior High student earning this much!</p>
                </blockquote>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
