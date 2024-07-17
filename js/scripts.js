
import  formspree  from "./config.js";
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('submitSuccessMessage');
    const errorMessage = document.getElementById('submitErrorMessage');

    form.setAttribute('action', `https://formspree.io/f/${formspree}`);

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        try {
            const formData = new FormData(form);
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                successMessage.classList.remove('d-none');
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            errorMessage.classList.remove('d-none');
        }
    });
});
