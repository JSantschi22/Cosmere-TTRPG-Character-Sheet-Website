import {saveState, selectText} from "./utils.js";

//Make the skill level buttons fill when clicked, but defaults the buttons to disabled
let levelBoxes = document.querySelectorAll('.skill-level-box');
for (const box of levelBoxes) {
    box.addEventListener('click', (ev) => {
        ev.target.classList.toggle('filled');
    });
    skillBoxClickableOff();
}

/**
 * Makes the skill level buttons clickable
 */
function skillBoxClickableOn() {
    let levelBoxes = document.querySelectorAll('.skill-level-box');
    for (const box of levelBoxes) {
        box.disabled = false;
    }
}

/**
 * Makes the skill level buttons unclickable
 */
function skillBoxClickableOff() {
    let levelBoxes = document.querySelectorAll('.skill-level-box');
    for (const box of levelBoxes) {
        box.disabled = true;
    }
}

/**
 * Makes the skill fields editable
 */
function editSkillsOn() {
    let skillBoxes = document.querySelectorAll('.skill-box');
    for (const skill of skillBoxes) {
        skill.contentEditable = true;
        skill.addEventListener('keydown', (ev) => {
            if (isNaN(ev.key) && ev.key !== 'Backspace') {
                ev.preventDefault();
            }
            if (skill.textContent.length >= 1 && ev.key !== 'Backspace') {
                ev.preventDefault();
            }
        });
        skill.addEventListener('focus', selectText);
    }
}

/**
 * Makes the skill fields no longer editable
 */
function editSkillsOff() {
    let skillBoxes = document.querySelectorAll('.skill-box');
    for (const skill of skillBoxes) {
        skill.contentEditable = false;
    }
}

// Clicking the edit button turns on and off edit mode
let editBtn = document.querySelector('#edit-button');
editBtn.addEventListener('click', (ev) => {
    if (!window.editMode) {
        window.editMode = true;
        ev.target.classList.toggle('active');
        editSkillsOn();
        skillBoxClickableOn();
    } else if (window.editMode) {
        window.editMode = false;
        ev.target.classList.toggle('active')
        editSkillsOff();
        skillBoxClickableOff();
    }
    saveState();
})
