import React, { Component } from 'react';
import '../App.css';


class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      emojis: ['😎', '🐶', '🐻', '😀', '🐱', '🐼'],
      player1: '',
      player2: ''
    };
  }

  emojiClick1(i) {
    this.setState({
      player1: this.state.emojis[i],
    })
  }
  emojiClick2(i) {
    this.setState({
      player2: this.state.emojis[i],
    })
  }


  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = (this.state.xIsNext ? this.state.player1 : this.state.player2);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

  resetFunc() {
     window.location.reload();
  }

  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.handleClick(i)}>
        {this.state.squares[i]}
      </button>
    );
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else if (!this.state.squares.includes(null)) {
          status = "PLEASE TRY AGAIN!";
    } else if (this.state.player1 == '' || this.state.player2 == '') {
      status = 'Please choose your emoji'
    } else {
      status = 'Next: ' + (this.state.xIsNext ? this.state.player1 : this.state.player2)
    }
    return (
      <div>
        <h1>
          Tic-Tac-Toe
        </h1>
        <br/>

        <div>
          <div className="player1">Player 1: {this.state.player1}</div>
          <div className="player2">Player 2: {this.state.player2}</div>
          <div className = "status">{status}</div>
        </div>

          <div className="the-board" >
          <div className="Emoji-Container-1">
            
            <div className="Emojis" onClick={this.emojiClick1.bind(this, 0)}> 😎  </div>
            <div className="Emojis" onClick={this.emojiClick1.bind(this, 1)}> 🐶  </div>
            <div className="Emojis" onClick={this.emojiClick1.bind(this, 2)}> 🐻  </div>
          </div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
            <div className="Emoji-Container-2"> 
              
              <div className="Emojis" onClick={this.emojiClick2.bind(this, 3)}>  😀  </div>
              <div className="Emojis" onClick={this.emojiClick2.bind(this, 4)}> 🐱  </div>
              <div className="Emojis" onClick={this.emojiClick2.bind(this, 5)}> 🐼  </div>
            </div>
          </div><br/>
        <div className = "resetButton">
          <button className= "reset" onClick={this.resetFunc}>Reset</button>
        </div>
      </div>
    )
  }
}

export default TicTacToe;