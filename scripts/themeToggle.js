function themeToggle() {
    const theme = getCookie('theme');
    const themeStyle = document.getElementById('theme-style');

    if (theme === 'dark') {
        themeStyle.setAttribute('href', 'styles/dark.css');
    } else {
        themeStyle.setAttribute('href', 'styles/light.css');
    }
}

document.querySelector('.switch').addEventListener('click', themeToggle);

window.onload = function() {
    const theme = getCookie('theme');
    if (theme === 'dark') {
        document.getElementById('theme-style').setAttribute('href', 'styles/dark.css');
    } else {
        document.getElementById('theme-style').setAttribute('href', 'styles/light.css');
    }
};

const switchButton = document.querySelector('.switch');

switchButton.addEventListener('click', () => {
    themeStyle.setAttribute('href', 'styles/dark.css');
});
