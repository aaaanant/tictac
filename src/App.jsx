import './App.css'
import {useState} from 'react';
function App() {
  const [board, setBoard] = useState(["", "X", "", "o", "", "", "X", "", ""]);
 

  return (
  <>
 
  


    <div className='container'>

    <div className='heading'>
      <h2>Tic Tac toe</h2>

    </div>

    <div className='parent'>
{board.map((value,index)=>(
 <div key={index}className='box'>{value}</div>
))}
   
   

    </div>

    <div className='playername'>
      <h2>Next Player:X </h2>
    </div>
    <button className='restart'>Restart</button>


    </div>



    
   
    </>
  )
}

export default App
