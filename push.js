let counter = parseInt(localStorage.getItem('counter')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;


document.getElementById('counter').innerText = counter;

d
function addcount() {
    counter++; 
    streak++;  
    document.getElementById('counter').innerText = counter; 
    localStorage.setItem('counter', counter); 
    localStorage.setItem('streak', streak);   
}