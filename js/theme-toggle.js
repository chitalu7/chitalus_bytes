document.addEventListener("DOMContentLoaded", function() {
    const themeIcon = document.querySelector('.theme-icon');
    const themeSwitch = document.getElementById('theme-switch');
    const themeText = document.getElementById('theme-text'); // New element for theme text

    // Load user's previous theme preference (if any) from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light-theme'; // Default to light-theme
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(currentTheme);

    // Update icon, checkbox state, and theme text
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark-theme' ? '☀️' : '🌙';
    }
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'dark-theme';
    }
    if (themeText) {
        themeText.textContent = currentTheme === 'dark-theme' ? 'Light Theme' : 'Dark Theme';
    }

    // Toggle between light and dark theme
    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.body.classList.replace('light-theme', 'dark-theme');
                themeIcon.textContent = '☀️'; // Sun icon in dark mode
                themeText.textContent = 'Light Theme'; // Update theme text to indicate the current theme is dark
                localStorage.setItem('theme', 'dark-theme');
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                themeIcon.textContent = '🌙'; // Moon icon in light mode
                themeText.textContent = 'Dark Theme'; // Update theme text to indicate the current theme is light
                localStorage.setItem('theme', 'light-theme');
            }
        });
    }
});
