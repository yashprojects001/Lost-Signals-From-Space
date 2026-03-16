// typing animation

let text = "Incoming Signal Detected... Origin: Unknown Sector... Decoding...";
let i = 0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,50);
}
}

if(document.getElementById("typing")){
typing();
}


// logs system

function showMessage(n){

let messages = {
1:"Weak radio waves detected beyond Neptune.",
2:"Signal structure does not match any human language.",
3:"Repeating mathematical pattern identified.",
4:"Decoded message: THEY ARE WATCHING."
};

document.getElementById("logOutput").innerText = messages[n];

}