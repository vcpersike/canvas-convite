import React, { useRef, useEffect } from "react";
import gif from "../assets/doc.mp4";
import som from "../assets/tango.mp3"

function Gifs() {
  return (
    <div>
      <video muted autoPlay style={{ borderRadius: "50%", marginTop: "16vh" }}>
        <source type="video/mp4" src={gif} />
      </video>
    </div>
  );
}

export default Gifs;
