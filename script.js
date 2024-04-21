// To Fetch using the Public API

const StoreAPI = "https://fakestoreapi.com/products?limit=5";
const cardContainer = document.querySelector('.card-container');


async function FetchData() {
  
    try {
      const response = await fetch(`${StoreAPI}`);
      const CardJSONData = await response.json();
     
      for (let i = 0; i < CardJSONData.length; i++) {
        const item = CardJSONData[i];

        let cardTile = item.title;
        let cardPrice = item.price;
        let cardimage = item.image;
        createCard(cardTile,cardPrice,cardimage);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  function createCard(Tile, Price,image) {
  
    // Create card element
    const card = document.createElement('div');
    card.classList.add('card'); 
   
    // Add title
    const cardTitle = document.createElement('h4');
    cardTitle.textContent += Tile;
    cardTitle.style.textAlign ='center';
    // Add content
    const cardPrice = document.createElement('p');
    cardPrice.textContent += "$"+ Price;
    cardPrice.style.color= 'Blue';
    cardPrice.style.fontWeight = 'Bold';
    cardPrice.style.textAlign ='center';
   
    // Append title and content to the card
    card.appendChild(cardTitle);
    card.appendChild(cardPrice);
    card.innerHTML += `<img id="cardimage" src=${image} alt="Image NotFound" />`;
    cardContainer.appendChild(card);
  
}

FetchData();