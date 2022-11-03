import React, { useRef, useEffect } from 'react';


const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = ctx => {
    const pointA = new Point(40, 40, 10);
    const pointB = new Point(68, 60, 0.6);

    ctx.beginPath();
    ctx.arc(pointA.x, pointA.y, pointA.radius, 0, 2*Math.PI);
    ctx.fill();



    ctx.beginPath();
    ctx.arc(pointB.x, pointB.y, pointB.radius, 0, 2*Math.PI);
    ctx.fill();
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.fillStyle = 'blue'

    //Our draw come here
    draw(context)
  }, [draw])

  return <canvas ref={canvasRef} {...props} style={canvasStyle}/>
}

export default Canvas

const canvasStyle = {
    position: "absolute",
    width:"100%",
    heigth: "100%",
}

class Point {
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

    }
}
