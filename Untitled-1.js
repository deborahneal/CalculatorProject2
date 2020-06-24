/ create a variable and set it to the html document body.
let body = document.querySelector('body');

//console.log(body);
//set the text colorof the body (and all element)
body.setAttribute('style', 'color:navy');

let newButton = document.createElement('button');
body.appendChild(newButton);
newButton.innerHTML = "ADD";

let i = 0;

function addButtonClicked(){
    //alert("Try to click this button, ok!")
    //console.log('hit');

    let newHeader = document.createElement('h2');
    newHeader.setAttribute('id', i);
    newHeader.innerHTML = "Big Blue Balloon";
    body.appendChild(newHeader);
    
    i++;
  
    //console.log(newHeader);

}  

newButton.addEventListener('click', addButtonClicked);


let newButton2 = document.createElement('button');
body.appendChild(newButton2);
newButton2.innerHTML = "REMOVE";

function removeButtonClicked(){
    todelete = document.getElementById(i - 1);
    console.log(todelete);
    body.removeChild(todelete);

    i--;


}   

newButton2.addEventListener('click', removeButtonClicked);

console.log(body);


