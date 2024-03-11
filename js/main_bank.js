function toggleCard() {
    const card = document.querySelector('.flip-card-inner');
    card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
}
  