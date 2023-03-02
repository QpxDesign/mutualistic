import React from "react";

export default function Home() {
  if (
    localStorage.getItem("finishedSignup") === null ||
    eval(localStorage.getItem("finishedSignup") ?? "false") === false
  ) {
    window.location.pathname = "/welcome";
    return null;
  } else return <div>Home</div>;
}
