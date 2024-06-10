function setProgress(progress, duration) {
    const circle = document.querySelector('.progress');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    circle.style.transition = `stroke-dashoffset ${duration}s ease-in-out`;
    circle.style.strokeDashoffset = offset;
    document.querySelector('.percentage').textContent = `${progress}%`;
}

window.onload = function() {
    setProgress(35, 0); // initialise la progression à 35% sans animation

    document.getElementById('validate-button').addEventListener('click', function() {
        setProgress(55, 1); // change la progression à 55% avec une animation de 1 seconde

        // Redirection vers index.html après 1 seconde
        setTimeout(function() {
            window.location.href = 'pagefelicitation.html';
        }, 1000); // 1000 millisecondes = 1 seconde
    });
};


