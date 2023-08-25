const cardWrapper = document.querySelector('.card-wrapper');
const glassesURL = "https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const dataArray = await response.json();
    return dataArray;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function createCard(element) {
  const card = document.createElement('a');
  card.setAttribute('class', 'card');
  card.href = "./card.html";
  card.addEventListener('click', () => {
    localStorage.setItem('card', element.id);
    console.log(element.id);
  });

  card.innerHTML = `
    <h1>${element.title}</h1>
    <img class="glasses-image" src="${element.photo}" alt="${element.title}">
    <p>${element.price}</p>
  `;

  return card;
}

async function displayCards() {
  const dataArray = await fetchData(glassesURL);
  
  dataArray.sort((a, b)=> a.title > b.title ? 1:-1).forEach((element) => {
    const card = createCard(element);
    cardWrapper.appendChild(card);
  });
}

displayCards();
