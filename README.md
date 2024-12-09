## Code Challenge: Interactive Shopping List
This challenge combines array iteration, DOM manipulation, and event handling to create an interactive shopping list application.

## index.html
The html holds the heading og the websit which is alpha shopping list,with a paragraph of a single line.
The buttons that are to be displayed on the webpage are located here ,the buttons include;
Add to list and Clear from list.

## style.css
The styling of all the taggs and input characters in the html are done here.

## index.js
The shopping list array is created here .
A fanction for handling each item has been declearsd to handle items and prices individualy using the .forEach() method
The displayItems() function dynamically renders the list based on shoppingList. Event listeners handle user interactions (e.g., adding, marking as purchased). Reusable Functions:

togglePurchased(index): Toggles the purchased state of an item. toggleClearButton(): Shows or hides the "Clear List" button.
I have added eventListeners to the add to list button which has the function  of submission.
.push()is used to add items tho the arry and .reset() is used to update the list.
An event listener has been added to the clear from list button which when clicked it clears every item in the list.
function toggleClearButton() is used to make the clear from list button to be displayed if there is an item on the list and to hide when the list is empty.

