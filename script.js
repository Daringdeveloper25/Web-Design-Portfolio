// Reserved for future interactivity or enhancements

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const graphicDesignCards = document.querySelectorAll('.graphic-design-card');

graphicDesignCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('.clickable-image');
        modal.classList.add('show');
        modalImage.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});