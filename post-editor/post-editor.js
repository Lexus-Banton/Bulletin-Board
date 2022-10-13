/* Imports */
import '../auth/user.js';
import { createPost } from '../fetch-utils.js';

/* Dom Elements */
const postForm = document.getElementById('post-form');
const errorDisplay = document.getElementById('error-display');

/* state*/

let error = null;

/* Events*/

postForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(postForm);

    const post = {
        title: formData.get('title'),
        description: formData.get('description'),
        contact: formData.get('contact'),
        category: formData.get('category'),
    };

    const response = await createPost(post);
    error = response.error;

    if (error) {
        displayError();
    } else {
        //location.assign('/');
    }
});

/* Display Functions*/

function displayError() {
    if (error) {
        console.log(error);
        errorDisplay.textContent = error.message;
    } else {
        errorDisplay.textContent = '';
    }
}
