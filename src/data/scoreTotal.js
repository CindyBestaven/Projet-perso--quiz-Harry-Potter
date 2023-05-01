
let scoreHouse = {
    Gryffondor:0,
    Serdaigle:0,
    Serpentard:0,
    Poufsouffle:0
};

export let house= "";
export let index = 0;

//récupérer l'information
export function getScore() {
   return scoreHouse;
}

//mettre à jour
export function setScore(maison, valeur) {
    scoreHouse[maison] += valeur;
}

export function getHouse() {
    return house;
}

export function setHouse(newHouse) {
   house = newHouse;
}

export function getIndex() {
    return index;
}

export function setIndex(newIndex) {
    index = newIndex;
 }
