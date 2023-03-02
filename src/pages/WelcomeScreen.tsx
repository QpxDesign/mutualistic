import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import SetUpProgressBar from "../components/SetUpProgressBar";

export default function WelcomeScreen() {
  if (
    localStorage.getItem("finishedSignup") !== null &&
    eval(localStorage.getItem("finishedSignup") ?? "false") === true
  ) {
    window.location.pathname = "/home";
    return null;
  } else
    return (
      <section className="fullscreen">
        <SetUpProgressBar step={0} />
        <div
          className="full-center v-stack nudge-down"
          style={{ overflow: "hidden" }}
        >
          <h1
            style={{ fontWeight: 600, lineHeight: ".85em", padding: "0 2rem" }}
            className="big"
          >
            Welcome to{" "}
            <span style={{ fontFamily: "gastromond" }}>mutualistic!</span>
          </h1>
          <h3
            style={{
              padding: ".25em 2rem",
              paddingLeft: 0,
              marginLeft: "2rem",
            }}
          >
            Your one-stop-shop for nonprofit and for-people journalism.
          </h3>
          <button
            onClick={() => {
              window.location.pathname = "/get-started";
            }}
            role="link"
            style={{
              fontSize: "1.5em",
              marginTop: "3em",
              padding: ".25em 1.5em",
              border: "none",
              borderRadius: "100em",
              display: "flex",
              alignItems: "center",
              transition: ".2s",
              cursor: "pointer",
            }}
          >
            Start the Party! 🎉
            <BsArrowRight style={{ marginLeft: ".5em" }} />
          </button>
        </div>
      </section>
    );
}
