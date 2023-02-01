function playGame(playerInput) {
  clearMessages();

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const argComputerMove = getMoveName(randomNumber);
  printMessage('Mój ruch to: ' + argComputerMove);

  const argPlayerMove = getMoveName(playerInput);
  printMessage('Twój ruch to: ' + argPlayerMove);
    
  function displayResult() {

    if (argComputerMove == argPlayerMove) {
      printMessage('Remis');
      console.log('moves:', argComputerMove, argPlayerMove);
    }

      else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Wygrywasz!');
    }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Wygrywasz!');
    }
      else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    }

      else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Przegrywasz!');
    }

      else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Przegrywasz!');
    }
      else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Przegrywasz!');
    }
    }
        displayResult(argComputerMove, argPlayerMove);

  }
 
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
