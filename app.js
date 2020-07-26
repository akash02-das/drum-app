window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');

    const colors = ["#081e83", "#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f"];

    // Lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubble(index);
        });
    });

    // Create a function that makes visualization
    const createBubble = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';

        bubble.addEventListener('animationend', () => {
            visual.removeChild(this);
        })
    }
});