document.addEventListener("DOMContentLoaded", function() {
    // Your theme toggle logic
    const themeIcon = document.querySelector('.theme-icon');
    const themeSwitch = document.getElementById('theme-switch');

    // Load user's previous theme preference (if any) from localStorage
    const currentTheme = localStorage.getItem('theme') || 'light-theme'; // Default to light-theme
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(currentTheme);

    // Update icon and checkbox state
    if (themeIcon) {
        themeIcon.textContent = currentTheme === 'dark-theme' ? '☀️' : '🌙';
    }
    if (themeSwitch) {
        themeSwitch.checked = currentTheme === 'dark-theme';
    }

    // Toggle between light and dark theme
    if (themeSwitch) {
        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                document.body.classList.replace('light-theme', 'dark-theme');
                themeIcon.textContent = '☀️'; // Sun icon in dark mode
                localStorage.setItem('theme', 'dark-theme');
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                themeIcon.textContent = '🌙'; // Moon icon in light mode
                localStorage.setItem('theme', 'light-theme');
            }
        });
    }
});
