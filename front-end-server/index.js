 // import {something, somethingElse} from "./components.js";
 const serviceButton = document.getElementById('serviceBtn');
  const vehButton = document.getElementById('vehBtn');
  const custButton = document.getElementById('custBtn');
  let content = document.getElementById('content');
  const feedbackButton = document.getElementById('feedbackSubmit');
  const apiURL = "https://api-server-wb6x.onrender.com/";
  //const apiURL = "http://localhost:8000/";

  const form = document.getElementById('newCust');

  form.addEventListener('submit', function(e) {
      e.preventDefault();

      id = parseInt(document.querySelector("#customerId").value);
      customer_name = document.querySelector("#customerName").value;
      customer_phone_number = document.querySelector("#customerPhone").value;
      customer_feedback = document.querySelector("#customerFeedback").value.toString();
      let customer = {
        "id": id, 
        "customer_name": customer_name, 
        "customer_phone_number": customer_phone_number, 
        "customer_feedback": customer_feedback
      };
      console.log(customer);
      fetch(apiURL+'customers', {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(customer)
        

    })
    .then(res => {
      if(res.ok){console.log("POST request successful")}
      else {console.log("POST request unsuccessful")}
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  });



  const editName = document.getElementById('editNameForm');

  editName.addEventListener('submit', function(e) {
      e.preventDefault();
      console.log("I'm a Patch");
      myNameId = parseInt(document.querySelector("#editNameIdInput").value);
      myName = document.querySelector("#editNameInput").value;
      console.log(myNameId);
      
      let custNameEdit = {
        "customer_name": myName
      };
      console.log(custNameEdit);
      fetch(apiURL+`customers/${myNameId}`, {
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(custNameEdit)
        

    })
    .then(res => {
      if(res.ok){console.log("PATCH request successful")}
      else {console.log("PATCH request unsuccessful")}
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  });



  const editPhoneNum = document.getElementById('editPhoneForm');

  editPhoneNum.addEventListener('submit', function(e) {
      e.preventDefault();
      myNameId2 = parseInt(document.querySelector("#editPhoneIdInput").value);
      myPhone = document.querySelector("#editPhonInput").value;
      
      let custPhoneEdit = {
        "customer_name": myPhone
      };
      console.log(custPhoneEdit);
      fetch(apiURL+`customers/${myNameId2}`, {
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(custPhoneEdit)
        

    })
    .then(res => {
      if(res.ok){console.log("PATCH request successful")}
      else {console.log("PATCH request unsuccessful")}
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  });
  

  const editFeedbackNum = document.getElementById('editFeedbackForm');

  editFeedbackNum.addEventListener('submit', function(e) {
      e.preventDefault();
      myNameId3 = parseInt(document.querySelector("#editFeedbackIdInput").value);
      myFeedback = document.querySelector("#editFeedbackInput").value;
      
      let custFeedbackEdit = {
        "customer_feedback": myFeedback
      };
      console.log(custFeedbackEdit);
      fetch(apiURL+`customers/${myNameId3}`, {
        method:"PATCH",
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(custFeedbackEdit)
        

    })
    .then(res => {
      if(res.ok){console.log("PATCH request successful")}
      else {console.log("PATCH request unsuccessful")}
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  });



  const deleteRecord = document.getElementById('deleteIdForm');

  deleteRecord.addEventListener('submit', function(e) {
      e.preventDefault();
      myNameId4 = parseInt(document.querySelector("#deleteIdInput").value);

      
      let custRecordDelete = {
        "id": myNameId4
      };
      console.log(custRecordDelete);
      fetch(apiURL+`customers/${myNameId4}`, {
        method:"DELETE",
        mode: 'cors',
    })
    .then(res => {
      if(res.ok){console.log("DELETE request successful")}
      else {console.log("DELETE request unsuccessful")}
      return res
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


  });

  
 
  serviceButton.addEventListener('click', getServicedata);
  // vehButton.addEventListener('click', getVehicleData);
  // custButton.addEventListener('click', getCustomerInfo);
   
  
function getServicedata(){


  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    //mode: "no-cors"
  }
  
  fetch(apiURL+"servicerepair", requestOptions)
    .then(response => response.json())
    .then(result => {
    

      JSON.parse(displayServices(result));
        
    // something();
    // somethingElse();
    })
    .catch(error => console.log('error', error));

  }
       
function displayServices(results){
  const displayArea = document.getElementById('displayArea');
  // var mydiv = document.getElementById('FirstDiv');
  //console.log(displayArea);
while(displayArea.firstChild) {
  displayArea.removeChild(displayArea.firstChild);
}
  
for(let i = 0; results.length; i++){
    
    const services = results[i];
    //console.log(results);
    const symptom = services.symptom;
    const repair = services.service_repair;
    const techName = services.tech_name;
    const customer = services.cust_name;

    const ul = document.createElement('ul');
    const name = document.createElement('h1');
    name.innerText = "Customer: " + customer;
    const image = document.createElement('img');
    image.src = results[i].img;
    const liSymptom = document.createElement('li');
    liSymptom.innerText = "Symptom: " + symptom;
    const liRepair = document.createElement('li');
    liRepair.innerText = "Repair: " + repair;
    const liTechName = document.createElement('li');
    liTechName.innerText = "Technician: " + techName;

    ul.appendChild(name);
    ul.appendChild(image);
    ul.appendChild(liSymptom);
    ul.appendChild(liRepair);
    ul.appendChild(liTechName);

    displayArea.appendChild(ul);
    
   
}
}



  
  