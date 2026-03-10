import './skills.js';
import {loadState} from './utils.js'

loadState();

let rollBtn = document.querySelector('#roll-btn');
rollBtn.addEventListener('click', (ev) => {
    window.diceBox.roll('1d20');
})
