const addBtn = document.getElementById('addBtn');
const message = document.getElementById('message');

const addGlasses = async ()=>{
    const title = document.getElementById('title').value;
    const photo = document.getElementById('photo').value;
    const price = document.getElementById('price').value;

    const glassesCard = {
        title: title,
        photo: photo,
        price: price,
       
          }

    try{
        const response = await fetch('https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(glassesCard)
    });
    const data= await response.json()
    // if (response.ok) {
    if(data){
        message.innerHTML = "Success, glasses added!"
        setTimeout(()=>{
            window.location.replace("./index.html");
        },3000)
    }
} catch(err){
    message.innerHTML ="Failed to add glasses";
}
}
addBtn.addEventListener('click', addGlasses)