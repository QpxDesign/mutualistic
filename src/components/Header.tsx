import React from "react";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "Flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="gradient"
    >
      <h1 style={{ fontSize: "3em", padding: "0 .25em" }}>
        <a href="/">
          <span style={{ fontFamily: "gastromond" }}>mutualistic</span>
        </a>
      </h1>
      <CgProfile style={{ fontSize: "2.5em", marginRight: "1.5em" }} />
    </header>
  );
}
