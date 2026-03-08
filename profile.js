function saveProfile(){

const name = document.getElementById("name").value;
const age = document.getElementById("age").value;
const height = document.getElementById("height").value;
const weight = document.getElementById("weight").value;
const goal = document.getElementById("goal").value;

localStorage.setItem("name", name);
localStorage.setItem("age", age);
localStorage.setItem("height", height);
localStorage.setItem("weight", weight);
localStorage.setItem("goal", goal);

displayProfile();

}

function displayProfile(){

document.getElementById("displayName").textContent = localStorage.getItem("name");
document.getElementById("displayAge").textContent = localStorage.getItem("age");
document.getElementById("displayHeight").textContent = localStorage.getItem("height");
document.getElementById("displayWeight").textContent = localStorage.getItem("weight");
document.getElementById("displayGoal").textContent = localStorage.getItem("goal");

}

displayProfile();