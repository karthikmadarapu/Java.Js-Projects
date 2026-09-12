function myCareerDetails(name, exp, age, currentPos){
    this.name = name;
    this.exp = exp;
    this.age = age;
    this.position = currentPos;
}


const playerDetails = new myCareerDetails("david beckham", 5, 30, "right wing");

console.log(playerDetails.name);
