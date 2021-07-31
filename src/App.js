import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [size, setSize] = useState([3, 3]);
  const [indexActive, setIndexActive] = useState(null);

  const changeSize = (e) => {
    let newSize = e.target.value <= 100 ? e.target.value : 100;
    e.target.id === "rows" ? setSize([newSize, size[1]]) : setSize([size[0], newSize]);
  }

  return (
    <div className="container">
      <h1 className="title">Converter</h1>
      <input onChange={changeSize} type="text" id="rows" placeholder="Rows" />
      <input onChange={changeSize} type="text" id="cols" placeholder="Cols" />
      <MatrixVisualizer rows={size[0]} cols={size[1]} indexActive={indexActive} setIndexActive={setIndexActive} />
      <ArrayVisualizer size={size[0] * size[1]} indexActive={indexActive} setIndexActive={setIndexActive} />
    </div>
  );
}

function MatrixVisualizer(props) {
  return (
    <table>
      <tbody>
        {generateArrayOfTrues(props.rows).map((_, index_row) => (
          <tr key={index_row}>
            {generateArrayOfTrues(props.cols).map((_, index_col) => <td key={index_col} className={index_row * props.cols + index_col === props.indexActive ? "on" : "off"} onClick={() => props.setIndexActive(index_row * props.cols + index_col)}></td>)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ArrayVisualizer(props) {
  return (
    <table>
      <tbody>
        <tr>
          {generateArrayOfTrues(props.size).map((_, index) => <td key={index} className={index === props.indexActive ? "on" : "off"} onClick={() => props.setIndexActive(index)}></td>)}
        </tr>
      </tbody>
    </table>
  )
}

function generateArrayOfTrues(size) {
  let array = [];
  for (let i = 0; i < size; i++) array.push(true);
  return array;
}
