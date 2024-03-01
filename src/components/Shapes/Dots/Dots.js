// import Image from "next/image";
// import React from "react";

// function StepsDots({ width, height, color, type }) {
//   let radius;
//   switch (type) {
//     case "thin":
//       radius = 8;
//       break;
//     case "small":
//       radius = 10;
//       break;
//     case "regular":
//       radius = 13.732;
//       break;
//     default:
//       break;
//   }
//   const defaultWeight = 8;
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={width}
//       height={height}
//       viewBox="16.323 16.525 466.905 466.905"
//     >
//       <g transform="translate(-11.142 -10.94)">
//         <title>{"Dots"}</title>
//         <circle
//           cx={41.198}
//           cy={41.198}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={41.198}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={41.198}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={41.198}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={41.198}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={41.197}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={41.197}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={41.197}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={41.197}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.197}
//           cy={96.128}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.126}
//           cy={96.128}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.056}
//           cy={96.128}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.986}
//           cy={96.128}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.916}
//           cy={96.128}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.846}
//           cy={96.127}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.776}
//           cy={96.127}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.706}
//           cy={96.127}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.637}
//           cy={96.127}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.197}
//           cy={151.058}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.126}
//           cy={151.058}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.056}
//           cy={151.058}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.986}
//           cy={151.058}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.916}
//           cy={151.058}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.846}
//           cy={151.057}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.776}
//           cy={151.057}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.706}
//           cy={151.057}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.637}
//           cy={151.057}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={205.988}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={205.988}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={205.988}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={205.988}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={205.988}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={205.987}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={205.987}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={205.987}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={205.987}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={260.918}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={260.918}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={260.918}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={260.918}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={260.918}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={260.917}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={260.917}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={260.917}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={260.917}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={315.848}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={315.848}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={315.848}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={315.848}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={315.848}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={315.847}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={315.847}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={315.847}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={315.847}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={370.778}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={370.778}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={370.778}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={370.778}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={370.778}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={370.777}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={370.777}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={370.777}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={370.777}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={425.708}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={425.708}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={425.708}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={425.708}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={425.708}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={425.707}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={425.707}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={425.707}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={425.707}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={41.198}
//           cy={480.638}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={96.127}
//           cy={480.638}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={151.057}
//           cy={480.638}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={205.987}
//           cy={480.638}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={260.917}
//           cy={480.638}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={315.847}
//           cy={480.637}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={370.777}
//           cy={480.637}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={425.707}
//           cy={480.637}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//         <circle
//           cx={480.638}
//           cy={480.637}
//           r={8}
//           style={{
//             paintOrder: "stroke",
//             fill: color,
//           }}
//         />
//       </g>
//     </svg>
//   );
// }

// export default StepsDots;

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
