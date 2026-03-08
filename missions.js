let xp = 0;
let completed = 0;

const totalMissions = 5;

function completeMission(button, xpReward){

if(button.classList.contains("completed")){
return;
}

xp += xpReward;
completed++;

document.getElementById("xp").textContent = xp;

button.textContent = "Completed ✓";
button.classList.add("completed");

updateProgress();

}

function updateProgress(){

let percent = (completed / totalMissions) * 100;

document.getElementById("progress").style.width = percent + "%";

}