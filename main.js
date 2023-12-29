function random (){
   return Math.round(Math.random() * 100)
}

var secrets = [];
var easyness = 5
for(y = 0; y < easyness; y++) {
    secrets.push(random())
}

console.log(secrets)

var button = document.querySelector("button") 
var input = document.querySelector("input") 

input.value
input.focus();

var confirm = false

function verify() {
for (let x = 0; x < secrets.length; x++) {
    if(input.value == secrets[x]) {
        alert("Congratulations you Won")
        confirm = true
        break
    }
}

if (confirm == false) {
    alert("Wrong!!!")
}

confirm = false

input.value = "";
input.focus();
}

button.onclick = verify

