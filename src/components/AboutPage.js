import React from "react";
import image from "../images4.jpg";

function AboutPage() {
  return (
    <div style={{ paddingLeft: "147px" }}>
      <h1>
        About us:{" "}
        <img src={image} style={{ width: "260px", height: "130px" }} />
      </h1>
      <div
        className="bg-info text-white"
        style={{
          border: "transparent",
          width: "700px",
          backgroundColor: "#E6E6E6",
        }}
      >
        <p
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          In an effort to help educators and parents during school closures, a
          number of publishers or authors of books in the Novel Effect Library
          have relaxed restrictions for online readings and sharing. The
          majority of titles in the Novel Effect app now fall into this
          category.
          <br />
          Novel Effect is a voice-driven experience for the web or your mobile
          device that follows your voice and help bring stories to life. Read
          your favorite books and poems out loud and Novel Effect will play
          customized music and effects at just the right moment. Or be part of
          the story in our interactive videos and drive the action forward with
          your voice. Our patented speech recognition system keeps up with your
          personal reading style by following your pace and your voice
          –responding to you no matter how you read.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
