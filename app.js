// import services and utilities

import { getPosts, getUser, logout } from './fetch-utils.js';
import { renderPostIt } from './render-utils.js';

// import component creators


// declare state variables
const bulletin = document.getElementById('board');
const loginButton = document.getElementById('login-button');
const createButton = document.getElementById('create-button');


// write handler functions

window.addEventListener('load', async() => {
    const user = await getUser();
        
    if (user) {
        loginButton.addEventListener('click', logout);
        loginButton.textContent = 'Logout';
            
    } else {
        loginButton.addEventListener('click', () => {
            location.replace('./auth');
        });
        loginButton.textContent = 'Login';
    }
    
    createButton.addEventListener('click', () => {
        location.replace('./create');
    });
    
    const posts = await getPosts();
    for (let post of posts) {
        const postDiv = renderPostIt(post);
        bulletin.append(postDiv);
    }
        
});


// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 


// Roll-up display function that renders (calls with state) each component
function display() {
    
    // Call each component passing in props that are the pieces of state this component needs
}

// Call display on page load
display();
