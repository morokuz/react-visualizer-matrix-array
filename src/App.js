import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [initialRows, initialCols] = [4, 4]
  const maxRowCol = 20

  const [size, setSize] = useState([initialRows, initialCols]);
  const [indexActive, setIndexActive] = useState(null);

  const changeSize = (e) => {
    let newSize = e.target.value <= maxRowCol ? e.target.value : maxRowCol;
    e.target.id === "rows" ? setSize([newSize, size[1]]) : setSize([size[0], newSize]);
  }

  return (
    <div className="container">
      <h1 className="title">Matrix - Array</h1>

      <InputSize changeSize={changeSize} rowSize={size[0]} colSize={size[1]} />

      <MatrixVisualizer rows={size[0]} cols={size[1]} indexActive={indexActive} setIndexActive={setIndexActive} />
      <ArrayVisualizer size={size[0] * size[1]} indexActive={indexActive} setIndexActive={setIndexActive} />
    </div>
  );
}

function InputSize(props) {
  return (
    <div className="inputSizeContainer">
      <input onChange={props.changeSize} type="text" id="rows" value={props.rowSize} className="input-size" />
      <span className="inputMultiplicationChar"> × </span>
      <input onChange={props.changeSize} type="text" id="cols" value={props.colSize} className="input-size" />
    </div>
  )
}

function MatrixVisualizer(props) {
  return (
    <div className="matrix-container">
      {generateArrayOfTrues(props.rows).map((_, index_row) => (
        <div className="matrix-row" key={index_row}>
          {generateArrayOfTrues(props.cols).map((_, index_col) => <div key={index_col} className={index_row * props.cols + index_col === props.indexActive ? "matrix-cell on" : "matrix-cell off"} onClick={() => props.setIndexActive(index_row * props.cols + index_col)}></div>)}
        </div>
      ))}
    </div>
  )
}

function ArrayVisualizer(props) {
  return (
    <div className="array-container">
      {generateArrayOfTrues(props.size).map((_, index) => <div key={index} className={index === props.indexActive ? "array-cell on" : "array-cell off"} onClick={() => props.setIndexActive(index)}></div>)}
    </div>
  )
}

function generateArrayOfTrues(size) {
  let array = [];
  for (let i = 0; i < size; i++) array.push(true);
  return array;
}
