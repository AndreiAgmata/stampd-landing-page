import React from "react";

const Dots = ({ width, height, size, color }) => {
  let circleRadius;
  let gap;

  switch (size) {
    case "small":
      circleRadius = 1;
      gap = 6.5 * circleRadius;
      break;
    case "medium":
      circleRadius = 3;
      gap = 4 * circleRadius;
      break;
    case "large":
      circleRadius = 6;
      gap = 2.5 * circleRadius;
      break;
    case "x-large":
      circleRadius = 5;
      gap = 4 * circleRadius;
      break;

    default:
      circleRadius = 6;
      gap = 2.5 * circleRadius;
      break;
  }

  const circles = [];

  const numCols = Math.floor(width / (2 * circleRadius + gap));
  const numRows = Math.floor(height / (2 * circleRadius + gap));

  const actualGapX = (width - numCols * 2 * circleRadius) / (numCols + 1);
  const actualGapY = (height - numRows * 2 * circleRadius) / (numRows + 1);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      circles.push(
        <circle
          key={`${i}-${j}`}
          cx={(2 * j + 1) * circleRadius + (j + 1) * actualGapX}
          cy={(2 * i + 1) * circleRadius + (i + 1) * actualGapY}
          r={circleRadius}
          style={{
            paintOrder: "stroke",
            fill: color || "black",
          }}
        />
      );
    }
  }

  return (
    <div style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {circles}
      </svg>
    </div>
  );
};

export default Dots;
