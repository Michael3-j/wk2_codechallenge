let shoppingList = [];

const form = document.querySelector('#shopping-form');
const container = document.querySelector('.container');

// Function to display items in the shopping list
function displayItems() {
  container.innerHTML = ''; // Clear the container before rendering

  shoppingList.forEach((item, index) => {
    const itemCard = `
      <div class="item ${item.purchased ? 'purchased' : ''}">
        <div id="details-${index}">
          <h4 class="title">${item.name}</h4>
          <p class="price">Ksh ${item.price}</p>
        </div>
        <div class="check">
          <input 
            type="checkbox" 
            id="mark-${index}" 
            ${item.purchased ? 'checked' : ''} 
            onclick="togglePurchased(${index})" 
          />
          <label for="mark-${index}">Mark as purchased</label>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', itemCard);
  });

  toggleClearButton();
}

// Function to toggle purchased state
function togglePurchased(index) {
  shoppingList[index].purchased = !shoppingList[index].purchased; // Toggle purchased state
  displayItems(); // Re-render the list
}

// Function to toggle visibility of "Clear List" button
function toggleClearButton() {
  const btns = document.querySelector('.btn-sections');
  if (shoppingList.length > 0) {
    btns.classList.remove('hidden');
  } else {
    btns.classList.add('hidden');
  }
}

// Function to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const itemName = e.target.product.value;
  const itemPrice = e.target.price.value;

  // Add new item to the shopping list
  shoppingList.push({
    name: itemName,
    price: itemPrice,
    purchased: false,
  });

  form.reset();
  displayItems();
});

// Function to clear the entire list
document.querySelector('.clear-list').addEventListener('click', () => {
  shoppingList = [];
  displayItems(); 
});
