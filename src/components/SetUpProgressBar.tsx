import React from "react";

//         <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:15px;}</style>

interface props {
  step: number;
}

export default function SetUpProgressBar(props: props) {
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1533.67 126.47"
          style={{
            width: "30em",
            maxWidth: "90%",
            margin: "auto",
            position: "absolute",
            left: 0,
            right: 0,
            top: 10,
          }}
        >
          <defs></defs>
          <path
            className="cls-1"
            d="M346.63,24.93,235.16,136.4H68.4a55.74,55.74,0,0,1,0-111.47Z"
            transform="translate(-5.17 -17.43)"
            fill={props.step > 0 ? "#4ade80" : "#fff"}
            strokeWidth={20}
          />
          <polygon
            className="cls-1"
            points="747.33 7.5 635.86 118.97 277.02 118.97 388.49 7.5 747.33 7.5"
            fill={
              props.step === 1 ? "#fff" : props.step > 1 ? "#4ade80" : "#000"
            }
          />
          <polygon
            className="cls-1"
            points="1247.94 7.5 1136.47 118.97 686.36 118.97 797.83 7.5 1247.94 7.5"
            fill={
              props.step === 2 ? "#fff" : props.step > 2 ? "#4ade80" : "#000"
            }
          />
          <path
            className="cls-1"
            d="M1531.33,80.67a55.74,55.74,0,0,1-55.73,55.73H1197.37L1308.84,24.93H1475.6A55.74,55.74,0,0,1,1531.33,80.67Z"
            transform="translate(-5.17 -17.43)"
            fill={
              props.step === 3 ? "#fff" : props.step > 3 ? "#4ade80" : "#000"
            }
          />
        </svg>
      </div>
    </>
  );
}
