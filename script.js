document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const formMessage = document.getElementById('form-message');
    const ctaButton = document.getElementById('cta-button');

    // Function to handle the form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the form from submitting normally

        // Get values from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Simple validation
        if (name.trim() === '' || email.trim() === '') {
            formMessage.textContent = 'Please fill out both your name and email.';
            formMessage.classList.remove('hidden');
            return;
        }

        // --- Simulated Data Submission (In a real site, you'd send this to a server) ---
        console.log(`New Volunteer Signed Up: Name: ${name}, Email: ${email}`);

        // Display success message
        formMessage.textContent = `Thank you, ${name}! You have joined the movement. Check your email for updates!`;
        formMessage.classList.remove('hidden');

        // Clear the form
        signupForm.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
            formMessage.textContent = '';
        }, 5000);
    });

    // Function to make the Hero CTA button scroll to the sign-up section
    ctaButton.addEventListener('click', function() {
        const signupSection = document.getElementById('contact');
        if (signupSection) {
            signupSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
