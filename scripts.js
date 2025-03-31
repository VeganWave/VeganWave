// Add JavaScript for:
// 1. Size toggles (500ml vs 1L)
// 2. Cart functionality
// 3. Subscription plan selection

document.addEventListener('DOMContentLoaded', function() {
    // Example: Toggle between 500ml and 1L prices
    const sizeButtons = document.querySelectorAll('.size-option');
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            // Logic to switch prices
        });
    });
});
