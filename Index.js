/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let rand = Math.random();
if (rand < 0.33) {
    first = "Crazy";
} else if (rand >= 0.33 && rand <= 0.66) {
    first = "Amazing";
} else {
    first = "Fire";
}

rand = Math.random();
if (rand < 0.33) {
    second = "Engine";
} else if (rand >= 0.33 && rand <= 0.66) {
    second = "Foods";
} else {
    second = "Garments";
}

rand = Math.random();
if (rand < 0.33) {
    third = "Bros";
} else if (rand >= 0.33 && rand <= 0.66) {
    third = "Limited";
} else {
    third = "Hub";
}
console.log(`${first} ${second} ${third}`);
console.log("Bye")