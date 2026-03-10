/**
 * Saves the current state of the page's editable fields
 */
function saveState() {
    const state = {};

    // save filled circles
    document.querySelectorAll('.skill-level').forEach((group, i) => {
        state[`skill-${i}`] = [...group.querySelectorAll('.skill-level-box')]
            .map(box => box.classList.contains('filled'));
    });

    // save editable box values
    document.querySelectorAll('.skill-box').forEach((box, i) => {
        state[`skill-box-${i}`] = box.textContent;
    });

    localStorage.setItem('characterState', JSON.stringify(state));
}

/**
 * Loads a saved state
 */
function loadState() {
    const state = JSON.parse(localStorage.getItem('characterState'));
    if (!state) return; // nothing saved yet

    document.querySelectorAll('.skill-level').forEach((group, i) => {
        const filled = state[`skill-${i}`];
        if (!filled) return;
        group.querySelectorAll('.skill-level-box').forEach((box, j) => {
            if (filled[j]) box.classList.add('filled');
        });
    });

    document.querySelectorAll('.skill-box').forEach((box, i) => {
        if (state[`skill-box-${i}`]) box.textContent = state[`skill-box-${i}`];
    });
}

export {loadState, saveState};