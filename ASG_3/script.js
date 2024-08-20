let toggled = false;

function toggle() {
    const button = document.getElementById('button');
    const container = document.getElementById('container');
    const text = document.getElementById('text');

    if (toggled) {
        // Revert to initial state
        button.textContent = 'Click Me';
        container.style.backgroundColor = 'lightblue';
        text.textContent = 'SYED';
    } else {
        // Change state
        button.textContent = 'Click Again';
        container.style.backgroundColor = 'lightgreen';
        text.textContent = 'SAMEER';
    }

    toggled = !toggled;
}