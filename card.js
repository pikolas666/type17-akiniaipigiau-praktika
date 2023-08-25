const itemId = localStorage.getItem('card');
const glassesURL = "https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard/";

async function fetchCardData(itemId) {
  try {
    const response = await fetch(glassesURL + itemId);
    const card = await response.json();
    return card;
  } catch (error) {
    console.error("Error fetching card data:", error);
    return null;
  }
}

function updateCardUI(card) {
  const photo = document.getElementById('photo');
  photo.src = card.photo;
  
  const title = document.getElementById('title');
  title.innerHTML = card.title;
  
  const price = document.getElementById('price');
  price.innerHTML = `Price - ${card.price} EUR`;
  
  const deleteBtn = document.getElementById('deleteBtn');
  deleteBtn.addEventListener('click', deleteCard);
}

async function deleteCard() {
  const message = document.getElementById('message');
  
  try {
    const response = await fetch(glassesURL + itemId, {
      method: 'DELETE',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    });

    if (response.ok) {
      const data = await response.json();
      if (data) {
        message.innerHTML = "Success, glasses Deleted!";
        setTimeout(() => {
          window.location.replace("./index.html");
        }, 5000);
      }
    } else {
      message.innerHTML = "Failed to delete glasses";
    }
  } catch (err) {
    message.innerHTML = "Failed to delete glasses";
  }
}

async function init() {
  const card = await fetchCardData(itemId);
  if (card) {
    updateCardUI(card);
  }
}

init();
