import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";

export default function North2() {
  const navigate = useNavigate();

  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const container = {
    overflow: "hidden",
  };

  const dimension = {
    transform: "scale(0.9)",
  };

  const north2 = {
    opacity: 1,
    strokeOpacity: 1,
    cursor: "pointer",
    stroke: "white",
    strokeWidth: 1,
  };

  const tripoli = {
    fill: "rgb(47, 143, 47)",
    transform: " translate(-125%, -15%) scale(3)",
  };

  const miniyeh = {
    fill: "rgb(33, 106, 33)",
    transform: " translate(-125%, -15%) scale(3)",
  };

  const dinniyeh = {
    fill: "rgb(5, 72, 5)",
    transform: " translate(-125%, -15%) scale(3)",
  };

  const txt = {
    fill: "white",
    fontWeight: "bold",
    fontSize: "18px",
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Please select 'Dinniyeh' district</h1>
      <div role="presentation" style={center}>
        <Breadcrumbs aria-label="breadcrumb">
          {/* <Link underline="hover" color="inherit" href="/">
            Lebanon
          </Link> */}
          <Link to="/">Lebanon</Link>
          <Typography color="text.primary">North 2</Typography>
          {/* <Link underline="hover" color="inherit" href="/dinniyeh">
            Dinniyeh
          </Link> */}
          <Link to="/dinniyeh">Dinniyeh</Link>
        </Breadcrumbs>
      </div>
      <div style={container}>
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
              id="tripoli"
              style={{ ...tripoli, ...north2 }}
              d="M421.01,169.02c0.07-1.47-3-1.87-5.8-4.4c-2.26-2.04-4.42-5.53-3.46-7.56c0.62-1.3,1.95-0.78,3.28-2.26 c2.63-2.92,0.67-8.48,0.53-8.86c-0.66-1.8-1.67-3.14-2.6-4.11c-0.75,0.52-1.54,0.91-2.7,1.07c-2.99,0.41-3.71-1.33-6.79-1 c-3.92,0.42-5.02,3.47-7.56,2.78c-2.12-0.57-2.31-2.96-3.94-2.89c-1.76,0.07-3.58,2.94-2.96,4.5c0.43,1.07,1.62,0.6,2.71,1.84 c1.42,1.62,0.25,3.41,1.48,6.67c0.61,1.63,3.87,3.12,4.68,4.24c1.49-0.32,2.94-0.29,4.09,0.46c1.26,0.82,1.34,1.96,2.75,5.53 c2.22,5.63,3.68,9.32,6.04,9.7c2.28,0.37,3.76-2.62,5.63-1.78c0.17,0.07,0.32,0.17,0.46,0.29c1.28-1.08,2.34-2.05,3.17-2.85 C420.75,169.68,420.99,169.42,421.01,169.02z"
            ></path>
            <path
              id="tripoli"
              style={{ ...tripoli, ...north2 }}
              d="M382.67,179.08c0.58,1.16,0.75,2.11,1.48,2.3c1.21,0.32,2.27-1.87,4.61-4.28c3.92-4.05,6.68-3.82,7.11-5.95 c0.2-1-0.13-2.44-2.18-4.49c-1.58,1.4-3.19,2.68-4.09,3.67c-1.95,2.15-4.64,3.94-8.82,6.13 C381.69,177.38,382.27,178.28,382.67,179.08z"
            ></path>
            <text id="tripoli" x="142" y="325" style={txt}>
              Tripoli
            </text>
          </g>
          <path
            id="Miniyeh"
            d="M419.7,152.5c0.85-0.79-0.1-2.16,0.63-4.12c0.9-2.46,3.78-4.13,6.25-4.2 c1.9-0.06,2,0.88,4.92,1.74c2.78,0.82,7.82,1.49,9.69-0.87c0.8-1.02,0.62-2.09,1.56-2.46c0.96-0.37,2.33,0.3,3.05,1.27 c0.76,1.03,0.34,1.81,0.7,4.28c0.2,1.37,0.6,4.08,1.64,4.28c0.91,0.18,1.35-1.8,3.36-2.3c1.25-0.31,1.82,0.26,2.27-0.16 c1.19-1.11-2.02-5.81-1.09-6.58c0.56-0.46,1.87,1.14,4.84,1.59c1.06,0.16,2.2,0.33,3.28-0.16c2.12-0.96,3.39-4.16,2.97-6.82 c-0.66-4.18-5.37-6.33-4.69-7.61c0.41-0.78,2.17,0.01,3.44-1.27c1.05-1.06,0.65-2.41,1.41-2.78c0.39-0.19,1.02-0.08,2.1,0.79 c0.83-1.41,2.23-1.79,2.35-3.33c0.13-1.61-1.22-3.53-2.89-4.12c-2.94-1.05-5.71,2.4-7.19,1.27c-1.22-0.94,0.36-3.53-1.33-5.55 c-0.99-1.18-2.18-1.05-2.5-2.06c-0.22-0.68,0.09-1.46,0.62-2.2c-0.46,0-0.93,0.04-1.44,0.19c-2.07,0.61-3.1,2.38-4.27,4.12 c-1.6,2.36,0.43-1.11-11.5,12.46c-6.63,7.54-6.28,7.5-7.23,8.01c-5.38,2.88-8.68-0.09-14.35,3.45c-1.49,0.93-2.37,1.82-3.33,2.49 c0.93,0.97,1.94,2.31,2.6,4.11c0.11,0.29,1.26,3.55,0.66,6.39C417.65,152.89,419.01,153.15,419.7,152.5z"
            style={{ ...miniyeh, ...north2 }}
          ></path>
          <text id="Miniyeh" x="270" y="275" style={txt}>
            Miniyeh
          </text>
          <path
            id="Danniyeh"
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
            style={{ ...dinniyeh, ...north2 }}
            onClick={() => {
              navigate("/dinniyeh");
            }}
          ></path>
          <text id="Danniyeh" x="425" y="435" style={txt}>
            Dinniyeh
          </text>
        </svg>
      </div>
    </>
  );
}
