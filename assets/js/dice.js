import DiceBox from '/node_modules/@3d-dice/dice-box/dist/dice-box.es.js';

const diceBox = new DiceBox({
    container: '#dice-container',
    assetPath: '/public/assets/',
    gravity: 1,
    spinForce: 6,
    throwForce: 2,
    scale: 8
});

await diceBox.init();

export {diceBox};