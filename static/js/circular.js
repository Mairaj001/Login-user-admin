const container = document.getElementById('spiral-container');
let input_field=document.getElementById('input-field');
const buttonCount = 6;
const centralX = 130;
const centralY = 150;
const radius = 70;
let angles = [];
let animationTime = 0;
const animationDuration = 3230; 
let speed=0;
let time_out=null;


let names=["I","You","He","She","It","He"];


function updateButtonPositions() {
   
  for (let i = 0; i < buttonCount; i++) {
    const button = container.children[i];
    const x = centralX + radius * Math.cos(angles[i]);
    const y = centralY + radius * Math.sin(angles[i]);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    angles[i] += 0.075; 
    const randomIndex = Math.floor(Math.random() * names.length);
    button.textContent = names[randomIndex];
  }

  animationTime += 78;
  if (animationTime < animationDuration) {
    requestAnimationFrame(updateButtonPositions);
     firstButton = container.children[0];
    firstButton.style.backgroundColor = '#3498db';
  } else {
    animationTime = 0; 
    angles = angles.map((_, i) => (2 * Math.PI * i) / buttonCount);
    const firstButton = container.children[0];
    firstButton.style.backgroundColor = 'orange';
    firstButton.classList.add('hovicon', 'effect-8');
  }
}


for (let i = 0; i < buttonCount; i++) {
 
  const button = document.createElement('button');
  button.className = 'button';


  container.appendChild(button);
  angles.push(( 2* Math.PI * i) / buttonCount);
  
  
  
}


function restartAnimation(text) {
    let first= container.firstElementChild;
     console.log(first);
     first.classList.add('anim');
    input_field.value=text;

    time_out=setTimeout(() => {
    animationTime = 0; 
    angles = angles.map((_, i) => (2 * Math.PI * i) / buttonCount); // Reset angles
    rotate(); 
   }, 2000);
    
  

}

function rotate()
{
    container.firstElementChild.classList.remove('anim');
    clearTimeout(time_out);
    setTimeout(() => {
        updateButtonPositions();
      }, 0);
}

rotate();
