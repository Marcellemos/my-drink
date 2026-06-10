const items = document.querySelectorAll('.item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let current = 0;

function showSlide(index) {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

next.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showSlide(current);
});

prev.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showSlide(current);
});