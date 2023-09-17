import React from 'react';

export default function Header() {
  return (
    <header>
      <h2 className="header--title">Welcome to Gallery</h2>
      <p className="header--detail">
        Step into my world of projects and witness the creativity and innovation
        I bring to each one.
        <br />
        Each project is a unique piece of development.
      </p>
      <h3 className="header--stack">
        Tech Stack :
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>React</li>
        <li>Api</li>
      </h3>
      <p className="header--scroll">
        <i className="fa-solid fa-arrow-down-wide-short fa-beat fa-lg"></i>
      </p>
      <h4 className="header--learn">hover over to view & learn more....</h4>
    </header>
  );
}
