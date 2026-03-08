let streak = Number(localStorage.getItem("streak")) || 0;
let xp = Number(localStorage.getItem("xp")) || 0;
let level = Number(localStorage.getItem("level")) || 1;

document.getElementById("streak").textContent = streak;

function startWorkout(workout, xpReward){

alert("Workout Started: " + workout);

xp += xpReward;

if(xp >= 100){
xp -= 100;
level++;
alert("🎉 Level Up! You are now Level " + level);
}

localStorage.setItem("xp", xp);
localStorage.setItem("level", level);

}

function logWorkout(){

streak++;

localStorage.setItem("streak", streak);

document.getElementById("streak").textContent = streak;

alert("Workout logged! 🔥");

}