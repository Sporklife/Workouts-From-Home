let counter = parseInt(localStorage.getItem('counter')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;


document.getElementById('counter').innerText = counter;


function getStreak() {
    document.getElementById('streak').innerText = streak; 
}


function resetStreak() {
    streak = 0;
    localStorage.setItem('streak', streak);
    document.getElementById('streak').innerText = streak;
}