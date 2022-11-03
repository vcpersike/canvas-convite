import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    const agents = [];

    for (let i = 0; i < 92; i++) {
      const x = Math.floor(Math.random() * 400) + 1;
      const y = Math.floor(Math.random() * 400) + 1;
      agents.push(new Agent(x, y));
    }
    agents.forEach((agent) => {
      agent.draw(ctx);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "silver";
    context.fillRect(0, 0, 2048, 2048)

    //Our draw come here
    draw(context);
  }, [draw]);

  return <canvas ref={canvasRef} {...props} style={canvasStyle} />;
};

export default Canvas;

const canvasStyle = {
  position: "absolute",
  width: "100%",
  heigth: "100%",
};

class Point {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.radius = Math.floor(Math.random() * 4) + 1;
  }

  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  update() {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

  draw(context) {
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 4;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  }
}
