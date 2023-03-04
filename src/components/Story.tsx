import React, { useState, useEffect } from "react";

interface StoryObj {
  articleID: String;
  publisherID: String;
  title: String;
  link: string;
  articleImageSlug: String;
  publishDate: String;
}

export default function Story(props: StoryObj) {
  const [imagePath, setImagePath] = useState("");
  const [imageAttribution, setimageAttribution] = useState("");
  const [imageAltText, setImageAltText] = useState("");
  console.log(props);
  function getImageFromKeywords() {
    fetch(`https://api.unsplash.com/search/photos?query=${props.title}`, {
      headers: new Headers({
        Authorization: "Client-ID 9QuZBK7ve8VLUvtBEq4EvXMBXF43BHQi0N8MlOu4gSE",
      }),
    })
      .then((r) => r.json())
      .then((r2) => {
        setimageAttribution(
          `<h5>Photo by <a href="${r2.results[0].user.links.self}">${r2.results[0].user.username}</a> / <a href="https://unsplash.com">Unsplash</a></h5>`
        );
        setImagePath(r2.results[0].urls.full);
        setImageAltText(r2.results[0].alt_description);
      });
  }
  useEffect(() => {
    getImageFromKeywords();
  }, [props]);

  return (
    <>
      <img
        src={imagePath}
        alt={imageAltText}
        style={{
          flex: 1,
          width: "100%",
          objectFit: "cover",
          maxHeight: "100%",
          maxWidth: "100%",
          borderRadius: "1em 1em 0 0 ",
        }}
      />
      <a href={props.link} target="_blank">
        <h1
          style={{
            fontSize: "2.25em",
            textAlign: "center",
            background: "#f1f5f9",
            borderRadius: "0 0 1em 1em",
            padding: "0.1em .5em",
            paddingBottom: ".5em",
          }}
        >
          {props.title}
        </h1>
      </a>
      <div
        dangerouslySetInnerHTML={{ __html: imageAttribution }}
        style={{
          position: "absolute",
          background: "black",
          color: "white",
          padding: ".25em",
          fontSize: "1.25em",
          fontWeight: "000",
          left: 20,
        }}
      ></div>
    </>
  );
}
