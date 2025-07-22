document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const topic = card.getAttribute('data-topic');
        if (topic.toLowerCase().includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
