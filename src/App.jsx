import React from "react";

import "./App.scss";

function App() {
  const title = "Info Site";
  const colors = ["yellow", "green", "orange", "blue"];

  return (
    <div className="App">
      <h1>{title}</h1>
      {colors.length > 0 && (
        <>
          <h2>Colors</h2>
          <ul>
            {colors.map((color, index) => {
              return <li key={index}>{color}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
