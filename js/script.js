let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
    computerMove = 'papier';
}

if(randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
    playerMove = 'papier';
}

if(playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == '1' && playerMove == '1' ){
    printMessage('Remis');
}

if(computerMove == '1' && playerMove == '2' ){
    printMessage('Ty wygrywasz!');
}

if(computerMove == '1' && playerMove == '3' ){
    printMessage('Ty przegrywasz!');
}

if(computerMove == '2' && playerMove == '1' ){
    printMessage('Przegrywasz!');
}

if(computerMove == '2' && playerMove == '2' ){
    printMessage('Remis!');
}

if(computerMove == '2' && playerMove == '3' ){
    printMessage('Ty wygrywasz!');
}

if(computerMove == '3' && playerMove == '1' ){
    printMessage('Ty wygrywasz!');
}

if(computerMove == '3' && playerMove == '2' ){
    printMessage('Ty przegrywasz!');
}

if(computerMove == '3' && playerMove == '3' ){
    printMessage('Remis!');
}

if(computerMove == '1,2,3' && playerMove == 'nieznany ruch' ){
    printMessage('Wybierz poprawny numer1');
}
1