function playGame(playerInput){

  clearMessages ();

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  function getMoveName(computerMoveId){

    if(computerMoveId == 1){
      return 'kamień';
    } else if(computerMoveId == 2){
      return 'papier';
    } else if(computerMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + computerMoveId + '.');
    return 'nieznany ruch';
  }

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  printMessage('Ruchem komputera jest: ' + argComputerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  function getMoveName(playerMoveId){

    if(playerMoveId == 1){
      return 'kamień';
    } else if(playerMoveId == 2){
      return 'papier';
    } else if(playerMoveId == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + playerMoveId + '.');
    return 'nieznany ruch';
  }

  printMessage('Twój ruch to: ' + argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Komputer zagrał: ' + argComputerMove + ', a Twoje zagranie to: ' + argPlayerMove);
  
    if (argComputerMove == argPlayerMove) {
      return 'Remis!';
    } else if (
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'papier' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier')
    ) {
      return 'Komputer wygrywa!';
    } else {
      return 'Gratulacje, wygrywasz tę rozgrywkę!';
    }
  }
  

  let result = displayResult(argComputerMove, argPlayerMove);
  printMessage(result);

}

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
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
