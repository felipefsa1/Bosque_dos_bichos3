// cards
const hiddenCards = document.querySelectorAll('.hidden-card');

const revealCards = () => {
    hiddenCards.forEach(card => {
        const windowHeight = window.innerHeight;
        const cardTop = card.getBoundingClientRect().top;
        const revealPoint = 100;

        if (cardTop < windowHeight - revealPoint) {
            card.classList.add('show-card');
        }
    });
};

window.addEventListener('scroll', revealCards);
revealCards();

// modal
function agendarPet() {
  alert("Agendamento realizado com sucesso 🐶");
}

        