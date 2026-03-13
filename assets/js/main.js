import './skills.js';
import {loadState, popup} from './utils.js'
import {roll} from "./dice.js";

loadState();

let thing = document.querySelector('#roll-btn');
thing.addEventListener('click', () => {
    let inp = prompt('enter the notation to roll:');
    let inpArr = inp.split(',');
    roll(inpArr, (result) => {
        popup('WOWZA!', 'You rolled a total of '+result.value+' with '+result.qty+" d"+result.sides+"(s)");
    });
});