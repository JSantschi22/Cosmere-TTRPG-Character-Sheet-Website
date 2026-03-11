import DiceBox from '/node_modules/@3d-dice/dice-box/dist/dice-box.es.js';

const diceBox = new DiceBox({
    container: '#dice-container',
    assetPath: '/public/assets/',
    gravity: 1,
    spinForce: 6,
    throwForce: 2,
    scale: 8
});

export function roll(notation, callback) {
    diceBox.onRollComplete = (result) => {
        console.log(result);
        callback(result[0]);
    }
    diceBox.roll(notation);
    console.log('we tried');
}

await diceBox.init();
