function playGame(playerInput){

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  function getMoveName(randomNumber){
    if(randomNumber == 1){
      return 'kamień';
    } else if(randomNumber == 2){
      return 'papier';
    } else if(randomNumber == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + randomNumber + '.');
    return 'nieznany ruch';
  }

  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  printMessage('Ruchem komputera jest: ' + argComputerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  function getMoveName(playerInput){

    if(playerInput == 1){
      return 'kamień';
    } else if(playerInput == 2){
      return 'papier';
    } else if(playerInput == 3){
      return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + playerInput + '.');
    return 'nieznany ruch';
  }

  printMessage('Twój ruch to: ' + argPlayerMove);

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Komputer zagrał: ' + argComputerMove + ', a Twoje zagranie to: ' + argPlayerMove);

    if (argComputerMove == argPlayerMove){
      return 'Remis!';
    } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Komputer wygrywa!';
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
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

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
