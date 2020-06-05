//bear mauls human.
//human disarms gun.
//gun shoots bear.
var bear = "bear" 
var human = "human"
var gun = "gun"

function randomNumber(min, max){
    return Math.floor(Math.random()* (max-min))+min;
}

function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if(userInput == bear || human || gun){
        return userInput;    
    }else{
        console.log("user Input is invalid, try again using bear, human, or gun");
    }

}

function getcomputerChoice(){
    var cpuNumber = randomNumber(3,0);
    if(cpuNumber == 0){ 
        return bear
    }else if(cpuNumber == 1){ 
        return human
    }else{
        return gun
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice == computerChoice){
        return "game is a tie, try again!"
    }
        if(userChoice === human){
            if(computerChoice === bear){
                return "You have been mauled by a bear, YOU LOSE!"
            }else{
                return "You have disarmed the gun, YOU WIN!!!"
            }
        }
        if(userChoice === bear){
            if(computerChoice === gun){
                return "You have been shot, YOU LOSE!"
            }else{
                return "You mauled a human, YOU WIN!!!"
            }
        }
        if(userChoice === gun){
            if(computerChoice === human){
                return "Your gun has been disarmed, YOU LOSE!"
            }else{
                return "You shot the bear, YOU WIN!!!"
            }
        }
}

function playGame(){
    var promptUserChoice = prompt("Please choose bear, human, or gun");
    var userChoice = getUserChoice(promptUserChoice);
    var computerChoice = getcomputerChoice();
    console.log(determineWinner(userChoice,computerChoice));
}    

playGame();

