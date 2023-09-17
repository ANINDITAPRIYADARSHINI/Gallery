import React from "react";

export default function Card(props) {
  return (
    <main className="card--container">
      <div id="card">
        <img
          src={`../images/${props.item.coverImg}`}
          alt=""
          className="card--img"
        />
      </div>
      <div className="card--over">
        <h3 className="card--title">{props.item.title}</h3>
        <p className="card--detail">
          {props.item.description}
        </p>
        <li className="card--stack">
          {props.item.techStack1}
        </li>
        <li className="card--stack">
          {props.item.techStack2}
        </li>
        <li className="card--stack">
          {props.item.techStack3}
        </li>

        <br />

        <a
          href={props.item.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card--link"
        >
          See Live{" "}
        </a>
        <a
          href={props.item.gitUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card--link"
        >
          {" "}
          Github
        </a>
      </div>
    </main>
  );
}
