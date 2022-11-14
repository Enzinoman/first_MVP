 // import {something, somethingElse} from "./components.js";
 const serviceButton = document.getElementById('serviceBtn');
  const vehButton = document.getElementById('vehBtn');
  const custButton = document.getElementById('custBtn');
  let content = document.getElementById('content');

 
 
  serviceButton.addEventListener('click', getServicedata);
  // vehButton.addEventListener('click', getVehicleData);
  // custButton.addEventListener('click', getCustomerInfo);
   
  
function getServicedata(){


  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    //mode: "no-cors"
  }
  
  fetch("http://localhost:8000/servicerepair", requestOptions)
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
  console.log(displayArea);
while(displayArea.firstChild) {
  displayArea.removeChild(displayArea.firstChild);
}
  
for(let i = 0; results.length; i++){
    
    const services = results[i];
    console.log(results);
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


/* const form = document. getElementById('form');

form.addEventListener('submit', function(e) 
   e.preventDefault();

   const payLoad = new FormData(form);

   console.log([...payload]);

fetch('http://localhost:8000/servicerepair'){

method: "POST",
body: payload,

}

.then(res => res,json())
.then(data => console.log(data))
.catch(err => console.log(err));


}) */



 /* const getVehiclesInShop = fetch("http://localhost:8015/vehicles", requestOptions)
        .then(response => response.text())
        .then(result => {
            

        })
        .catch(error => console.log('error', error));





        
  const getAwaitingCustomers = fetch("http://localhost:8015/customers", requestOptions)
        .then(response => response.text())
        .then(result => {
            




        })
        .catch(error => console.log('error', error));




  
   fetch("https://emojihub.herokuapp.com/api/all/group_face_positive", requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result);
          
  
  
          
          function convertStringToUnicode(str){
            let unicode = str;
            let newString = "";
            for(let x = 2; x < unicode.length; x++){
                newString += unicode[x];
            }
            return newString;
          }
  
          let form = document.createElement('form');
          let b = document.createElement('b');
          let select = document.createElement('select');
  
          for(let d = 0; d < result.length; d++){
            let option = document.createElement('option');
            option.innerText = result[d].name;
            unicodeOriginal = result[d].unicode[0];
            function ChangeEmoji(originalUnicode){
  
              let startUnicode = originalUnicode;
              let intermittentUnicodeString = convertStringToUnicode(startUnicode);
              let finalUnicode = String.fromCodePoint(parseInt (intermittentUnicodeString, 16));
              document.getElementById('emojiImgP').innerText = finalUnicode;
              document.getElementById('nameLabel').innerText= result[d].name;
  
            };
            option.addEventListener('click', ChangeEmoji(unicodeOriginal));
           
            
            
            select.appendChild(option);
  
          
        }
        b.appendChild(select);
        form.appendChild(b);
        document.getElementById('emojiInput').appendChild(form);
          
          
  
            
           /* 
  <form>  
  <b> Select you favourite tutorial site using dropdown list </b>  
  <select id = "myList" onchange = "favTutorial()" >  
  <option> ---Choose tutorial--- </option>  
  <option> w3schools </option>  
  <option> Javatpoint </option>  
  <option> tutorialspoint </option>  
  <option> geeksforgeeks </option>  
  </select>  
  <p> Your selected tutorial site is:   
  <input type = "text" id = "favourite" size = "20" </p>  
  </form>  */
  
       
  
  
          /* searchButton.addEventListener("click", function(event){
              
              let someMatch = false;
              let exactmatch = false;
              
              let longString = "The following is a list of emojis in our database with similarities to your search. Those emojis whose names are repeated, have multiple word matches to your query, in their names. You can copy and paste one of the emoji names listed and enter it into the input/search: ";
            for(let i = 0; i < result.length; i++){
              let string = result[i].name;
              let strUnicode = result[i].unicode[0];
              
              //console.log(typeof result[i].name);
              if(emojiSearch.value.toLowerCase() == string.toLowerCase() && exactmatch == false){
                console.log("success!");
  
                let finalUnicodeString = convertStringToUnicode(strUnicode);
                let realUnicode = String.fromCodePoint(parseInt (finalUnicodeString, 16));
  
                document.getElementById('emojiImgP').innerText = realUnicode;
                document.getElementById('nameLabel').innerText= "          " + result[i].name;
                alert("You've found the emoji you're looking for!");
                someMatch = true;
                exactmatch = true;
                
              }else {
  
                
                    
  
  
                
              
                if(exactmatch == false && i == result.length-1){
                  alert("no match found. You may use the select / drop-down menu below to pick an emoji or continue to search on your own.")
      
                  }
              
            }
            
            
          }})
      })
       
      .catch(error => console.log('error', error)
      
        ) */


  
  