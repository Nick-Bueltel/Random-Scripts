const game = {
    //value key pairs
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: '',
    prevGuesses: [],
    //object functions
    play: function() {
      //randomizes the number
       this.secretNum = Math.floor(Math.random() * 
         (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
         //sets the high and low range of the radomization
         game.biggestNum = prompt('please enter the largest possible number');
         game.smallestNum = prompt(`please enter the lowest possible number, do not exceed ${biggestNum}`);
     },
  
    getGuess: function(){
      //declare guess as null
      var guess = '';
      //exit declaration
      while(guess !== 'quit'){
          //prompt the user to guess the number
          var guess = prompt(`please enter a number between ${game.smallestNum} and ${game.biggestNum}`);
        //if the guess is a number, and not correct push the guess to the prevGuesses array
        if (guess != game.secretNum && typeof guess === 'number' ){
          game.prevGuesses.push(guess);
          alert(`${guess} is not the correct number, guess again`);
        } else if (guess = game.secretNum){ //if the guess matches 
          game.prevGuesses.push(guess); //push final guess to the array 
          alert('correct!');//let the user know they are done
          console.log(game.prevGuesses.length + ' attempts.'); //print the totall attempts in the console
          break;// end the looop
          //if the input is not a number and not quit, tell the user to try again. 
        } else if (typeof guess !== 'number' && guess !== 'quit'){
          alert(`that is not an acceptable input, please use a number between ${smallestNum} and ${biggestNum}.`);
        }
      
      }
    },
  };
  function randomButton(){
    let random = document.getElementById("randomize")
    random.addEventListener('click', function(){
      console.log(event)
      game.play()
    });
  }
  