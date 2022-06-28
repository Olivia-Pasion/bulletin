import { redirectIfLoggedIn, signInUser, signUpUser } from '../fetch-utils.js';

const authSection = document.getElementById('auth-section');
const [signIn, signUp] = authSection.querySelectorAll('form');
const [inEmail, inPassword, upEmail, upPassword] = authSection.querySelectorAll('input');

redirectIfLoggedIn();

signIn.addEventListener('submit', async(e) => {
    e.preventDefault();
    const user = await signInUser(inEmail.value, inPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});

signUp.addEventListener('submit', async(e) => {
    e.preventDefault();
    const user = await signUpUser(upEmail.value, upPassword.value);

    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});


