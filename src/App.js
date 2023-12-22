
import './App.css';
import { useCallback, useState } from 'react';
import NumberList from './NumberList';
function App() {
  const [number, setNumber] = useState(1)
  const [dark,setDark]=useState(false)



 const theme={
  backgroundColor: dark? '#333': '#fff',
  color: dark? '#fff': '#333'
 }
 
 const getItems=useCallback((incrementValue)=>{
  return [
    number+incrementValue,
    number+1+incrementValue,
    number+2+incrementValue]
 },[number])
  return (
    <div style={theme}>
      <input type='number'
       value={number}
       onChange={(e)=>setNumber(parseInt(e.target.value))}
      />
      <button onClick={()=>setDark((prevDark)=>!prevDark)}>Temani dəyişdir</button>
     <NumberList getItems={getItems}/>
    </div>
  );
}

export default App;
