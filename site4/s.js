const themeBtn = document.getElementById('themeToggle');
let isDark = true;
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    isDark = !isDark;
    themeBtn.textContent = isDark ? '🌙 Тёмная тема' : '☀️ Светлая тема';
});

let seconds = 0, timerId = null;
const display = document.getElementById('display');
function updateDisplay() {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    display.textContent = `${m}:${s}`;
}
document.getElementById('startBtn').addEventListener('click', function() {
    if (timerId !== null) return;
    timerId = setInterval(() => { seconds++; updateDisplay(); }, 1000);
});
document.getElementById('resetBtn').addEventListener('click', function() {
    clearInterval(timerId); timerId = null; seconds = 0; updateDisplay();
});
updateDisplay();