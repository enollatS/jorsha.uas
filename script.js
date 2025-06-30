function toggleTheme() {
  document.body.classList.toggle('light-theme');
}

const backgroundColors = [
  '#181818', 
  '#2F4F4F', 
  '#4682B4', 
  '#6A5ACD', 
  '#B22222', 
  '#FF8C00'  
];
let colorIndex = 0;
let intervalId = null;

function changeBackgroundColor() {
  colorIndex = (colorIndex + 1) % backgroundColors.length;
  document.body.style.backgroundColor = backgroundColors[colorIndex];
}

function toggleBackgroundColors() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    alert('Penggantian background dihentikan.');
  } else {
    intervalId = setInterval(changeBackgroundColor, 3000);
    alert('Penggantian background setiap 3 detik!');
    changeBackgroundColor();
  }
}
