document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    const hearts = ['❤️', '💙', '💚', '🖤', '💜', '🧡', '💛'];
    let idx = 0;
    heart.addEventListener('click', function() {
        idx = (idx + 1) % hearts.length;
        heart.textContent = hearts[idx];
    });

    const syncButton = document.getElementById('syncButton');
    const resetButton = document.getElementById('resetButton');
    const inputName = document.getElementById('inputTextName');
    const inputLover = document.getElementById('inputTextLover');
    const output = document.getElementById('outputTextSync');

    syncButton.addEventListener('click', function() {
        const percent = Math.floor(Math.random() * 101);
        output.value = `${percent}%`;
    });

    resetButton.addEventListener('click', function() {
        inputName.value = '';
        inputLover.value = '';
        output.value = '';
        heart.textContent = hearts[0];
        idx = 0;
    });
});

const output = document.getElementById('outputTextSync');

let intervalId = null;
let timeoutId = null;

syncButton.addEventListener('click', function() {
    clearInterval(intervalId);
    clearTimeout(timeoutId);

    let currentPercent = 0;
    output.textContent = '0%';

    intervalId = setInterval(() => {
        currentPercent = Math.floor(Math.random() * 101);
        output.textContent = `${currentPercent}%`;
    }, 50);

    timeoutId = setTimeout(() => {
        clearInterval(intervalId);
        const finalPercent = Math.floor(Math.random() * 101);
        output.textContent = `${finalPercent}%`;
    }, 5000);
});

resetButton.addEventListener('click', function() {
    inputName.value = '';
    inputLover.value = '';
    output.textContent = 'Result will appear here...';
    heart.textContent = hearts[0];
    idx = 0;
    clearInterval(intervalId);
    clearTimeout(timeoutId);
});
// ...existing code...
