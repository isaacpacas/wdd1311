const themeSelector = document.querySelector('#theme-select'); // selecting the dropdown element
const logo = document.querySelector('.logo'); // selecting the logo element

function changeTheme() {
    if (themeSelector.value === 'dark') {
        // If 'dark' theme is selected, applying the dark class and change logo to white
        document.body.classList.add('dark');
        logo.src = 'images/byui-logo_white.png'; // path of the white logo
    } else {
        // If any other theme or default is selected, removing the dark class and setting blue logo
        document.body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp'; // change to the path of the blue logo
    }
}

// Adding the event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);
