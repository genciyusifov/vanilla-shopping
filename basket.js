let basket  = JSON.parse(localStorage.getItem("basket")) || []
const basketEl = document.querySelector(".basket")
render(basket)
function basketCollector(image , title , price) {
    return `   <li class="flex items-center py-2">
    <img src="${image}" alt="Product" class="w-12 h-12 rounded mr-4">
    <div class="flex-grow">
      <h2 class="font-bold">${title}</h2>
      <p class="text-gray-500">Price: $${price}</p>
    </div>
    <button class="text-red-500">Remove</button>
  </li>`
}
function render(array) {
    array.forEach(e => {
    basketEl.innerHTML+= basketCollector(e.img , e.name , e.price)
    });
}