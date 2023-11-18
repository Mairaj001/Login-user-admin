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
let score=0;
let negScore=0;
let temp_index=-1;


let names=["I","You","He","She","It","He"];

function updateButtonPositions() {
   
  for (let i = 0; i < buttonCount; i++) {
    const button = container.children[i];
    const x = centralX + radius * Math.cos(angles[i]);
    const y = centralY + radius * Math.sin(angles[i]);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    angles[i] += 0; 
   
    button.textContent = names[i];
  }

  
}
for (let i = 0; i < buttonCount; i++) {
 
    const button = document.createElement('button');
    button.className = 'button';
    if(i===3)
    {
        button.style.background="orange";
    }
  
  
    container.appendChild(button);
    angles.push(( 2* Math.PI * i) / buttonCount);
    
    
    
}


updateButtonPositions();
let currentIndex=0;
const buttons = document.querySelectorAll('#spiral-container button');
function shiftColor() {
    buttons.forEach((button, index) => {
      if (index === currentIndex) {
        button.style.backgroundColor = 'orange';
      } else {
        button.style.backgroundColor = '';
      }
    });
  
    currentIndex = (currentIndex + 1) % buttons.length;
    console.log(currentIndex);
}



function submit_answer(text)
{
    input_field.value=text;
    
   

    for (const button of buttons) {
        temp_index++;
    const buttonColor = window.getComputedStyle(button).backgroundColor;
  
    if (buttonColor === 'rgb(255, 165, 0)' || buttonColor === 'orange') {
      console.log(`${button.textContent} has orange color`);
      let but_text=button.textContent;
      if(but_text==="You")
      {
        text==="are"?score++:negScore++;
      }
      else if(but_text==="I")
      {
        text==="Am"?score++:negScore++;
      }
      else{
        text==="Is"?score++:negScore++;

      }
      console.log(but_text,text,score,negScore);
       let intervals= setInterval(() => {
            button.classList.toggle('green')
         
        }, 420);
        let sec_int= setTimeout(() => {
            clearInterval(intervals);
            button.style.background=" #3498db"
            console.log("false");
            
         }, 2600);

        
           
     }
    
    
 }
 setTimeout(() => {
    set_interval();
    clearTimeout(sec_int);
}, 2600);

 
    
 

}

function set_interval()
{
    const interval = setInterval(() => {
        shiftColor();
      }, 220);
  
      setTimeout(() => {
        clearInterval(interval);
      }, 3000);
}