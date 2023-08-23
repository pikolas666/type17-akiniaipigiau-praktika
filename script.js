const cardWrapper = document.querySelector('.card-wrapper');


const getData = async ()=> {
const data = await fetch("https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard");
const dataArray = await data.json();
dataArray.forEach(element => {
    const card = document.createElement('a');
    card.setAttribute('class', 'card');
    card.href = "./card.html";
    card.addEventListener('click',()=>{
        localStorage.setItem('card', element.id)
        console.log(element.id);
    })

    const title = document.createElement('h1');
    title.innerHTML = element.title;

    const price = document.createElement('p');
    price.innerHTML = element.price;
    
    const image = document.createElement('img');
    image.setAttribute('class', 'glasses-image');
    image.src = element.photo;

    card.append(title);
    card.append(image);
    card.append(price);

    cardWrapper.append(card)


});

}


getData()



