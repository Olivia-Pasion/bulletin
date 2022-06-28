
import { checkAuth, createPost, logout, redirectIfLoggedIn } from '../fetch-utils.js';

checkAuth();

const userNav = document.getElementById('user-nav');
const [logoutButton, homeButton] = userNav.querySelectorAll('button');

logoutButton.addEventListener('click', () => {
    logout();
});

homeButton.addEventListener('click', () => {
    redirectIfLoggedIn();
});

const postForm = document.getElementById('post-form');
postForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const data = new FormData(postForm);
    await createPost({
        title: data.get('title'),
        description: data.get('description'),
        contact: data.get('contact'),
    });
    location.replace('/');
});

