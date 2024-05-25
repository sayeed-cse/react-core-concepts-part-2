import Users from './Users';
import './App.css'
import Counter from './Counter';
import Player from './Player';
import Team from './Team';
import Posts from './Posts';
import Friends from './Friends';
import Comments from './Comments';

function App() {
  function handleClick(){
    alert('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked');
  }
  const addToFIve = (num)=>{
    alert(num+5)
  }
  return (
    <>
      <h3>React Core Concept 2</h3>
      <Comments></Comments>
      <Friends></Friends>
      <Users></Users>
      <Posts></Posts>
      <Counter></Counter>
      <Team></Team>
      <Player></Player>
      <button onClick={handleClick}>Button</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={()=>{alert('third button clicked')}}>Button third</button>
      <button onClick={() => { addToFIve(3) }}>button Four</button>
    </>
  )
}

export default App
