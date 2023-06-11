{
  function playGame(playerInput) {
  
  clearMessages();

  const getMoveName = function (moveId) {
    
    if (moveId == 1) {
      return 'kamień';
    } else if (moveId == 2) {
      return 'papier';
    } else if (moveId == 3) {
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + moveId + '.');
    return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  console.log('Wylosowana liczba to: ' + randomNumber);
  console.log('Gracz wpisał: ' + playerInput);

  const playerMove = getMoveName(playerInput);

  printMessage('Komputer zagrał: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function(computerMove, playerMove) {

    printMessage('Komputer zagrał: ' + computerMove + ', a Twoje zagranie to: ' + playerMove);

    if (computerMove == playerMove) {
      printMessage('Remis!');
    } else if (
      (computerMove == 'kamień' && playerMove == 'nożyce') ||
      (computerMove == 'papier' && playerMove == 'kamień') ||
      (computerMove == 'nożyce' && playerMove == 'papier')
    ) {
      printMessage('Komputer wygrywa!');
    } else {
      printMessage('Gratulacje, wygrywasz tę rozgrywkę!');
    }
  }

  displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
}