import React, { Component } from 'react';


export default class App extends Component {

  //score is the sum of the rolls


  //2 bowls each frame
  //strike = next frame with score
  //spare = next frame with score
    

  
  render() {
    var roll = []
    
    function roller() {
      
      for(let j = 0; j < 10; j++){
      for(let i = 0; i < 2; i++)
      //random number for each bowl, added to score
  
      roll.push(Math.floor(Math.random() * 11))
      console.log('bowls ' + roll)
      //add both numbers in roll array
          var score = roll.reduce((a, b) => a + b, 0)
          console.log('score ' + score)
          return score
          //get this number into Score: portion of UI
      }
    }
  

    return (
      <div>
        <h1>Bowling!</h1>
        <button onClick={roller}>bowl!</button>
        <h3>Frame: 1</h3>
        <h3>Roll: score</h3>
        <h3>Score: from roller function</h3>
      </div>
    );
  }
}
