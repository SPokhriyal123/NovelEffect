import React from "react";
import logo1 from "../images1.jpg";
import logo2 from "../images2.jpg";
import logo3 from "../images3.jpg";
function HomePage() {
  return (
    <div style={{ marginTop: "10px", textAlign: "center" }}>
      <h5 style={{ textAlign: "center" }}>
        "Good friends, good novels, and a sleepy conscience: this is the ideal
        life"
      </h5>
      <p style={{ textAlign: "center" }}>
        A novel is a piece of long narrative in literary prose. Narrative prose
        is meant to entertain and tell a story. <br />
        It is a description of a chain of events which includes a cast of
        characters, a setting, and an ending.
      </p>
      <img
        src={logo1}
        style={{ width: "30%", paddingLeft: "135px", height: "30%" }}
      />
      <img
        src={logo2}
        style={{ width: "38%", paddingLeft: "10px", height: "38%" }}
      />
      <img
        src={logo3}
        style={{ width: "30%", paddingLeft: "10px", height: "30%" }}
      />
    </div>
  );
}

export default HomePage;
