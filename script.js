// =============================
// Smooth Scroll Navigation
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior: "smooth"

});

});

});

// =============================
// Scroll Reveal Animation
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

sections.forEach((section)=>{

section.classList.add("hidden");

observer.observe(section);

});

// =============================
// Typing Effect
// =============================

const typingText = [
"Cyber Security Student",
"Ethical Hacker",
"Penetration Tester",
"Web Security Enthusiast"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === typingText.length){
count = 0;
}

currentText = typingText[count];
letter = currentText.slice(0, ++index);

const heading = document.querySelector(".hero h2");

if(heading){
heading.textContent = letter;
}

if(letter.length === currentText.length){

count++;

index = 0;

setTimeout(type, 1500);

}else{

setTimeout(type, 100);

}

})();

// =============================
// Navbar Glow on Scroll
// =============================

window.addEventListener("scroll",()=>{

const nav = document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow =
"0 5px 25px rgba(0,198,255,.25)";

}else{

nav.style.boxShadow = "none";

}

});

// =============================
// Mouse Glow Effect
// =============================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.background = "rgba(0,198,255,.5)";
glow.style.pointerEvents = "none";
glow.style.filter = "blur(10px)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX - 10 + "px";
glow.style.top = e.clientY - 10 + "px";

});

// =============================
// Project Card Hover Tilt
// =============================

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/15;
const rotateY = (x - rect.width/2)/15;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// =============================
// Floating Skills Animation
// =============================

document.querySelectorAll(".skill").forEach((skill,index)=>{

skill.style.animation =
`floatSkill 3s ease-in-out ${index*0.1}s infinite`;

});

// Add animation dynamically

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatSkill{
0%,100%{
transform:translateY(0px);
}
50%{
transform:translateY(-8px);
}
}
`;

document.head.appendChild(style);