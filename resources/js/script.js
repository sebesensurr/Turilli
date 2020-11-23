const creatureList = ['Angel', 'Dragon', 'Elf', 'Troll', 'Knight', 'Warrior', 'Unicorn', 'Dwarf', 'King', 'Lord', 'Queen', 'Wizard', 'Swormaster', 'Tyrant', 'Hero', 'Demon'];

const randomGenerator = base => {
    let rand = Math.floor(Math.random() * base.length)
    return rand;
}

const generatorButton = document.getElementById('generator');
let creature = document.getElementById('creature');

generatorButton.addEventListener('click', function () {
    let index = randomGenerator(creatureList);
    creature.innerHTML = creatureList[index];
})