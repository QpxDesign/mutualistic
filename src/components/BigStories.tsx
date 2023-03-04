import React, { useState, useEffect } from "react";
import Story from "./Story";

interface props {
  stories: Array<StoryObj>;
}
interface StoryObj {
  articleID: String;
  publisherID: String;
  title: String;
  link: string;
  articleImageSlug: String;
  publishDate: String;
}

export default function BigStories(props: props) {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  return (
    <>
      <div className="bigstory" style={{ position: "relative" }}>
        <Story
          articleID={props.stories[activeStoryIndex].articleID}
          publisherID={props.stories[activeStoryIndex].publisherID}
          title={props.stories[activeStoryIndex].title}
          link={props.stories[activeStoryIndex].link}
          articleImageSlug={props.stories[activeStoryIndex].articleImageSlug}
          publishDate={props.stories[activeStoryIndex].publishDate}
        />
        ;
        <svg
          id="Layer_1"
          data-name="Layer 1"
          className="tri-icon right"
          style={{
            width: "5em",
            position: "absolute",
            left: "-6em",
            top: 0,
            bottom: 0,
            margin: "auto 0",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 886.17 1598.16"
          onClick={() => {
            if (activeStoryIndex == 0) {
              setActiveStoryIndex(props.stories.length - 1);
            } else if (activeStoryIndex == props.stories.length - 1) {
              setActiveStoryIndex(0);
            } else {
              setActiveStoryIndex(activeStoryIndex - 1);
            }
          }}
        >
          <polygon points="0 799.08 886.17 1598.16 886.17 0 0 799.08" />
        </svg>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          className="tri-icon left"
          style={{
            width: "5em",
            position: "absolute",
            right: "-6em",
            top: 0,
            bottom: 0,
            margin: "auto 0",
          }}
          aria-label="see next story"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 886.17 1598.16"
          onClick={() => {
            if (activeStoryIndex < props.stories.length - 1) {
              setActiveStoryIndex(activeStoryIndex + 1);
            } else {
              setActiveStoryIndex(0);
            }
          }}
        >
          <polygon points="886.17 799.08 0 0 0 1598.16 886.17 799.08" />
        </svg>
      </div>
    </>
  );
}
