//getting input from the airlines 
function getAirlineName(){
    let airlineName = document.getElementById("airline-input").value;
    alert(airlineName);
}

document.getElementById("airline-name-btn").addEventListener("click",getAirlineName);