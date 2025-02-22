const patrat = document.querySelectorAll('.patrat');
patrat.addEventListener("onclick", () => {
    patrat.forEach(patrat => {
        patrat.style.backgroundColor = getRandomColor();
    });
})
