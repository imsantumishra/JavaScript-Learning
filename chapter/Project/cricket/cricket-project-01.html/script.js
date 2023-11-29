
let computerChoice;
function computerRandomcode() {
     let randomNumber = Math.random() * 3;
     if (randomNumber <= 1) {
          computerChoice = 'Bat';
     } else if (randomNumber <= 2) {
          computerChoice = 'Ball';
     } else {
          computerChoice = 'Stump';
     }
}

function batButton() {
     computerRandomcode();

     let resultMsg = '';

     if (computerChoice === 'Bat') {
          resultMsg = `It's is a Tie`;
     } else if (computerChoice === 'Ball') {
          resultMsg = 'You have Win';
     } else if (computerChoice === 'Stump') {
          resultMsg = 'Computer has Win';
     }
     document.querySelector('#my-choice').innerText = 'Bat';
     document.querySelector('#comp-choice').innerText = computerChoice;
     document.querySelector('#all-result').innerText = resultMsg;
};
batButton();


function ballButton() {
     computerRandomcode();
     let resultMsg = '';

     if (computerChoice === 'Bat') {
          resultMsg = 'Computer has Win';
     } else if (computerChoice === 'Ball') {
          resultMsg = `It's is a Tie`;
     } else if (computerChoice === 'Stump') {
          resultMsg = 'You have Win';
     }
     document.querySelector('#my-choice').innerText = 'Ball';
     document.querySelector('#comp-choice').innerText = computerChoice;
     document.querySelector('#all-result').innerText = resultMsg;
};
ballButton();


function stumpButton() {
     computerRandomcode();

     let resultMsg = '';

     if (computerChoice === 'Bat') {
          resultMsg = 'You have Win';
     } else if (computerChoice === 'Ball') {
          resultMsg = 'Computer has Win';
     } else if (computerChoice === 'Stump') {
          resultMsg = `It's is a Tie`;
     }
     document.querySelector('#my-choice').innerText = 'Stump';
     document.querySelector('#comp-choice').innerText = computerChoice;
     document.querySelector('#all-result').innerText = resultMsg;
};
stumpButton();