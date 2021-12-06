import React,{useState} from 'react';
import GunFire from './GunFire';

const App = () => {
  const [countPlay1, setCountPlay1] = useState(0);
  const [countPlay2, setCountPlay2] = useState(0);

  const countUp =(value)=>{
    if(value == "player1"){
      setCountPlay1(countPlay1+1);
    }
    else{
      setCountPlay2(countPlay2+1);
    }
  }

 
  return (
    <>
      <GunFire num="1" countUp={countUp} countPlay1={countPlay1} countPlay2={countPlay2} />
      <GunFire num="2" countUp={countUp} countPlay1={countPlay1} countPlay2={countPlay2}/>
      <GunFire num="3" countUp={countUp} countPlay1={countPlay1} countPlay2={countPlay2}/>
      <GunFire num="4" countUp={countUp} countPlay1={countPlay1} countPlay2={countPlay2}/>
      <GunFire num="5" countUp={countUp} countPlay1={countPlay1} countPlay2={countPlay2} />

      {(countPlay1>=3) && (
        <>
        <h1>PLAYER 1 WON THE TOURNAMENT</h1>
        {alert('PLAYER 1 WON THE TOURNAMENT')}
        </>)}
      {(countPlay2>=3) && (
        <>
        <h1>PLAYER 2 WON THE TOURNAMENT</h1>
        {alert('PLAYER 2 WON THE TOURNAMENT')}
        </>)}
    </>
  )
}

export default App;
