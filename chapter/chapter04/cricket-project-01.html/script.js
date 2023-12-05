let score = {
     Win: 0,
     Lost: 0,
     Tie: 0,
    

};


function computerRandomcode() {
     let randomNumber = Math.random() * 3;
     if (randomNumber <= 1) {
         return 'Bat';
     } else if (randomNumber <= 2) {
          return 'Ball';
     } else {
          return 'Stump';
     };
};

function getResult(userMove, computerMove){
     if (userMove === 'Bat'){
          if (computerMove === 'Bat') {
               score.Tie++;
               return `It's is a Tie`;
          } else if (computerMove === 'Ball') {
               score.Win++;
               return 'You have Win';
          } else if (computerMove === 'Stump') {
               score.Lost++;
               return 'Computer has Win';
          }
     } else if (userMove === 'Ball'){
          if (computerMove === 'Bat') {
               score.Lost++;
               return 'Computer has Win';
          } else if (computerMove === 'Ball') {
               score.Tie++;
               return `It's is a Tie`;
          } else if (computerMove === 'Stump') {
               score.Win++;
               return 'You have Win';
          }
     } else{
          if (computerMove === 'Bat') {
               score.Win++;
               return 'You have Win';
          } else if (computerMove === 'Ball') {
               score.Lost++;
               return 'Computer has Win';
          } else if (computerMove === 'Stump') {
               score.Tie++;
               return `It's is a Tie`;
          };
     };

};

function showResult (userMove, computerMove, result){
     document.querySelector('#my-choice').innerText =
           userMove = `Win: ${score.Win}`;
     document.querySelector('#comp-choice').innerText = 
          computerMove = `Lost: ${score.Lost}`;
     document.querySelector('#all-result').innerText =
           result = `Tie: ${score.Tie}`;
};



function batButton() {
     let computerChoice = computerRandomcode();
     let resultMsg = getResult('Bat', computerChoice);
     showResult('Bat', computerChoice, resultMsg);

     // if (computerChoice === 'Bat') {
     //      resultMsg = `It's is a Tie`;
     // } else if (computerChoice === 'Ball') {
     //      resultMsg = 'You have Win';
     // } else if (computerChoice === 'Stump') {
     //      resultMsg = 'Computer has Win';
     // }
     // document.querySelector('#my-choice').innerText = 'Bat';
     // document.querySelector('#comp-choice').innerText = computerChoice;
     // document.querySelector('#all-result').innerText = resultMsg;
};


function ballButton() {
     computerChoice = computerRandomcode();
     let resultMsg = getResult('Ball', computerChoice);     
     showResult('Ball', computerChoice, resultMsg);

     // if (computerChoice === 'Bat') {
     //      resultMsg = 'Computer has Win';
     // } else if (computerChoice === 'Ball') {
     //      resultMsg = `It's is a Tie`;
     // } else if (computerChoice === 'Stump') {
     //      resultMsg = 'You have Win';
     // }
     // document.querySelector('#my-choice').innerText = 'Ball';
     // document.querySelector('#comp-choice').innerText = computerChoice;
     // document.querySelector('#all-result').innerText = resultMsg;
};


function stumpButton() {
     computerChoice = computerRandomcode();
     let resultMsg = getResult('Stump', computerChoice);     
     showResult('Stump', computerChoice, resultMsg);

     // if (computerChoice === 'Bat') {
     //      resultMsg = 'You have Win';
     // } else if (computerChoice === 'Ball') {
     //      resultMsg = 'Computer has Win';
     // } else if (computerChoice === 'Stump') {
     //      resultMsg = `It's is a Tie`;
     // }
     // document.querySelector('#my-choice').innerText = 'Stump';
     // document.querySelector('#comp-choice').innerText = computerChoice;
     // document.querySelector('#all-result').innerText = resultMsg;
};