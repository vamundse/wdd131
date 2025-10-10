let numberVisits = Number(localStorage.getItem("numberVisits-ls")) || 0;
numberVisits++;
localStorage.setItem("numberVisits-ls", numberVisits);
