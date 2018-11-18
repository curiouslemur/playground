function addCircle(svg, originCx, originCy, originR){
  var circle = svg.append("circle")
           .attr("cx", originCx)
           .attr("cy", originCy)
           .attr("r", originR)
           .attr("fill", "red")
  return circle;
}

function moveCircle(circle, direction){
  var cx = parseInt(circle.attr("cx"))
  var cy = parseInt(circle.attr("cy"))
  var cr = parseInt(circle.attr("r"))

  switch (direction) {
    case upRight:
      // while ((cx < w - cr) && (cy > cr)){
      setInterval( function(){
        if ((cx < w - cr) && (cy > cr)) {
          clearInterval();
        }
        cx = cx+1;
        cy = cy-1;
        circle.attr("cx",cx)
        circle.attr("cy", cy)
      }, 5)
      // }
      break;

    case downRight:
      while ((cx < w - cr) && (cy < h - cr)){
        cx = cx+1;
        cy = cy+1;
      }
      break;
    case upLeft:
      while ((cx > cr) && (cy > cr)){
        cx = cx-1;
        cy = cy-1;
      }
      break;
    case downLeft:
      while ((cx > cr) && (cy < h - cr)){
        cx = cx-1;
        cy = cy+1;
      }
      break;
  }
  return circle.transition()
       .duration(1000)
       .attr("cx", cx)
       .attr("cy", cy)
}

function switchDirection(circle, current){
  var cx = parseInt(c.attr("cx"))
  var cy = parseInt(c.attr("cy"))
  var cr = parseInt(c.attr("r"))
  switch (current) {
    case "upRight":
      if (cx == w - cr) {
        direction = upLeft;
      } else {
        direction = downRight;
      }
      return direction;
      break;
    case "downRight":
      if (cx == w - cr) {
        direction = downLeft;
      } else {
        direction = upRight;
      }
    return direction;
    break;case "upLeft":
      if (cx == cr) {
        direction = upRight;
      } else {
        direction = downLeft;
      }
    return direction;
    break;case "downLeft":
      if (cx == cr) {
        direction = downRight;
      } else {
        direction = upLeft;
      }
      return direction;
      break;
    default:
  }
}

step=1,
xStep=1,
yStep=1,

upRight="upRight",
downRight="downRight",
upLeft="upLeft",
downLeft="downLeft",
wind=window,
ABS=Math.abs,
