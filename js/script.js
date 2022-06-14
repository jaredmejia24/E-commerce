"use strict";

import { products } from "./data.js";
import {finderProduct, cbID,} from "./filters.js"

function generateCardProducts(arrayData) {
    const container = document.getElementById('cards-products-container');
    let html = '';
    for(let i = 0; i < arrayData.length; i++) {
        html += `
                <div class="col-4">
                    <div class="border p-3">
                        <div class="d-flex justify-content-end">
                            <a href="#">
                                <img src="assets/heart 1.svg" class="icon-1rem" alt="">
                             </a>
                        </div>
                        <div class="d-flex justify-content-center">
                            <img class="products-images-home" src="${arrayData[i].image}" alt="">
                        </div>
                    </div>
                    <div class="border p-3">
                        <div>
                            <p class="m-0 fs-body2 light-gray-color fw-semibold">${arrayData[i].brand.toUpperCase()}</p>
                            <p class="fs-subtittle1 dark-color">${arrayData[i].model}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <p class="m-0 fs-body2 light-gray-color fw-semibold">Precio:</p>
                                <p class="ms-3 fs-subtittle1 dark-color">$${arrayData[i].price}</p>
                            </div>
                            <!-- class="bg-rose icon-2-5rem d-flex justify-content-center align-items-center
                            le quite las clases al botón de añadir al carrito de compras porque sino no funcionaba -->
                            <a href="#" onclick="event.preventDefault(), addCartShopping(${arrayData[i].id})">
                                <img src="assets/shopping-cart 3.svg" class="icon-1-5rem" alt="">
                            </a>
                        </div>
                    </div>
                </div>`;
    }
    const container2 = document.getElementById('quantity-of-products');
    let html2 = `<p class="my-auto me-2 fs-body2">Total de produtos:</p>
            <p class="my-auto rose-color fs-body2 fw-semibold">${arrayData.length}</p>`
    container.innerHTML = html
    container2.innerHTML = html2;
}

function generateCartShopping(arrayData) {
    const container = document.getElementById('container-product-shopping-cart')
    let html = ''

    for (let i = 0; i < arrayData.length; i++) {
        html += `<div class="d-flex flex-row justify-content-between mb-4">
                    <div class="d-flex">
                        <div>
                            <img src="${arrayData[i].image}" alt="" class="img-product-cart">
                        </div>
                            <div>
                                <p class="m-0 gray-color fs-body3">${arrayData[i].brand.toUpperCase()}</p>
                                <p class="dark-color fw-semibold">${arrayData[i].model}</p>
                            <div>
                                <select class="form-select text-end" id="numbersProductsSelect${i}">
                                    <option onclick='numbersProductsTotal(${i}, ${arrayData[i].price})' value="1" selected>1</option>
                                    <option onclick='numbersProductsTotal(${i}, ${arrayData[i].price})' value="2">2</option>
                                    <option onclick='numbersProductsTotal(${i}, ${arrayData[i].price})' value="3">3</option>
                                    <option onclick='numbersProductsTotal(${i}, ${arrayData[i].price})' value="4">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="border-0 bg-white p-0" onclick="event.preventDefault(), deleteCartShopping(${arrayData[i].id})">
                            <img src="assets/trash-2.svg" alt="">
                        </button>
                    </div>
                </div>
                <div class="d-flex col-12 justify-content-end">
                    <div class="d-flex col-8 justify-content-between">
                        <p class="gray-color fw-semibold">Total:</p>
                        <p class="fs-body1 fw-semibold" id="total-container${i}">$${arrayData[i].price}</p>
                    </div>
                </div>`
    }
    container.innerHTML = html
}

let shopingCart = localStorage.getItem('shopingCart')

if (shopingCart) {
    shopingCart = JSON.parse(shopingCart)
} else {
    shopingCart = []
}


let contSearch = 0;

function toggleMenu() {
    let container = document.getElementById('user-menu');
    container.classList.toggle('hidden');
    let searcbar = document.getElementById('searchBarHome');
    if(contSearch==0){
        searcbar.style.zIndex = -1;
        contSearch = 1;
    }
    else{
        searcbar.style.zIndex = 1;
        contSearch = 0;
    }
}

function toggleMenuShop() {
    let container = document.getElementById('shopping-cart')
    container.classList.toggle('hidden');
}

generateCardProducts(products);
generateCartShopping(shopingCart)

function numbersProductsTotal(id, price) {
    let numbers = document.getElementById(`numbersProductsSelect${id}`)
    let totalContainer = document.getElementById(`total-container${id}`)
    shopingCart[id].amount = numbers.value * price
    let html = '$' + shopingCart[id].amount
    totalContainer.innerHTML = html
    subtotalProducts()
}

function subtotalProducts() {
    let subtotal = 0
    let subtotalContainer = document.getElementById('subtotal-id')
    for (let i = 0; i < shopingCart.length; i++) {
        subtotal += shopingCart[i].amount
    }
    let htmlSubtotal = `$${subtotal}`
    subtotalContainer.innerHTML = htmlSubtotal

    let total = 0
    let totalContainer = document.getElementById('total-id')
    total = subtotal + (subtotal * (20/100))
    let htmlTotal = `$${total}`
    totalContainer.innerHTML = htmlTotal
}

function addCartShopping(productID) {
    /*
    el ciclo válida que el productID del producto a agregar no se encuentre dentro del array de los productos a comprar,
    en caso de que se encuentre se finaliza la función, y si no se continúa con el ciclo normal de añadir el producto.
    */
    for (let i = 0; i < shopingCart.length; i++) {
        if (shopingCart[i].id === productID) {
            return
        }
    }
    shopingCart.push(finderProduct(products, cbID, productID))
    
    localStorage.setItem('shopingCart', JSON.stringify(shopingCart))
    generateCartShopping(shopingCart)
}

function deleteCartShopping(productID) {
    for (let i = 0; i < shopingCart.length; i++) {
        if (shopingCart[i].id === productID) {
            shopingCart.splice(i, 1)
        }
    }
    localStorage.setItem('shopingCart', JSON.stringify(shopingCart))
    generateCartShopping(shopingCart)
}

window.addCartShopping = addCartShopping;
window.toggleMenu = toggleMenu;
window.toggleMenuShop = toggleMenuShop
window.numbersProductsTotal = numbersProductsTotal
window.deleteCartShopping = deleteCartShopping

export {generateCardProducts};

