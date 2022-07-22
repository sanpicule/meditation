const container = document.querySelector(".container");
const text = document.getElementById("text");

let totalTime = 7500;
let breathTime = (totalTime / 5) * 2;
let holdTime = totalTime / 5;


const meditateAnimation = () => {
  text.innerHTML = "吸って！"
  container.classList = "container grow"
  
  setTimeout(() => {
    text.innerHTML = "止めて！"
    
    setTimeout(() => {
      text.innerHTML = "吐いて！"
      container.classList = "container shrink"

    }, holdTime)
  }, breathTime)
}


meditateAnimation();
setInterval(meditateAnimation, totalTime);