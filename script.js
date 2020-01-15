function generate(){

let complexity = document.getElementById("charNum").value;

let values = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";

let password = "";

for(var i = 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

document.getElementById("display").value = password;

    
}

function copyPassword(){

document.getElementById("display").select();

document.execCommand("Copy");

alert("Password copied to clipboard");

}





