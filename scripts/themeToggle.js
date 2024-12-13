function themeToggle() {
    const theme = getCookie('theme');
    const themeStyle = document.getElementById('theme-style');

    if (theme === 'dark') {
        themeStyle.setAttribute('href', 'styles/dark.css');
    } else {
        themeStyle.setAttribute('href', 'styles/light.css');
    }
}
