// script.js
document.querySelector('.btn-connect').addEventListener('click', () => {
    alert('Let’s connect and build amazing projects together!');
});

// تغییر زاویه کارت با حرکت موس
const card = document.querySelector('.profile-card');
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 25;
    const y = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
