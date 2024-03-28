const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const redText = document.getElementById('redText');
const greenText = document.getElementById('greenText');
const blueText = document.getElementById('blueText');

// Se toma el valor por defecto en una variable
let redValue = inputRed.value;
let greenValue = inputGreen.value;
let blueValue = inputBlue.value;

//Se muestra el valor por defecto
redText.innerText = redValue;
greenText.innerText = greenValue;
blueText.innerText = blueValue;

//funcion actualizar color
function updateColor (redValue, greenValue, blueValue) {
  const colorRGB = `rgb(${redValue}, ${greenValue}, ${blueValue} )`
  document.body.style.backgroundColor = colorRGB;
}

//Listeners actualizar colores
inputRed.addEventListener('change', (e) => {
  redValue = e.target.value;
  redText.innerText = redValue;
  updateColor(redValue, greenValue, blueValue);
});

inputGreen.addEventListener('change', () => {
  greenValue = inputGreen.value;
  greenText.innerText = greenValue;
  updateColor(redValue, greenValue, blueValue);
});

inputBlue.addEventListener('change', (e) => {
  blueValue = e.target.value;
  blueText.innerText = blueValue;
  updateColor(redValue, greenValue, blueValue)
});

