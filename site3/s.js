const themeBtn = document.getElementById('themeToggle');
let isDark = true;
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    isDark = !isDark;
    themeBtn.textContent = isDark ? '🌙 Тёмная тема' : '☀️ Светлая тема';
});

const adviceList = [
    "Не бойся ошибаться — ошибки делают тебя лучше.",
    "Маленькие шаги ведут к большим целям.",
    "Ты способен на большее, чем думаешь.",
    "Начни сегодня — завтра будет поздно.",
    "Будь настойчивым — успех любит упорных.",
    "Окружай себя теми, кто в тебя верит.",
    "Делай то, что нравится, и ты никогда не устанешь."
];
const adviceEl = document.getElementById('advice');
document.getElementById('generateBtn').addEventListener('click', function() {
    const idx = Math.floor(Math.random() * adviceList.length);
    adviceEl.textContent = adviceList[idx];
});