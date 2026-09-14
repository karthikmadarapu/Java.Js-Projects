function myCareerDetails(name, exp, age, currentPos){
    this.name = name;
    this.exp = exp;
    this.age = age;
    this.position = currentPos;
}


const playerDetails = new myCareerDetails("david beckham", 5, 30, "right wing");

console.log(playerDetails.name);



class Footballers{
    constructor(name, age, club){
        this.name = name;
        this.age = age;
        this.club =  club;
    }

    oneOnOne(player1, player2){

        console.log(`${player1}(${this.club}) vs ${player2}(${this.club})`);
    }
}

const player_1 = new Footballers("Cristiano Ronaldo", 40, "Man-United");
const player_2 = new Footballers("Kilian Mbappe", 25, "Real-Madrid");
const player_3 = new Footballers("Raphina",31, "Barcelona-FC");

console.log(player_1);
player_2.oneOnOne(player_1.name, player_2.name);