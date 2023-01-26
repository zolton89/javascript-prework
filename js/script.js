
 function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + getMoveName);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
printMessage('Twój ruch to: ' + getMoveName);
let argPlayerMove = getMoveName(playerInput);

function displayResult(argComputerMove, argPlayerMove) {

if (argComputerMove == argPlayerMove ) {
    printMessage('Remis');
    console.log('moves:', argComputerMove, argPlayerMove);
}

else if (argComputerMove == 'kamień' && argPlayerMove == 'papier' ) {
    printMessage('Ty wygrywasz!');
}

else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce' ) {
    printMessage('Ty przegrywasz!');
}

else if (argComputerMove == 'papier' && argPlayerMove == 'kamień' ) {
    printMessage('Przegrywasz!');
}

else if (argComputerMove == 'papier' && argPlayerMove == 'papier' ) {
    printMessage('Remis!');
}

else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce' ) {
    printMessage('Ty wygrywasz!');
}

else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień' ) {
    printMessage('Ty wygrywasz!');
}

else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier' ) {
    printMessage('Ty przegrywasz!');
}

else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce' ) {
    printMessage('Remis!');
}

else {
    printMessage('Gra nierozstrzynięta')
}

displayResult(argComputerMove, argPlayerMove)

}

