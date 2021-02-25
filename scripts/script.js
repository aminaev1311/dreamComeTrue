/* font awesome script */
let fontAwesomeScript = `
    <script src="https://kit.fontawesome.com/c930f1da88.js" crossorigin="anonymous"></script>
    <script src="script.js" defer></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">`;

/* google fonts */
/* <link rel="preconnect" href="https://fonts.gstatic.com"></link> */
let googleFonts = `
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>`;

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);

function domContentLoadedHandler() {
    let head = document.querySelector('head');
    head.insertAdjacentHTML('afterbegin', fontAwesomeScript);//adding font awesome
    head.insertAdjacentHTML('afterbegin', googleFonts);//adding google fonts
}

/* hiding and showing goal details */
let showGoalDetailsBtn = document.querySelector('#goal__show__details_1');
let goalDetailsDiv = document.querySelector('#goal__details_1');

showGoalDetailsBtn.addEventListener('click', () => {
    if (goalDetailsDiv.style.display === "none") {
        goalDetailsDiv.style.display = "block";
    } else {
        goalDetailsDiv.style.display = "none";
    }
});

/* hiding and showing goal actions - delete, copy, duplicate */
let actionsButton = document.querySelectorAll('.goal__actions__button');
let goalActionsOptions = document.querySelectorAll('.goal__actions')[0];

actionsButton.forEach( button => button.addEventListener('click', () => {
    if (goalActionsOptions.style.display === "none") {
        goalActionsOptions.style.display = "block";
        button.style.background = '#F6F8FB';
    } else {
        goalActionsOptions.style.display = "none";
        button.style.background = 'white';
    }
}));
