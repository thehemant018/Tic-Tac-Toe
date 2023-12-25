import React, { useState,useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/Circle.png'
import cross_icon from '../Assets/Cross.png'
import Swal from 'sweetalert2'

let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);


  let titleRef = useRef(null);
  let box0=useRef(null);
  let box1=useRef(null);
  let box2=useRef(null);
  let box3=useRef(null);
  let box4=useRef(null);
  let box5=useRef(null);
  let box6=useRef(null);
  let box7=useRef(null);
  let box8=useRef(null);
  
  
  let array=[box0,box1,box2,box3,box4,box5,box6,box7,box8];



  const toggle = (e, num) => {
    if(data[num]!==''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This box is already taken.Please choose another one!"
      });
      return
    }

    if (lock) {
      return 0;
    }
    
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${cross_icon}" alt="" />`;
      data[num] = "X";
      setCount(++count);
    }
    else {
      e.target.innerHTML = `<img src="${circle_icon}" alt="" />`;
      data[num] = "O";
      setCount(++count);
    }
    checkWin();
  
  
  }



  const checkWin=()=>{
    // horizontal check
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      won(data[2]);
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      won(data[5]);
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      won(data[8]);
    }
    //vertical check
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      won(data[6]);
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      won(data[7]);
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      won(data[8]);
    }
    //diagonal check
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      won(data[8]);
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      won(data[6]);
    }
    else if(data[0] && data[1] && data[2] && data[3] && data[4] && data[5] && data[6] && data[7] && data[8] ){
      won("")
    }

  }
  const won=(winner)=>{
    setLock(true);
    console.log(winner);
    if(winner==="X"){
      titleRef.current.innerHTML=`Congratulations: <img src="${cross_icon}" alt="" /> wins`
    }
    else if(winner==="O"){
      titleRef.current.innerHTML=`Congratulations: <img src="${circle_icon}" alt="" /> wins`
    }
    else {
      
      titleRef.current.innerHTML=`Oops No One Win`;
    }
  }

const reset=()=>{
  setLock(false);
  data = ["", "", "", "", "", "", "", "", ""];
  titleRef.current.innerHTML=`Tic Tac Toe`;
  // eslint-disable-next-line 
  array.map((e)=>{
    e.current.innerHTML='';
  })
  
}

  return (
    <div className='container'>
      <h2 className='title' ref={titleRef}>Tic Tac Toe</h2>
      <div className="board">
        <div className="row1">
          <div className="boxes" id='0' ref={box0} onClick={(e) => { toggle(e, 0) }}></div>
          <div className="boxes" id='1' ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
          <div className="boxes" id='2' ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
        </div>
        <div className="row2">
          <div className="boxes" id='3' ref={box3} onClick={(e) => { toggle(e, 3) }}></div>
          <div className="boxes" id='4' ref={box4} onClick={(e) => { toggle(e, 4)}}></div>
          <div className="boxes" id='5' ref={box5} onClick={(e) => { toggle(e, 5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" id='6' ref={box6} onClick={(e) => { toggle(e, 6) }}></div>
          <div className="boxes" id='7' ref={box7} onClick={(e) => { toggle(e, 7) }}></div>
          <div className="boxes" id='8' ref={box8} onClick={(e) => { toggle(e, 8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
