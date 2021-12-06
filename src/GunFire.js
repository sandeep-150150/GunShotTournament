import React,{useState,useEffect} from 'react';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";


const GunFire = ({ num,countUp,countPlay1,countPlay2 }) => {
  const [player1Life, setPlayer1Life] = useState(100);
  const [player2Life, setPlayer2Life] = useState(100);
  const [activate,setActivate] = useState(false);

  const event1 = () =>{
    if(activate && player2Life >0 && player1Life !==0){
       setPlayer2Life(player2Life-5);
    }

  }

  const event2 =() =>{
    if(activate && player1Life >0 && player2Life !==0){
      setPlayer1Life(player1Life-5);
    }
  }
  useEffect(() => {

  if(player1Life >0 && player2Life == 0){
    countUp("player1");
  }else if(player2Life>0 && player1Life === 0){
    countUp("player2");
  }else{
    console.log("no results yet");
  }
  }, [player1Life,player2Life])
  


    return (
      <>
        < h1 > Game { num } </h1> 
        <div style = {{ display : "flex" ,justifyContent:"space-between"} } >
           <div >
               <img src = { img2 } width = "400px" height = "200px" 
               onMouseEnter={event1}/ >
               <h3>PLAYER 1</h3>
               <h3> HEALTH :{player1Life}</h3>

           </div> 
           <div >
                <img src = { img1 } width = "400px" height = "200px"
                onMouseEnter={event2} / >
                <h3>PLAYER 2</h3>
                <h3> HEALTH :{player2Life}</h3>
          </div> 
        </div>
        <h1 style={{textAlign:"center",marginBottom:"20px"}}>Move Mouse Over It To Fire Gun </h1>
        <div style={{display:"flex",justifyContent:"center"}}>
            <button onClick={()=>setActivate(true)} > Start Game</button>
        </div>

        <h3 style={{textAlign:"center",marginBottom:"20px"}}>PLAYER 1 WON -{countPlay1}</h3>
        <h3 style={{textAlign:"center",marginBottom:"20px"}}>PLAYER 2 WON -{countPlay2}</h3>


        {(player1Life>0 && player2Life == 0 ) && <h3 style={{textAlign:"center"}}>Player 1 Won The Match !</h3>}
        {(player2Life>0 && player1Life == 0 ) && <h3 style={{textAlign:"center"}}>Player 2 Won The Match !</h3>}
      
       <hr/>
        </>
    );
}

export default GunFire;