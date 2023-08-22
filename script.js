const cardWrapper = document.querySelector('.card-wrapper')

const addGlasses = ()=>{

    const glassesCard = {
        title: "Men`s Cavalli sunglasses",
        photo: "https://i.ebayimg.com/images/g/aDkAAOSwhrRfuIC~/s-l1600.jpg",
        price: 205,
        id: "5"
          }


    fetch('https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(glassesCard)
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })

}


const getData = async ()=> {
const data = await fetch("https://64e32ae8bac46e480e784cbb.mockapi.io/glassesCard");
const dataArray = await data.json();
dataArray.forEach(element => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

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

