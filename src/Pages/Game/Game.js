import React, { useEffect, useLayoutEffect } from 'react'
import { ReturnButton } from '../../Return-Button'
import { Container } from '@material-ui/core'
import "./Game.css"


const Game = () => {
    let gameHasInitialized = false;

  useEffect(() => {
      console.log('useEffect');
      if (gameHasInitialized) return;
    gameHasInitialized = true;

      Init();
  });

//    useLayoutEffect(() => {
//      console.log('useLayoutEffect');
//    });

  // let gameHasInitialized = false;

//   let intervalId = setInterval(() => {
//     console.log('interval');

//     // if (gameHasInitialized) {
//     //     clearInterval(intervalId);
//     //     return;
//     // }

//     const checkElement = document.querySelector('.game-grid');
//     if (checkElement == null) return;

//     clearInterval(intervalId);
//     Init();
//   }, 100);

//   setTimeout(function() {
//     Init();
//   }, 5000);

//   document.addEventListener('DOMContentLoaded', ()=> {
//     Init();
//   });

  function Init() {
    // if (gameHasInitialized) return;
    // gameHasInitialized = true;

    const gridDisplay = document.querySelector('.game-grid')
    const scoreDisplay = document.getElementById('game-score')
    const resultDisplay = document.getElementById('game-result')
    const width = 4
    let squares = []
    let score = 0
    let highestScore = 0
  
  
    //create a board
    function createBoard() {
        for (let i=0; i< width*width; i++) {
            let square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
        assignColor()
    }
  
    createBoard()
  
    //generate a number randomly
    function generate() {
        let randomNumber = Math.floor(Math.random() * squares.length)
        if (squares[randomNumber].innerHTML == 0) {
            squares[randomNumber].innerHTML = 2
            checkForGameOver()
        } else generate()
        
    }
  
    //swipe right
    function moveRight() {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
  
                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = zeros.concat(filteredRow)
  
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }
  
    //swipe left
    function moveLeft() {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
  
                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(0)
                let newRow = filteredRow.concat(zeros)
                
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]
            }
        }
    }
  
    //swipe down
    function moveDown() {
        for (let i=0; i <4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        
            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filteredColumn)
  
            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
  
        }  
    }
  
    //swipe up
    function moveUp() {
        for (let i=0; i <4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
        
            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(zeros)
  
            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
  
        }  
    }
  
    function combineRow() {
        for (let i=0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i+1].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i + 1].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }
  
    function combineColumn() {
        for (let i=0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i+width].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i + width].innerHTML = 0
                score += combinedTotal
                scoreDisplay.innerHTML = score
            }
        }
        checkForWin()
    }

    // see what else is going wrong with this - can't get it to actually add
    // function checkHighestScore() {
    //     for (let i=0; i < 15; i++) {
    //         if (squares[i].innerHTML < squares[i+1].innerHTML) {
    //             highestScore = parseInt(squares[i+1].innerHTML)
    //         }
    //     }
    //     return scoreDisplay.innerHTML = highestScore
    // }
    // function checkHighestScore(squares) {
    //     // let highestScore = 0
    //     // for (let i=0; i < squares.length; i++) {
    //     const scoreArray = squares.map(Number)
    //     scoreDisplay.innerHTML = Math.max(scoreArray)
    //     console.log(scoreArray)
    //     // }
    // }
  
    //assign keycodes
    function control(e) {
        if (e.keyCode === 39) {
            keyRight()
        } else if (e.keyCode === 37) {
            keyLeft()
        } else if (e.keyCode === 38) {
            keyUp()
        } else if (e.keyCode === 40) {
            keyDown()
        }
    }
    document.addEventListener('keyup', control)
  
    function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
        assignColor()
    }
  
    function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
        assignColor()
    }
  
    function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        generate()
        assignColor()
    }
  
    function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate()
        assignColor()
    }
  
    //check for win
    function checkForWin() {
        for (let i=0; i<squares.length; i++) {
            if (squares[i].innerHTML == 2048){
                resultDisplay.innerHTML = "You win!"
                document.removeEventListener('keyup', control)
            }
        }
    }
  
    //check for game over
    function checkForGameOver() {
        let zeros = 0
        for (let i = 0; i< squares.length; i++){
            if (squares[i].innerHTML == 0) {
                zeros++
            }
        }
        if (zeros === 0) {
            resultDisplay.innerHTML = "You lost!"
            document.removeEventListener('keyup', control)
        }
    }

    function assignColor() {
      for (let i = 0; i< squares.length; i++){
        if (squares[i].innerHTML == 0) {
            squares[i].style.backgroundColor = "deepskyblue"
            squares[i].style.borderColor = "dodgerblue"
        } else if (squares[i].innerHTML == 2) {
          squares[i].style.backgroundColor = "lightpink"
          squares[i].style.borderColor = "indianred"
        } else if (squares[i].innerHTML == 4) {
          squares[i].style.backgroundColor = "gold"
          squares[i].style.borderColor = "goldenrod"
        } else if (squares[i].innerHTML == 8) {
          squares[i].style.backgroundColor = "forestgreen"
          squares[i].style.borderColor = "green"
        } else if (squares[i].innerHTML == 16) {
          squares[i].style.backgroundColor = "darkviolet"
          squares[i].style.borderColor = "indigo"
        } else if (squares[i].innerHTML == 32) {
          squares[i].style.backgroundColor = "lightskyblue"
          squares[i].style.borderColor = "royalblue"
        } else if (squares[i].innerHTML == 64) {
          squares[i].style.backgroundColor = "orange"
          squares[i].style.borderColor = "darkorange"
        } else if (squares[i].innerHTML == 128) {
          squares[i].style.backgroundColor = "mediumvioletred"
          squares[i].style.borderColor = "maroon"
        } else if (squares[i].innerHTML == 256) {
          squares[i].style.backgroundColor = "mediumturquoise"
          squares[i].style.borderColor = "lightseagreen"
        } else if (squares[i].innerHTML == 512) {
          squares[i].style.backgroundColor = "cornflowerblue"
          squares[i].style.borderColor = "darkblue"
        } else if (squares[i].innerHTML == 1024) {
          squares[i].style.backgroundColor = "pink"
          squares[i].style.borderColor = "palevioletred"
          squares[i].style.fontSize = "50px"
          squares[i].style.paddingTop = "30px"
        } else if (squares[i].innerHTML == 2048) {
          squares[i].style.backgroundColor = "crimson"
          squares[i].style.borderColor = "darkred"
          squares[i].style.fontSize = "50px"
          squares[i].style.paddingTop = "30px"
        }
    }
    }
  
  
  }
  //})
  return (
      <div className='game-bg'>
        <div className='game-container'>
          <div className="game-score-container"> 
              <div className="game-score-title">2048</div>
              <span id="game-score">Score: 0</span>
          </div>
  
          <div id="game-result"></div>
            <div id="game-border">
          <div className="game-grid"></div>
          </div>
        </div>
        <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", justifyContent: 'space-evenly' }}>
        <ReturnButton />
      </Container>
      </div>
    
  )
}

export default Game