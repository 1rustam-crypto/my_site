const themeBtn = document.getElementById('themeToggle');
let isDark = true;
themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('light');
    isDark = !isDark;
    themeBtn.textContent = isDark ? '🌙 Тёмная тема' : '☀️ Светлая тема';
});