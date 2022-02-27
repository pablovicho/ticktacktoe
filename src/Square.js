import React from 'react'

export default function Square(props) {
    const {letter, i, useSquare} = props

    const squareStyle = {
        'width':'60px',
        'height':'60px',
        'backgroundColor': '#ddd',
        'margin': '4px',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'fontSize': '20px',
        'color': 'white'
      }
    
    return (
      <button
        className="square"
        style = {squareStyle}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        onClick = {(e)=>useSquare(e, i)}>
        <span>{letter}</span>
      </button>
   )
}