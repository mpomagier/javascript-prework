
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

/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
  computerMove = 'papier';
} else if(randomNumber == 3){
  computerMove = 'nożyce';
}*/

printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

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

/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
  playerMove = 'papier';
} else if(playerInput == '3'){
  playerMove = 'nożyce';
}*/


printMessage('Twój ruch to: ' + argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Komputer zagrał: ' + argComputerMove + ', a Twoje zagranie to: ' + argPlayerMove);

  if (argComputerMove == argPlayerMove){
    return 'Remis!';
  } else if (argComputerMove == 'kamień' && argPlayerMove== 'papier') {
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

/*
if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
  printMessage('Komputer wygrywa!');
}

if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
  printMessage('Remis!');
}

if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}

if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}

if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
  printMessage('Remis!');
}

if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}

if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
  printMessage('Komputer wygrywa!');
}

if( argComputerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}

*/