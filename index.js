function displayColors(colors) { 
  const myColorsHtml = colors.map(color => {
    return `<div class="my-color" style="background-color: ${color.value}"></div>`
  }).join('');

  document.body.innerHTML = `<div class="my-colors">${myColorsHtml}</div>`;
}


async function getColors() { 
  const response = await fetch('https://api.noopschallenge.com/hexbot?count=25');
  const data = await response.json();
  const colors = await data.colors;
  
  displayColors(colors);
}
getColors();