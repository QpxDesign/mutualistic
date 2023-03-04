import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import BigStories from "../components/BigStories";
import Story from "../components/Story";

export default function Home() {
  interface StoryObj {
    articleID: String;
    publisherID: String;
    title: String;
    link: string;
    articleImageSlug: String;
    publishDate: String;
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "https://content.guardianapis.com/search?from-date=2023-03-02&api-key=test"
    )
      .then((res) => res.json())
      .then((r: any) => {
        if (r.response.results !== undefined && r.response.results !== null) {
          setData(r.response.results);
          console.log(data);
        }
      });
  }, []);
  if (
    localStorage.getItem("finishedSignup") === null ||
    eval(localStorage.getItem("finishedSignup") ?? "false") === false
  ) {
    window.location.pathname = "/welcome";
    return null;
  } else
    return (
      <>
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data !== undefined &&
          data[0] !== undefined &&
          data[0]["webTitle"] !== undefined ? (
            <BigStories // Test Stories
              stories={[
                {
                  articleID: "Test",
                  publisherID: "guardian",
                  title: data[0]["webTitle"] || "",
                  link: data[0]["webUrl"] || "",
                  articleImageSlug: "blank",
                  publishDate: "today",
                },
                {
                  articleID: "Test",
                  publisherID: "guardian",
                  title: data[1]["webTitle"] || "",
                  link: data[1]["webUrl"] || "",
                  articleImageSlug: "blank",
                  publishDate: "today",
                },
                {
                  articleID: "Test",
                  publisherID: "guardian",
                  title: data[2]["webTitle"] || "",
                  link: data[2]["webUrl"] || "",
                  articleImageSlug: "blank",
                  publishDate: "today",
                },
              ]}
            />
          ) : (
            ""
          )}
        </div>
        <div className="stories-row">
          <div className="normalstory">
            <Story
              articleID={"undefined"}
              publisherID={"undefined"}
              title={"Why Mangos Are the Best Fruit in the World"}
              link={""}
              articleImageSlug={"undefined"}
              publishDate={"undefined"}
            />
          </div>
        </div>
      </>
    );
}
