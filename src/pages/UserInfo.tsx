import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import SetUpProgressBar from "../components/SetUpProgressBar";

export default function UserInfo() {
  const [username, setUsername]: any = useState("");

  if (
    localStorage.getItem("finishedSignup") !== null &&
    eval(localStorage.getItem("finishedSignup") ?? "false") === true
  ) {
    window.location.pathname = "/home";
    return null;
  } else
    return (
      <section className="fullscreen">
        <SetUpProgressBar step={1} />
        <div
          className="full-center v-stack nudge-down"
          style={{ overflow: "hidden" }}
        >
          <h1
            style={{
              fontWeight: 600,
              lineHeight: ".85em",
              padding: "0 2rem",
            }}
          >
            <span
              className="medium"
              style={{
                fontFamily: "gastromond",
                fontSize: "4rem",
                textAlign: "center",
              }}
            >
              What's your name?
            </span>
          </h1>
          <div className="h-stack" style={{ marginTop: "1.5em" }}>
            <input
              className="large-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                background: "transparent",
                border: "5px solid black",
                borderRadius: "1em",
                fontSize: "2.25em",
                padding: ".25em",
                paddingLeft: ".5em",
                color: "black",
                fontFamily: "Source Serif Pro",
                maxWidth: "90%",
              }}
            />
            <BsArrowRight
              style={{
                fontSize: "3em",
                marginLeft: ".25em",
                cursor: "pointer",
                transition: ".3s",
              }}
              className={username.length >= 2 ? "button" : "invisible button"}
              role="link"
              onClick={() => {
                localStorage.setItem("username", username);
                window.location.pathname = "/content";
              }}
            />
          </div>
        </div>
      </section>
    );
}
