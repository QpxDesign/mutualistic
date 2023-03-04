import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import SetUpProgressBar from "../components/SetUpProgressBar";

export default function FinshSignup() {
  const [email, setEmail]: any = useState("");
  function isValidEmail(email: any) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  if (
    localStorage.getItem("finishedSignup") !== null &&
    eval(localStorage.getItem("finishedSignup") ?? "false") === true
  ) {
    window.location.pathname = "/home";
    return null;
  } else {
    return (
      <section className="fullscreen">
        <SetUpProgressBar step={3} />
        <div
          className="h-center v-stack nudge-down"
          style={{
            overflow: "hidden",
            maxWidth: "min(70em,90%)",
            margin: "0 auto",
            position: "relative",
            paddingTop: "3em",
          }}
        >
          <h1 style={{ fontWeight: 600, fontSize: "2.5em", marginTop: ".5em" }}>
            Email, Please.
          </h1>
          <h4 style={{ textAlign: "center" }}>
            We'd like your email so we can sync you across devices and so we can
            keep you updated. You don't have to give it to us!
          </h4>
          <div
            className="h-stack"
            style={{
              marginTop: "1.5em",
            }}
          >
            <input
              className="large-input"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              style={{
                background: "transparent",
                border: "5px solid black",
                borderRadius: "1em",
                fontSize: "1.75em",
                padding: ".25em",
                paddingLeft: ".5em",
                color: "black",
                fontFamily: "Source Serif Pro",
                maxWidth: "90%",
              }}
              placeholder="quinn@me.com"
            />
            <BsArrowRight
              style={{
                fontSize: "3em",
                marginLeft: ".25em",
                cursor: "pointer",
                transition: ".3s",
              }}
              className={isValidEmail(email) ? "button" : "invisible button"}
              role="link"
              onClick={() => {
                localStorage.setItem("email", email);
                localStorage.setItem("finishedSignup", "true");
                window.location.pathname = "/home";
              }}
            />
          </div>
          <h3
            onClick={() => {
              localStorage.setItem("email", "null");
              localStorage.setItem("finishedSignup", "true");
              window.location.pathname = "/home";
            }}
            style={{ marginTop: "1em", fontSize: "1.2em", cursor: "pointer" }}
            role="link"
          >
            Skip
          </h3>
        </div>
      </section>
    );
  }
}
