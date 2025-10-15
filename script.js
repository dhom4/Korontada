document.addEventListener('DOMContentLoaded', () => {
    const quoteForm = document.getElementById('quote-form');
    const formMessage = document.getElementById('form-message');

    // Function to handle the form submission
    quoteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission

        // Get values from the form
        const name = document.getElementById('form-name').value;
        const phone = document.getElementById('form-phone').value;
        const details = document.getElementById('form-details').value;

        // Simple validation
        if (name.trim() === '' || phone.trim() === '' || details.trim() === '') {
            formMessage.textContent = 'Fadlan buuxi dhammaan meelaha banaan.'; // Please fill out all fields.
            formMessage.style.color = 'red';
            formMessage.classList.remove('hidden');
            return;
        }
        
        // --- Simulated Lead Submission (In a real site, you'd send this to a CRM or database) ---
        console.log(`New Service Lead: 
            Name: ${name}, 
            Phone: ${phone}, 
            Details: ${details}`
        );

        // Display success message
        formMessage.textContent = `Waad ku mahadsantahay, ${name}! Waxaan helnay codsigaaga, waana ku soo wacaynaa 15 daqiiqo gudahood!`; // Thank you, [name]! We received your request and will call you back within 15 minutes!
        formMessage.style.color = 'green';
        formMessage.classList.remove('hidden');

        // Clear the form
        quoteForm.reset();

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
            formMessage.textContent = '';
        }, 8000);
    });
});
