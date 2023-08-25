import { inputValidation } from "./validation.js";
const addBtn = document.getElementById('addBtn');
const message = document.getElementById('message');
const glassesURL = "https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard/";


function showMessage(msg, success = true) {
  message.innerHTML = msg;
  message.style.color = success ? "green" : "red";
  setTimeout(() => {
    message.innerHTML = "";
    message.style.color = "";
  }, 3000);
}

async function addGlasses() {
  const title = document.getElementById('title').value;
  const photo = document.getElementById('photo').value;
  const price = document.getElementById('price').value;

  const glassesCard = {
    title: title,
    photo: photo,
    price: price,
  };
  inputValidation()


  try {
    const response = await fetch(glassesURL, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(glassesCard)
    });

    if (response.ok) {
      showMessage("Success, glasses added!", true);
      setTimeout(() => {
        window.location.replace("./index.html");
      }, 3000);
    } else {
      showMessage("Failed to add glasses", false);
    }
  } catch (err) {
    showMessage("Failed to add glasses", false);
  }
}

addBtn.addEventListener('click', addGlasses);
