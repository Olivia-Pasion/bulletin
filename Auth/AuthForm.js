

export default function createAuthForm(form, { handleAuth }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        handleAuth(
            formData.get('email'),
            formData.get('password')
        );
    });
    return () => {};
}



async function handleSignIn(email, password) {
    const response = await signInUser(email, password);
    checkAuth(response);
}

async function handleSignUp(email, password) {
    const response = await signUpUser(email, password);
    checkAuth(response);
}
