import React, {useState, useRef, useEffect} from 'react'
import Square from './Square'
import {containerStyle, rowStyle, buttonStyle, boardStyle, instructionsStyle} from "./styles"

export default function Board() {

    const initialClicked = [false,false,false,false,false,false,false,false,false]
    const initialLetters = ["","","","","","","","",""]
    const [clicked, setClicked] = useState(initialClicked)
    const [letter, setLetter] = useState(initialLetters)
    const [turn, setTurn] = useState("X")
    const [win, setWin] = useState("None")
    const rowsColumns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]]
    
    const prevPlayer = useRef()
    
    const useSquare = (e, i) =>{
      e.preventDefault()
      if (clicked[i] === true) return
      setLetter(letter => {return  [
        ...letter.slice(0, i), turn, ...letter.slice(i+1)]})
      setClicked(clicked => {return [
        ...clicked.slice(0, i), true, ...clicked.slice(i+1)]})
      turn === "X" ? setTurn("O") : setTurn("X")
    }
    
    useEffect(()=>{
      console.log(prevPlayer)
      rowsColumns.map((xo)=>{
      
        let counter = 0
        xo.forEach((a)=>{
          if(letter[a]===prevPlayer.current){counter++}
          if(counter===3){setWin(prevPlayer.current)}})
    })},[useSquare])
    
    useEffect(()=>{
      prevPlayer.current = turn
    },[turn])
    
    const reset = (e) => {
      e.preventDefault()
      setLetter(initialLetters)
      setClicked(initialClicked)
      setTurn("X")
      setWin("None")
    }
    
        return (
          <div style={containerStyle} className="gameBoard">
            <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{turn}</span></div>
            <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{win}</span></div>
            <button style={buttonStyle} onClick={(e)=>{reset(e)}}>Reset</button>
            <div style={boardStyle}>
              <div className="board-row" style={rowStyle}>
                <Square letter={letter[0]} clicked={clicked[0]} i={0} useSquare={useSquare} />
                <Square letter={letter[1]} clicked={clicked[1]} i={1} useSquare={useSquare} />
                <Square letter={letter[2]} clicked={clicked[2]} i={2} useSquare={useSquare} />
              </div>
              <div className="board-row" style={rowStyle}>
                <Square letter={letter[3]} clicked={clicked[3]} i={3} useSquare={useSquare} />
                <Square letter={letter[4]} clicked={clicked[4]} i={4} useSquare={useSquare} />
                <Square letter={letter[5]} clicked={clicked[5]} i={5} useSquare={useSquare} />
              </div>
              <div className="board-row" style={rowStyle}>
                <Square letter={letter[6]} clicked={clicked[6]} i={6} useSquare={useSquare} />
                <Square letter={letter[7]} clicked={clicked[7]} i={7} useSquare={useSquare} />
                <Square letter={letter[8]} clicked={clicked[8]} i={8} useSquare={useSquare} />
              </div>
            </div>
          </div>
        );
}
