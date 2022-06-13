"use strict";

import { products } from "./data.js";


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
                            <a href="#" class="bg-rose rounded-circle icon-2-5rem d-flex justify-content-center align-items-center">
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

generateCardProducts(products);

window.toggleMenu = toggleMenu;

export {generateCardProducts};

