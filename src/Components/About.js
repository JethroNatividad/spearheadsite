import React from "react";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/teddy.jpg";
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Sonny's Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>Hi, my name is Teddy. I am a family man, a preacher and a  teacher.</p>
          <p>Katulad mo, meron din akong mga pangarap. Pangarap para sa kinabukasan ng aking pamilya.

            Dahil sa pagnanais na gumanda ang aking financial status, sumubok ako ng networking, direct selling, pagiging agent ng insurance, pagbebenta ng libro , pagbebenta ng memorial plans at marami pang iba.
            <br />
            <br />



            Ang mga pinasukan kong racket ay talagang maganda. Kaya lang kinakailangan mong kumilos araw-araw,lakad araw-araw at maghanap ng customer dahil pag walang benta, wala ding pera.

            Wala akong choice kahit ulan at napaka init ng araw, kelangan kumilos para sa pamilya.</p>

        </div>
      </div>
    </section>
  );
};

export default About;
