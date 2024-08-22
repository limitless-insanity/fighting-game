


// let playButton = document.getElementById("play");
// let resultDiv = document.getElementById("result");
// let p1NameDiv = document.getElementById("p1Name");
// let p2NameDiv = document.getElementById("p2Name");
// let p1HealthDiv = document.getElementById("p1Health");
// let p2HealthDiv = document.getElementById("p2Health");
// let input1 = document.getElementById("input1");
// let input2 = document.getElementById("input2");
// let submit = document.getElementById("submit");
// let p1Name = document.getElementById("p1Name");
// let p2Name = document.getElementById("p2Name");
// submit.addEventListener("click", function (e) {
//   p1Name.innerText = input1.value;
//   p2Name.innerText = input2.value;
// });

// const updateGame = (p1, p2, gameState) => {
//   p1HealthDiv.innerText(p1.health);
//   p2HealthDiv.innerText(p2.health);
//   if (p1.health <= 0 || p2.health <= 0) {
//   }
// };

// class Player {
//   constructor(name, health, attackDamage) {
//     this.name = name;
//     this.health = health;
//     this.attackDmg = attackDamage;
//   }
//   strike(player, enemy, attackDmg) {
//     let attack = Math.floor(Math.random() * 10);
//     enemy.health -= attack;
//     updateGame(player, enemy);
//     console.log(player, " attacks ", enemy, " with ", attack);
//   }
//   heal(player) {
//     let heal = Math.floor(Math.random() * 5);
//     player.health += heal;
//     updateGame(player);
//     console.log(heal);
//   }
// }

// class Game {
//   constructor() {
//     this.isOver = false;
//   }

//   declareWinner(isOver, p1, p2) {
//     if (isOver && p1.health <= 0) {
//       resultDiv.innerText = "p1 wins";
//       console.log("p1 won.");
//       return;
//     }
//     resultDiv.innerText = "p2 wins";
//     document.getElementById("victory").play();
//     console.log("p2 won.");
//   }

//   reset(p1, p2) {
//     p1.health = 100;
//     p2.health = 100;
//     gameState.isOver = false;
//     resultDiv.innerText = "";
//     updateGame(p1, p2);
//   }

//   play(p1, p2) {
//     while (!this.isOver) {
//     }
//   }
// }

// let p1Original = new Player("Player 1", 100, 0);
// let p2Original = new Player("Player 2", 100, 0);
// let game = new Game();

// document.addEventListener("keydown", function (e) {
//   if ((e.key == "q" || e.key == "Q") && p2.health >= 0 && !game.isOver) {
//     strike(p1, p2);
//   } else document.getElementById("fastpunch").play();
// });

// document.addEventListener("keydown", function (e) {
//   if ((e.key == "q" || e.key == "Q") && p1.health >= 0 && !game.isOver) {
//     heal(p1);
//     document.getElementById("fastheal").play();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if ((e.key == "q" || e.key == "Q") && p1.health >= 0 && !game.isOver) {
//     strike(p2, p1);
//     document.getElementById("quickhit").play();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if ((e.key == "q" || e.key == "Q") && p1.health >= 0 && !game.isOver) {
//     heal(p2);
//     document.getElementById("quickheal").play();
//   }
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key == "g") {
//     document.getElementById("quickheal").play();
//     console.log("skd");
//   } else {
//     console.log("sd");
//   }
// });

let playButton = document.getElementById("play");
let resultDiv = document.getElementById("result");
let p1NameDiv = document.getElementById("p1Name");
let p2NameDiv = document.getElementById("p2Name");
let p1HealthDiv = document.getElementById("p1Health");
let p2HealthDiv = document.getElementById("p2Health");
let submit = document.getElementById("submit");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

submit.addEventListener("click", function (e) {
  p1Name.innerText = input1.value;
  p2Name.innerText = input2.value;
});

const updateGame = (p1, p2, gameState) => {
  p1NameDiv.innerText = p1.name;
  p2NameDiv.innerText = p2.name;
  p1HealthDiv.innerText = p1.health;
  p2HealthDiv.innerText = p2.health;

  if (p1.health <= 0 || p2.health <= 0) {
    game.isOver = true;
    gameState = game.isOver;
    result.innerText = game.declareWinner(game.isOver, p1, p2);
    return gameState;
  }
};

class Player {
  constructor(name, health, attackDamage) {
    this.name = name;
    this.health = health;
    this.attackDmg = attackDamage;
  }

  strike(player, enemy, attackDmg) {
    let damageAmount = Math.ceil(Math.random() * attackDmg);

    enemy.health -= damageAmount;

    updateGame(p1, p2, gameState);

    return `${player.name} attacks ${enemy.name} for ${damageAmount}`;
  }

  heal(player) {
    let hpAmount = Math.ceil(Math.random() * 5);

    player.health += hpAmount;

    updateGame(p1, p2, gameState);

    return `${player.name} heals for ${hpAmount} HP!`;
  }
}

class Game {
  constructor() {
    this.isOver = false;
  }

  declareWinner(isOver, p1, p2) {
    let message;

    if (isOver == true && p1.health <= 0) {
      message = `${p2.name} WINS!`;
    } else if (isOver == true && p2.health <= 0) {
      message = `${p1.name} WINS!`;
    }
    console.log(isOver, p1.health, p2.health);

    document.getElementById("victory").play();

    return message;
  }

  reset(p1, p2) {
    p1.health = 100;
    p2.health = 100;
    this.isOver = false;
    resultDiv.innerText = "";
    updateGame(p1, p2);
  }

  play(p1, p2) {
    this.reset(p1, p2);

    while (!this.isOver) {
      p1.strike(p1, p2, p1.attackDmg);
      p2.heal(p2);
      p2.strike(p2, p1, p2.attackDmg);
      p1.heal(p1);
    }

    return this.declareWinner(this.isOver, p1, p2);
  }
}

let player1 = new Player("Player1", 100, 15);
let player2 = new Player("Player2", 100, 15);

let p1 = player1;
let p2 = player2;

let game = new Game();

updateGame(p1, p2);

let gameState = game.isOver;

play.onclick = () => (result.innerText = game.play(p1, p2));

document.addEventListener("keydown", function (e) {
  if (e.key == "q" && p2.health > 0 && game.isOver == false) {
    p1.strike(p1, p2, p1.attackDmg);

    document.getElementById("p1attack").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "a" && p2.health > 0) {
    p1.heal(p1);

    document.getElementById("p1heal").play();
  }
});

// ** Player 2 Controls **
document.addEventListener("keydown", function (e) {
  if (e.key == "p" && p1.health > 0 && game.isOver == false) {
    p2.strike(p2, p1, p2.attackDmg);

    document.getElementById("p2attack").play();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "l" && p2.health > 0) {
    player2.heal(p2);
    document.getElementById("p2heal").play();
  }
});
