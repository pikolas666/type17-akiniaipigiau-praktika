const itemId = localStorage.getItem('card');

const getData = async ()=> {
    const data = await fetch("https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard/" + itemId);
    const card = await data.json();
    const photo = document.getElementById('photo');
    photo.src = card.photo;
    const title = document.getElementById('title');
    title.innerHTML = card.title;
    const price = document.getElementById('price');
    price.innerHTML = "Price - " + card.price + " EUR";
    const deleteBtn = document.getElementById('deleteBtn');
    deleteBtn.addEventListener('click', deleteCard)
}
getData()

const deleteCard = async ()=>{
       
try{
    const response = await fetch("https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard/" + itemId, {
        method: 'DELETE',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify()
    });
    const data= await response.json()
    // if (response.ok) {
    if(data){
        message.innerHTML = "Success, glasses Deleted!"
        setTimeout(()=>{
            window.location.replace("./index.html");
        },5000)
        }
} catch(err){
     message.innerHTML ="Failed to delete glasses";
 }
    }
    