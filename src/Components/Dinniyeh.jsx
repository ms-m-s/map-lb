import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

export default function Dinniyeh() {
  let [village, setVillage] = useState("");
  let [area, setArea] = useState(0);
  let [population, setPopulation] = useState(0);
  let [males, setMales] = useState(0);
  let [females, setFemales] = useState(0);

  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const container = {
    display: "flex",
    overflow: "hidden",
  };

  let [left, setLeft] = useState({
    display: "none",
  });
  let [right, setRight] = useState({
    width: "100%",
  });

  const dimension = {
    transform: "scale(0.9)",
  };

  const dinniyeh = {
    opacity: 1,
    cursor: "pointer",
    strokeWidth: 1,
  };

  const bakhaoun = {
    fill: "rgb(72, 0, 0)",
    transform: " translate(-255%, -60%) scale(5)",
  };

  const elKharroub = {
    fill: "rgb(45, 45, 0)",
    transform: " translate(-165%, -10%) scale(3)",
  };

  const sir = {
    fill: "rgb(0, 67, 67)",
    transform: " translate(-145%, -5%) scale(3)",
  };

  const hakelElAzimeh = {
    fill: "rgb(150, 0, 150)",
    transform: " translate(-145%, 3%) scale(3)",
  };

  const txt = {
    fill: "white",
    fontWeight: "bold",
    fontSize: "22px",
  };

  const bakhaounClick = () => {
    setLeft({
      width: "30%",
      display: "inline-block",
      fontSize: "12px",
      marginTop: "20vh",
    });

    setRight({
      display: "inline-block",
    });

    setVillage("Bakhaoun");
    setArea(10.5);
    setPopulation(14275);
    setMales(7282);
    setFemales(6993);
  };

  const elKharroubClick = () => {
    setLeft({
      width: "30%",
      display: "inline-block",
      fontSize: "12px",
      marginTop: "20vh",
    });

    setRight({
      display: "inline-block",
    });

    setVillage("El Kharroub");
    setArea(4.3);
    setPopulation(8576);
    setMales(5142);
    setFemales(3434);
  };

  const sirClick = () => {
    setLeft({
      width: "30%",
      display: "inline-block",
      fontSize: "12px",
      marginTop: "20vh",
    });

    setRight({
      display: "inline-block",
    });

    setVillage("Sir");
    setArea(2.3);
    setPopulation(5674);
    setMales(2740);
    setFemales(2934);
  };

  const hakelElAzimehClick = () => {
    setLeft({
      width: "30%",
      display: "inline-block",
      fontSize: "12px",
      marginTop: "20vh",
    });

    setRight({
      display: "inline-block",
    });

    setVillage("Hakel El Azimeh");
    setArea(5.2);
    setPopulation(10528);
    setMales(6326);
    setFemales(4202);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Please select any village</h1>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb" style={center}>
          {/* <Link underline="hover" color="inherit" href="/">
            Lebanon
          </Link> */}
          <Link to="/">Lebanon</Link>
          {/* <Link underline="hover" color="inherit" href="/north2">
            North 2
          </Link> */}
          <Link to="/north2">North 2</Link>
          <Typography color="text.primary">Dinniyeh</Typography>
        </Breadcrumbs>
      </div>
      <div style={container}>
        <div style={left}>
          <h3>{village}</h3>
          <p>
            area: {area} km<sup>2</sup>
          </p>
          <p>population: {population}</p>
          <p>males: {males}</p>
          <p>females: {females}</p>
        </div>
        <div style={right}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            height="75vh"
            width="100%"
            viewBox="0 0 833 875"
            dir="ltr"
            style={dimension}
          >
            <g>
              <path
                id="72"
                d="M591.05,129.47 
              c-2.62,4.7-7.96,9.37-12.96,10.74 
              c-3.16,0.86-4.68,0-6.09,1.59 
              c-1.84,2.06-1.53,6.09-0.31,8.88 
              c1.36,3.14,3.27,3.38,3.28,5.55 
              c0.01,2.63-2.8,5.38-4.69,5.08 
              c-1.27-0.2-1.45-1.68-2.66-1.74  
              c-1.47-0.08-1.88,2.1-3.75,3.33 
              c-2.6,1.72-4.47-0.72-9.38-0.16 
              c-4.64,0.53-5.59,3.02-8.75,2.22 
              c-2.39-0.6-1.99-2.06-4.84-3.33  
              c-4.25-1.89-7.16,0.44-9.69-1.74 
              c-1.06-0.92-0.86-1.59-1.88-3.65 
              c-1.52-3.07-4.66-6.95-8.44-8.25 
              c-4.13-1.42-5.08,1.61-12.03,1.03  
              c-4.17-0.34-4.39-1.48-8.36-1.43 
              c-3.55,0.04-4.46,0.96-8.67,1.43 
              c-3.71,0.41-3.84-0.21-8.75-0.16 
              c-8.71,0.09-13.21,2.08-14.69-0.16  
              c-0.27-0.4-0.26-0.67-0.31-2.46 
              c0-0.08,0-0.15-0.01-0.23 
              c-1.73,0.05-3.53,0.47-4.68,1.78 
              c-2.34,2.65,0.08,6.56-2.11,8.8  
              c-2.9,2.97-10.34-0.61-11.13,1.19 
              c-0.55,1.25,2.88,3.27,2.23,5.24 
              c-0.55,1.65-3.41,1.53-3.63,2.97 
              c-0.19,1.21,1.74,1.67,2.23,3.33  
              c1.01,3.45-5.14,9.08-7.03,8.09 
              c-1.06-0.55-0.45-2.99-1.52-3.33 
              c-1.11-0.36-2.69,1.96-2.81,2.14 
              c-0.25,0.37-2,2.98-1.17,5.83  
              c0.76,2.64,2.89,2.55,3.52,5.12 
              c0.54,2.23-0.93,2.85-0.47,4.88 
              c0.61,2.69,3.39,2.49,6.33,5.95 
              c2.82,3.33,1.49,4.98,3.99,6.9  
              c2.91,2.25,5.06,0.26,7.85,2.74 
              c2.04,1.8,1.88,3.73,4.1,4.52 
              c1.51,0.54,2.41-0.06,3.52,0.83 
              c1.17,0.95,0.58,1.96,1.76,3.09  
              c1.34,1.28,2.71,0.59,3.63,1.9 
              c0.59,0.84,0.08,1.2,0.7,2.26 
              c0.82,1.4,1.9,1.14,2.7,2.5 
              c0.7,1.19,0.12,1.82,0.7,2.38  
              c1.25,1.22,4.21-1.46,5.98-0.36 
              c1.64,1.02,0.05,3.92,1.76,5.71 
              c2.01,2.11,5.51-0.54,8.79,1.78 
              c2.04,1.45,1.5,3.06,3.16,3.69  
              c2.47,0.94,4.11-2.46,9.38-4.28 
              c4.43-1.53,5.61,0.08,9.38-1.9 
              c1.19-0.62,4.01-2.11,5.27-5.12 
              c1.5-3.57,0.06-7.53,0.47-7.61  
              c0.39-0.08,1.1,3.69,2.11,3.69 
              c1.18,0,1.44-5.18,2.81-5.35 
              c0.57-0.07,1.41,0.73,2.66,3.86 
              c0.34-0.67,0.75-1.29,1.21-1.84  
              c1.91-2.26,3.98-2.24,4.57-4.52 
              c0.46-1.78-0.31-3.64,0.59-4.16 
              c0.44-0.26,0.74,0.14,1.29,0 
              c1.76-0.44,0.77-5.05,3.16-7.02  
              c1.37-1.12,2.1,0.05,4.69-1.19 
              c2.5-1.19,2.27-2.5,4.81-3.57 
              c2.07-0.88,3.08-0.37,3.87-1.43 
              c0.93-1.24-0.1-2.44,0.82-3.69  
              c1-1.36,2.62-0.49,3.87-1.9 
              c1.12-1.28,0.35-2.6,1.41-3.57 
              c1.09-0.99,2.38-0.02,4.1-0.36 
              c3.72-0.73,6.55-6.95,7.38-11.54  
              c0.5-2.74,0.26-4.74,1.88-6.07 
              c1.31-1.08,2.18-0.35,3.63-1.19 
              c1-0.58,2.27-1.9,3.75-12.02 
              c0.69-4.68,0.55-5.32,1.41-6.66  
              c1.59-2.5,3.5-2.52,4.45-5.12 
              c0.78-2.13-0.22-2.88,0.7-4.88 
              c0.97-2.11,2.54-2.27,3.75-3.81  
              C590.62,133.71,591.26,132.14,591.05,129.47z"
                style={{ ...dinniyeh, ...bakhaoun }}
                onClick={bakhaounClick}
              ></path>
              <text id="Bakhaoun" x="365" y="265" fill="white" style={txt}>
                Bakhaoun
              </text>
              <path
                id="45"
                d="M 591.05 129.47 c -4.17 -0.34 -4.39 -1.48 -8.36 -1.43 c -3.55 0.04 -4.46 0.96 -8.67 1.43 c -3.71 0.41 -3.84 -0.21 -8.75 -0.16 c -8.71 0.09 -13.21 2.08 -14.69 -0.16 c -0.27 -0.4 -0.26 -0.67 -0.31 -2.46 c 0 -0.08 0 -0.15 -0.01 -0.23 c -1.73 0.05 -3.53 0.47 -4.68 1.78 c -2.34 2.65 0.08 6.56 -2.11 8.8 c -2.9 2.97 -10.34 -0.61 -11.13 1.19 c -0.55 1.25 2.88 3.27 2.23 5.24 c -0.55 1.65 -3.41 1.53 -3.63 2.97 c -0.19 1.21 1.74 1.67 2.23 3.33 c 1.01 3.45 -5.14 9.08 -7.03 8.09 c -1.06 -0.55 -0.45 -2.99 -1.52 -3.33 c -1.11 -0.36 -2.69 1.96 -2.81 2.14 c -0.25 0.37 -2 2.98 -1.17 5.83 c 0.76 2.64 2.89 2.55 3.52 5.12 c 0.54 2.23 -0.93 2.85 -0.47 4.88 c 0.61 2.69 3.39 2.49 6.33 5.95 c 2.82 3.33 1.49 4.98 3.99 6.9 c 2.91 2.25 5.06 0.26 36.18 -17.9 c 2.04 1.45 1.5 3.06 3.16 3.69 c 3.72 -0.73 6.55 -6.95 7.38 -11.54 c 0.5 -2.74 0.26 -4.74 1.88 -6.07 c 1.31 -1.08 2.18 -0.35 3.63 -1.19 c 1 -0.58 2.27 -1.9 3.75 -12.02 c 0.69 -4.68 0.55 -5.32 1.41 -6.66 c 1.59 -2.5 3.5 -2.52 4.45 -5.12 z"
                style={{ ...dinniyeh, ...elKharroub }}
                onClick={elKharroubClick}
              ></path>
              <text id="ElKharroub" x="240" y="375" fill="white" style={txt}>
                El Kharroub
              </text>
              <path
                id="67"
                d="M 591.05 129.47 c -4.17 -0.34 -4.39 -1.48 -8.36 -1.43 c -3.55 0.04 -4.46 0.96 -8.67 1.43 c -3.71 0.41 -3.84 -0.21 -8.75 -0.16 c -8.71 0.09 -13.21 2.08 -14.69 -0.16 c -0.55 1.65 -3.41 1.53 -3.63 2.97 c -0.19 1.21 1.74 1.67 2.23 3.33 c 1.01 3.45 -5.14 9.08 -7.03 8.09 c 0.76 2.64 2.89 2.55 3.52 5.12 c 0.61 2.69 3.39 2.49 6.33 5.95 c 2.82 3.33 1.49 4.98 3.99 6.9 c 2.91 2.25 5.06 0.26 36.18 -17.9 c 0.5 -2.74 0.26 -4.74 1.88 -6.07 c 1.31 -1.08 2.18 -0.35 3.63 -1.19 z"
                style={{ ...dinniyeh, ...sir }}
                onClick={sirClick}
              ></path>
              <text id="Sir" x="485" y="390" fill="white" style={txt}>
                Sir
              </text>
              <path
                id="150"
                d="M 591.05 129.47 c -2.62 4.7 -7.96 9.37 -12.96 10.74 c -3.16 0.86 -4.68 0 -6.09 1.59 c -1.84 2.06 -1.53 6.09 -0.31 8.88 c 1.36 3.14 3.27 3.38 3.28 5.55 c 0.01 2.63 -2.8 5.38 -4.69 5.08 c -1.27 -0.2 -1.45 -1.68 -2.66 -1.74 c -1.47 -0.08 -1.88 2.1 -3.75 3.33 c -2.6 1.72 -4.47 -0.72 -9.38 -0.16 c -4.64 0.53 -5.59 3.02 -8.75 2.22 c -2.39 -0.6 -1.99 -2.06 -4.84 -3.33 c -4.25 -1.89 -7.16 0.44 -9.69 -1.74 c -1.06 -0.92 -0.86 -1.59 -1.88 -3.65 c -1.52 -3.07 -4.66 -6.95 -8.44 -8.25 c -4.13 -1.42 -5.08 1.61 -12.03 1.03 c -4.17 -0.34 -4.39 -1.48 -8.36 -1.43 c -3.55 0.04 -4.46 0.96 -8.67 1.43 c -0.27 -0.4 -0.26 -0.67 -0.31 -2.46 c 0 -0.08 0 -0.15 -0.01 -0.23 c -1.73 0.05 -3.53 0.47 -4.68 1.78 c -2.9 2.97 -10.34 -0.61 -11.13 1.19 c 1.01 3.45 -5.14 9.08 -7.03 8.09 c 0.76 2.64 2.89 2.55 3.52 5.12 c 2.82 3.33 1.49 4.98 3.99 6.9 c 2.91 2.25 5.06 0.26 7.85 2.74 c 2.04 1.8 1.88 3.73 4.1 4.52 c 1.51 0.54 2.41 -0.06 3.52 0.83 c 1.17 0.95 0.58 1.96 1.76 3.09 c 1.34 1.28 2.71 0.59 3.63 1.9 c 0.59 0.84 0.08 1.2 0.7 2.26 c 0.82 1.4 1.9 1.14 2.7 2.5 c 0.7 1.19 0.12 1.82 0.7 2.38 c 1.25 1.22 4.21 -1.46 5.98 -0.36 c 1.64 1.02 0.05 3.92 1.76 5.71 c 2.01 2.11 5.51 -0.54 8.79 1.78 c 2.04 1.45 1.5 3.06 3.16 3.69 c 2.47 0.94 4.11 -2.46 9.38 -4.28 c 4.43 -1.53 5.61 0.08 9.38 -1.9 c 1.19 -0.62 4.01 -2.11 5.27 -5.12 c 1.5 -3.57 0.06 -7.53 0.47 -7.61 c 0.39 -0.08 1.1 3.69 2.11 3.69 c 1.18 0 1.44 -5.18 2.81 -5.35 c 0.57 -0.07 1.41 0.73 2.66 3.86 c 0.34 -0.67 0.75 -1.29 1.21 -1.84 c 1.91 -2.26 3.98 -2.24 4.57 -4.52 c 0.46 -1.78 -0.31 -3.64 0.59 -4.16 c 0.44 -0.26 0.74 0.14 1.29 0 c 1.76 -0.44 0.77 -5.05 3.16 -7.02 c 1.37 -1.12 2.1 0.05 4.69 -1.19 c 2.5 -1.19 2.27 -2.5 4.81 -3.57 c 2.07 -0.88 3.08 -0.37 3.87 -1.43 c 0.93 -1.24 -0.1 -2.44 0.82 -3.69 c 1 -1.36 2.62 -0.49 3.87 -1.9 c 1.12 -1.28 0.35 -2.6 1.41 -3.57 c 1.09 -0.99 2.38 -0.02 4.1 -0.36 c 3.72 -0.73 6.55 -6.95 7.38 -11.54 c 0.5 -2.74 0.26 -4.74 1.88 -6.07 c 1.31 -1.08 2.18 -0.35 3.63 -1.19 c 1 -0.58 2.27 -1.9 3.75 -12.02 c 0.69 -4.68 0.55 -5.32 1.41 -6.66 c 1.59 -2.5 3.5 -2.52 4.45 -5.12 c 0.78 -2.13 -0.22 -2.88 0.7 -4.88 C 590.62 133.71 591.26 132.14 591.05 129.47 z"
                style={{ ...dinniyeh, ...hakelElAzimeh }}
                onClick={hakelElAzimehClick}
              ></path>
              <text id="HakelElAzimeh" x="280" y="550" fill="white" style={txt}>
                Hakel El Azimeh
              </text>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
