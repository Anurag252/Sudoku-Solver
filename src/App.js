import logo from './logo.svg';
import './App.css';
import {Grid}  from './component/grid/grid';
import { useState } from 'react';
import { useWorker } from 'react-hooks-worker';


function App() {
  let map = [["5","3","NA","NA","7","NA","NA","NA","NA"],["6","NA","NA","1","9","5","NA","NA","NA"],["NA","9","8","NA","NA","NA","NA","6","NA"],["8","NA","NA","NA","6","NA","NA","NA","3"],["4","NA","NA","8","NA","3","NA","NA","1"],["7","NA","NA","NA","2","NA","NA","NA","6"],["NA","6","NA","NA","NA","NA","2","8","NA"],["NA","NA","NA","4","1","9","NA","NA","5"],["NA","NA","NA","NA","8","NA","NA","7","9"]];
  //let map = [[1,'NA',3,'NA'],['NA','NA','NA',2],[2,'NA','NA','NA'],['NA',3,'NA',1]]
  const solveSudoku = () => {
    console.log("ab")
    
    let worker = new Worker('./sudokulogic.js')
    worker.postMessage(map);
    worker.onmessage  = (response) => {
      console.log(response.data)
      setGridMap(response.data)
    }

   
  }

  const [gridMap , setGridMap] = useState(map)

  return (
    <div style={{'background-color':'black'}}>
      <button onClick={solveSudoku} >Solve Sudoku</button>
    <Grid gridMap={gridMap}/>
    </div>
  );
}



export default App;
