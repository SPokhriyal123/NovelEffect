import React from "react";

function Footer() {
  return (
    <footer
      style={{
        paddingLeft: "150px",
        paddingRight: "20px",
        clear: "both",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
      }}
    >
      <h5
        style={{
          backgroundColor: "#FFCCCC",
          height: "85px",
          textAlign: "left",
        }}
      >
        <div style={{ marginTop: "25px", marginLeft: "10px" }}>
          © 2020 Novels Page All Rights Reserved
        </div>
      </h5>
    </footer>
  );
}
export default Footer;
