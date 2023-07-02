import './style.css'
import './index.css'
import objectCollector from './objectCollector'

const navigationEl = document.querySelector(".navigation")
const hamburgerEl = document.querySelector(".hamburger")
const productsEl = document.querySelector(".products")
const inputEl = document.querySelector("#searchInp")

hamburgerEl.onclick = function () {
  navigationEl.classList.toggle("top")
}
let basket = JSON.parse(localStorage.getItem("basket")) || []
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    productsEl.innerHTML = data.reduce((kod, item) => kod += objectCollector(item), "");
    const button = document.querySelectorAll("button")
    button.forEach(button => {
      button.addEventListener("click",  function (id) {
        id =  id.target.getAttribute("data-index")
      
        let findedData = data.find(item => item.id == id)
        basket.push({
          name : findedData.title,
          img : findedData.image,
          price : findedData.price
        })
        localStorage.setItem("basket" , JSON.stringify(basket))
      })
    });

    inputEl.addEventListener("input" , ()=> {
        let inputText = inputEl.value.toUpperCase()

     const filteredData =    data.filter(item => item.title.toUpperCase().includes(inputText))
    productsEl.innerHTML = filteredData.reduce((acc,item) => acc += objectCollector(item) ,"")
    })
  });



