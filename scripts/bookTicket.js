
// function getDestinationData(){
    //     let destinationCity = document.getElementById("inputCity").value;
    //     let airline = document.getElementById("inputAirline").value;
    //     let price = document.getElementById("PriceInput").value;
    //     let travelTime = document.getElementById("nrHours").value;
    //     let availableDate = document.getElementById("dateInput").value;
    //     alert(destinationCity);
    //     alert(airline);
    //     alert(price);
    //     alert(travelTime);
    //     alert(availableDate);
    
    // }
    
    //  document.getElementById("add-destination-btn").addEventListener("click",getDestinationData);
    
    
    
//show the hidden form *must add condition to have a ticked available at selected date 
document.getElementById('showFormBtn').addEventListener('click', function() {
    //get the date
    let date = document.getElementById("dateInput").value;
    //check if there are any ticket in the selected date
    if(true){
        document.getElementById('hiddenForm').classList.remove('d-none');
    }
});


//get the data of the client
function clientData(){
    let clientName = document.getElementById("nameInput").value;
    let destination = document.getElementById("inputTicket").value;
    alert(clientName);
    alert(destination);
}

document.getElementById("submit-ticket").addEventListener("click",clientData);

