// TYPING EFFECT

const text = "> whoami: Oluwatosin Ajinomisan - Security Analyst";

let index = 0;

function typeEffect() {

document.getElementById("typing").innerHTML = text.slice(0, index);

index++;

if(index <= text.length){
setTimeout(typeEffect, 70);
}

}

window.onload = typeEffect;


// PARTICLES

particlesJS("particles-js", {

particles: {

number: {
value: 60
},

size: {
value: 2
},

color: {
value: "#47c7ff"
},

line_linked: {
enable: true,
color: "#47c7ff"
},

move: {
speed: 1
}

}

});