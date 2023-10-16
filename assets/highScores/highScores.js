// Here I will write the logic for this page of the project to retrieve the highdcores from local storage and dynamically display them in decending order
document.addEventListener("DOMContentLoaded", function() {
    const highScoresList = document.getElementById("high-scores-list")
    // Retrieve Items from local storage
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    // Display highscores in decending order 
    highScores.sort((a,b) => b.score - a.score);
    highScores.forEach((score, index) => {
        const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${score.name}: ${score.score}`;
            highScoresList.appendChild(listItem);
    })
})

