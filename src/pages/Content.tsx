import React, { useState, useEffect } from "react";
import topics from "../assets/topics.json";
import leanings from "../assets/leaning.json";
import { BsArrowRight } from "react-icons/bs";
import SetUpProgressBar from "../components/SetUpProgressBar";

export default function Content() {
  const [selectedTopics, setSelectedTopics]: any = useState([]);
  const [leaningLevel, setLeaningLevel]: any = useState(0);

  function HandleTopicTagClick(item: any) {
    if (selectedTopics.filter((a: any) => a === item).length === 0) {
      setSelectedTopics([...selectedTopics, item]);
    } else {
      setSelectedTopics(selectedTopics.filter((a: any) => a !== item));
    }
    console.log(selectedTopics);
  }
  function getLeaningFromRange(range: any) {
    var ans = "error";
    leanings.forEach((item, index) => {
      console.log(range);
      console.log(item);
      if (item.rangeMin <= range && item.rangeMax >= range) {
        ans = item.leaning;
      }
    });
    return ans;
  }
  if (
    localStorage.getItem("finishedSignup") !== null &&
    eval(localStorage.getItem("finishedSignup") ?? "false") === true
  ) {
    window.location.pathname = "/home";
    return null;
  } else
    return (
      <div>
        {" "}
        <SetUpProgressBar step={2} />
        <section className="fullscreen">
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
            {" "}
            <h1
              style={{ fontWeight: 600, fontSize: "2.5em", marginTop: ".5em" }}
            >
              Greetings, {localStorage.getItem("username")}!
            </h1>
            <h4>We'd like to know what kind of stories you dig</h4>
            <h4
              style={{
                fontWeight: "800",
                marginRight: "auto",
                marginBottom: ".5em",
                marginTop: ".5em",
              }}
            >
              Topics
            </h4>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                width: "100%",
                gridGap: "1em 1em",
                flexWrap: "wrap",
              }}
            >
              {topics.map((item: any, index: any) => {
                return (
                  <div
                    key={index}
                    style={{
                      fontSize: "1.33em",
                      whiteSpace: "nowrap",
                      background: "#fff",
                      padding: ".124em .75em",
                      borderRadius: "100em",
                      transition: ".2s",
                      cursor: "pointer",
                    }}
                    className={
                      selectedTopics.filter((a: any) => a === item).length === 0
                        ? "tag"
                        : "tag active"
                    }
                    onClick={() => HandleTopicTagClick(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <h4
              style={{
                fontWeight: "800",
                marginRight: "auto",
                marginTop: "1em",
              }}
            >
              Political Leanings
            </h4>
            <h3
              style={{
                marginRight: "auto",
                fontSize: "1.25em",
                marginBottom: ".5em",
              }}
            >
              We'll try to show you content that contradicts your viewpoints to
              make you think critically about your stances.
            </h3>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "90%", position: "relative" }}>
                <label
                  style={{
                    fontSize: "1.25em",
                    left: 0,
                  }}
                >
                  Left
                </label>
                <label
                  style={{
                    fontSize: "1.25em",
                    right: 0,
                    position: "absolute",
                  }}
                >
                  Right
                </label>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                onChange={(e) => setLeaningLevel(e.target.value)}
                value={leaningLevel}
                style={{ width: "90%", height: "2em", margin: "0 auto" }}
              ></input>
              <label
                style={{
                  fontSize: "1.25em",
                  margin: "0 auto",
                }}
              >
                Selected Leaning: {getLeaningFromRange(leaningLevel)}
              </label>
            </div>
            <h4
              style={{
                fontWeight: "800",
                marginRight: "auto",
                marginTop: "1em",
              }}
            >
              Location
            </h4>
            <h3
              style={{
                marginRight: "auto",
                fontSize: "1.25em",
                marginBottom: ".5em",
              }}
            >
              We'll use this to show you content relevant to your locale, and to
              show you news from local High Schools and Colleges.
            </h3>
            <input
              placeholder="Washington, DC or 200016"
              style={{
                padding: ".25em .4em",
                fontSize: "1.25em",
                fontFamily: "Source Serif Pro",
                marginRight: "auto",
                border: "none",
              }}
            />
            <div
              className="h-stack button"
              role="link"
              onClick={() => {
                window.location.pathname = "/finish";
              }}
              style={{
                fontSize: "2em",
                fontFamily: "Source Serif Pro",
                gap: ".25em",
                border: "4px solid black",
                padding: "0 1em",
                borderRadius: "1em",
                transition: ".2s",
                cursor: "pointer",
                marginLeft: "auto",
                marginTop: "2em",
                marginBottom: "1em",
              }}
            >
              <h3>Next</h3>
              <BsArrowRight />
            </div>
          </div>
        </section>
      </div>
    );
}
