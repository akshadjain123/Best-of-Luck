function showSurprise() {
    const balloonContainer = document.querySelector('.balloons');
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = `${Math.random() * 3 + 5}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloonContainer.appendChild(balloon);
    }
    displayMessage();
}

function getRandomColor() {
    const colors = ['#ff69b4', '#32cd32', '#1e90ff', '#ff6347', '#ffd700', '#8a2be2'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayMessage() {
    const message = document.createElement('div');
    message.classList.add('final-message');
    message.innerText = 'You Got This! All the Best for Your CA Exams!';
    document.body.appendChild(message);
}

document.body.onload = () => {
    setTimeout(showSurprise, 2000);
};
