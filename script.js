// Reserved for future interactivity or enhancements

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');
const modalCards = document.querySelectorAll('.graphic-design-card, .certificate-card');

modalCards.forEach(card => {
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

var buttons = document.querySelectorAll(".tab-button");

var contents = document.querySelectorAll(".tab-content");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        var tab = button.dataset.tab;

        contents.forEach(function (content) {
            content.classList.remove("active");
        });

        buttons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        document.getElementById(tab).classList.add("active");

        button.classList.add("active");
    });

});