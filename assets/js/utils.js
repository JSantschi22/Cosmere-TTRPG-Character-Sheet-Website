/**
 * Saves the current state of the page's editable fields
 */
export function saveState() {
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
export function loadState() {
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

/**
 * Highlights text in a field when clicked
 */
export function selectText(ev) {
    const range = document.createRange();
    range.selectNodeContents(ev.target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}

document.querySelector('#popup-close').addEventListener('click', (ev) => {ev.target.parentElement.classList.remove('visible');});
/**
 * Creates a popup on screen
 * @param title
 * @param content
 * @param confirmAction
 * @param confirmText
 */
export function popup(title, content, confirmAction = () => {return true;}, confirmText='confirm') {
    document.querySelector('#popup').classList.add('visible');
    document.querySelector('#popup-title').textContent = title;
    document.querySelector('#popup-content').textContent = content;
    let confirmBtn = document.querySelector('#popup-confirm');
    let newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentElement.replaceChild(newConfirmBtn, confirmBtn);
    newConfirmBtn.textContent = confirmText;
    newConfirmBtn.addEventListener('click', confirmAction);
    newConfirmBtn.addEventListener('click', (ev) => {ev.target.parentElement.classList.remove('visible');})
}
