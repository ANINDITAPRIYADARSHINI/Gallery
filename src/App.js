import React from 'react';
import './style.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      <Header />
      <section>{cards}</section>
    </div>
  );
}
