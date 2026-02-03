# Short Response Questions

Answer the following questions in 2-4 sentences each. Be specific and use vocabulary from the lessons. Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

## Question 1: Loading JavaScript

Examine the HTML code below:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Clicker</title>
    <link rel="stylesheet" href="style.css" />
    <script src="index.js"></script>
  </head>
  <body>
    <h1>Button Clicker</h1>
    <button id="my-button">Click Me!</button>
  </body>
</html>
```

In the `index.js` file, they have the code:

```js
document.querySelector('#my-button').style.color = 'red';
```

But an error is thrown.

1. What is the error (be specific)?
2. Why does this error occur?
3. What can be done to fix it?

**Your Answer:**
1. The specific error is a `TypeError: Cannot read properties of null`.

2. This happens because the JavaScript file is loaded in the `<head>` before the DOM is fully parsed, so `document.querySelector('#my-button')` returns `null` since the button does not exist yet.

3. This can be fixed by moving the `<script>` tag to the bottom of the `<body>` because the browser parses the HTML from top to bottom. When the script is placed at the end of the body, all DOM elements including the button have already been created before the JavaScript runs. This ensures that `document.querySelector('#my-button')` successfully selects the element instead of returning `null`.

## Question 2: event.target vs event.currentTarget

Consider this HTML:

```html
<div id='button-container'>
  <button>Click Me</button>
</div>
```

And this JavaScript:

```js
const div = document.querySelector('#button-container');
div.addEventListener('click', (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
});
```

When a user clicks the button, both `event.target` and `event.currentTarget` are logged. Explain what each property represents in this scenario and why they might be different.

**Your Answer:**
In this scenario, `event.target` refers to the actual element that was clicked, which is the `<button>. event.currentTarget` refers to the element that the event listener is attached to, which is the `<div id="button-container">`. They are different because of event bubbling, where the click starts on the button and then bubbles up to the parent div.

## Question 3: Creating Elements Dynamically

Look at the JavaScript code below that is attempting to create a product card dynamically and add it to the body.

```js
const product = {
  name: 'iPhone 17',
  price: 1099.99,
  img: './images/iphone17.png'
}

/* Desired structure: 
<div>
  <img src="./images/iphone17.png">
  <h3>iPhone 17</h3>
  <p>$1099.99</p>
</div>
*/

const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

document.body.append(productCard);
```

However, when the page loads and the code is executed, the user isn't able to see the image, product name or product price. What is the issue with this code?

**Your Answer:**
The issue is that the image, heading, and paragraph elements are never appended to the `productCard` div. Only the empty `productCard` is added to the DOM, so nothing visible appears on the page. To fix this, the code needs to use `productCard.append(productImage, productName, productPrice)` before appending the card to the body.

```js
//Create
const productCard = document.createElement('div');
const productImage = document.createElement('img');
const productName = document.createElement('h3');
const productPrice = document.createElement('p');

//Modify
productImage.src = product.img;
productName.textContent = product.name;
productPrice.textContent = `$${product.price}`;

// Append 
productCard.append(productImage, productName, productPrice);
document.body.append(productCard);
```


## Question 4: Event Delegation and event.target.closest()

Consider this HTML:

```html
<ul id="todo-list">
  <li id="todo-1">
    <p class='description'>Walk the dog</p>
    <p class='is-complete'>✅</p>
  </li>
  <li id="todo-2">
    <p class='description'>Take out the trash</p>
    <p class='is-complete'>❌</p>
  </li>
  <li id="todo-3">
    <p class='description'>Wash the dishes</p>
    <p class='is-complete'>❌</p>
  </li>
</ul>
```

And this JavaScript:

```js
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('click', (event) => {
  const clickedLi = event.target.closest('li');

  if (!clickedLi) return;

  clickedLi.querySelector('.is-complete').textContent = "✅";
});
```

1. What is the name for this approach to event handling? What is the alternative and why is this approach better?
2. Explain what the `event.target.closest('li')` method does and why it is essential to this approach.

**Your Answer:**
1. This approach is called **event delegation**, and the alternative is adding separate event listeners to each `<li>`. Event delegation is better because it uses fewer event listeners and still works for dynamically added list items.

2. The `event.target.closest('li')` method finds the nearest parent `<li>` element that was clicked, even if the click happened on a child element like a `<p>`. This is essential because it ensures the correct todo item is updated regardless of where inside the `<li>` the user clicks.
## Question 5: NodeList

Do some independent learning and reading about the `querySelectorAll()` method. Then, answer these questions:

1. What is the difference between `querySelectorAll()` and `querySelector()`. Give an example of when you would use `querySelectorAll()`.
2. What is the difference between a `NodeList` and an array? Why is it important to know this difference?

**Your Answer:**
1. `querySelector()` returns the first matching element, while `querySelectorAll()` returns all matching elements as a `NodeList`. For example, you would use `querySelectorAll('.item')` when you want to loop over and update multiple elements with the same class.

2. A `NodeList` looks similar to an array but does not have all array methods like `map()` or `filter()`. Knowing the difference is important so you don’t accidentally try to use array methods that won’t work unless you convert the `NodeList` into an array.
