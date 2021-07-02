let pokemonTypes = ['fire', 'grass', 'ice', 'water', 'rock']

let pokemon = {
    fire: {
        beats: ['grass', 'ice'],
        image: 'https://img.pokemondb.net/sprites/silver/normal/charmeleon.png'
    },
    grass: {
        beats: ['ice', 'water'],
        image: 'https://img.pokemondb.net/sprites/ruby-sapphire/shiny/bulbasaur.png'
      },
      ice: {
        beats: ['water', 'rock'],
        image: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/articuno.png'
      },
      water: {
        beats: ['rock', 'fire'],
        image: 'https://img.pokemondb.net/sprites/silver/normal/blastoise.png'
      },
      rock: {
        beats: ['fire', 'grass'],
        image: 'https://img.pokemondb.net/sprites/ruby-sapphire/normal/golem.png'
      }
}

let playerScore = 0
let computerScore = 0

function playerChoice(playerChoice){
    let compChoice = getComputerChoice()
    drawBattle(playerChoice, compChoice)
    let outcome = playBetter(playerChoice, compChoice)
    if (outcome == "You Win") {
        // surprise
    }else if (outcome == "You Lose"){
        // surprise
    }
    drawResults(outcome)
}

function getComputerChoice(){
let choice = pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)]
console.log('computer', choice)
return choice
}

// function play(player, comp){
//     if(player == comp){
//         return "You Tied"
//     } else if (player == 'fire' && (comp == 'grass' || comp == 'ice' )) {
//         playerScore += 1
//     } else if (player == 'grass' && (comp == 'ice' || comp == 'water')) {
//         playerScore += 1
//         return "You Win"
//       } else if (player == 'ice' && (comp == 'water' || comp == 'rock')) {
//         playerScore += 1
//         return "You Win"
//       } else if (player == 'water' && (comp == 'rock' || comp == 'fire')) {
//         playerScore += 1
//         return "You Win"
//       } else if (player == 'rock' && (comp == 'fire' || comp == 'grass')) {
//         playerScore += 1
//         return "You Win"
//       } else if (comp == 'fire' && (player == 'grass' || player == 'ice')) {
//         computerScore += 1
//         return "You Lose"
//       } else if (comp == 'grass' && (player == 'ice' || player == 'water')) {
//         computerScore += 1
//         return "You Lose"
//       } else if (comp == 'ice' && (player == 'water' || player == 'rock')) {
//         computerScore += 1
//         return "You Lose"
//       } else if (comp == 'water' && (player == 'rock' || player == 'fire')) {
//         computerScore += 1
//         return "You Lose"
//       } else if (comp == 'rock' && (player == 'fire' || player == 'grass')) {
//         computerScore += 1
//         return "You Lose"
//       }
// }

// Additional solution seen above
function playBetter(player, comp){
    let battle = pokemon[player].beats
    console.log(battle)
    if (player == comp){
        return "You Tried"
    } else if (battle[0] == comp || battle[1] == comp) {
        computerScore++
        return "LOSS, Do better"
    }
    playerScore++
    return "WINNER WINNER CHICKEN DINNER"
}

function drawBattle(playerPoke, compPoke){
    let battleArena = document.getElementById('battle-area')
    battleArena.innerHTML = `
    <div class="col-4 d-flex justify-content-center"><img id="player" src="${pokemon[playerPoke].image}" alt="" ></div>
    <h3 id="result" class="col-4 text-center">who will win?</h3>
    <div class="col-4 d-flex justify-content-center"><img id="comp" src="${pokemon[compPoke].image}" alt="" ></div>
     `
}

function drawResults(outcome){
    let scoreArea = document.getElementById('score-board')
    let displayWinner = document.getElementById('result')
    displayWinner.innerHTML = outcome
    scoreArea.innerHTML = `You: ${playerScore}  ` + `  Computer: ${computerScore}`
}

function spinWinner(winner) {
    let spinner = document.getElementById(winner)
    spinner.classList.add("fa-spin")
    setTimeout(() => spinner.classList.remove('fa-spin'), 5000)
  }

// ADDITIONAL Way to do our BUTTONS 
// DRAW BUTTONS to the page - Uses Template for each pokemon button
// Don't forget - This gets invoked at the very bottom of our app.js 

// function drawButtons() {
//   let buttonArea = document.getElementById('buttons')
//   let template = ''
//   for (let poke in pokemon) {
//     template += `<div class="col-4 btn btn-outline-secondary " onclick="playerChoice('${poke}')"><img src="${pokemon[poke].image}" alt="" srcset=""></div>`
//   }
//   buttonArea.innerHTML = template
// }
// 
// ***************
// drawButtons()
// ***************
