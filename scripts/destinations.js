function getDestinationData(){
    let destinationCity = document.getElementById("inputCity").value;
    let airline = document.getElementById("inputAirline").value;
    let price = document.getElementById("PriceInput").value;
    let travelTime = document.getElementById("nrHours").value;
    let availableDate = document.getElementById("dateInput").value;
    alert(destinationCity);
    alert(airline);
    alert(price);
    alert(travelTime);
    alert(availableDate);

}

 document.getElementById("add-destination-btn").addEventListener("click",getDestinationData);
