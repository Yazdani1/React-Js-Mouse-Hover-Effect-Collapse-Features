import React, { useState } from "react";
import "./App.css";
import DataItems from "./DataItems";

const App = () => {
  const data = [
    {
      title: "First Post",
      des: "It is a long established fact that a reader will of a page when looking at its layout.",
    },
    {
      title: "Second Post",
      des: "It is a long established fact that a reader will of a page when looking at its layout.",
    },
    {
      title: "Third Post",
      des: "It is a long established fact that a reader will of a page when looking at its layout.",
    },
    {
      title: "Fourth Post",
      des: "It is a long established fact that a reader will of a page when looking at its layout.",
    },
    {
      title: "Fith Post",
      des: "It is a long established fact that a reader will of a page when looking at its layout.",
    },
  ];

  return (
    <div className="container post-card">
      {data.map((item, index) => (
        <DataItems key={index} {...item} index={index} />
      ))}
    </div>
  );
};

export default App;
