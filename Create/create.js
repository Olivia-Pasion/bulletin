
import { createPost } from '../fetch-utils.js';

const userNav = document.getElementById('user-nav');
const [logoutButton, homeButton] = userNav.querySelectorAll('button');

const postForm = document.getElementById('post-form');
const postContent = postForm.querySelector('div');
const [title, description, contact] = postForm.querySelectorAll('input');
const postButton = postForm.querySelector('button');



postContent.addEventListener('submit', async(e) => {
    e.preventDefault();

    await createPost(title.value, description.value, contact.value);
 
});