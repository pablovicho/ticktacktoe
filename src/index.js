import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

function Game () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);