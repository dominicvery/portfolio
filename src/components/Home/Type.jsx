import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Manager",
          "Software Engineer",
          "Freelance web developer",
        ],
        autoStart: true,
        loop: true,
        typeSpeed:50,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;