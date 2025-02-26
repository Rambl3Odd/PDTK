document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('workshopToggle');
    const content = document.getElementById('workshopContent');

    if (toggleButton && content) { // Safety check to prevent null errors
        toggleButton.addEventListener('click', toggleAccordion);
        toggleButton.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion();
            }
        });

        function toggleAccordion() {
            const arrow = toggleButton.querySelector('.arrow');
            const isExpanded = content.style.display === 'block';
            
            content.style.display = isExpanded ? 'none' : 'block';
            toggleButton.classList.toggle('active', !isExpanded);
            toggleButton.setAttribute('aria-expanded', !isExpanded);
        }
    } else {
        console.error('Elements workshopToggle or workshopContent not found in the DOM.');
    }
});
