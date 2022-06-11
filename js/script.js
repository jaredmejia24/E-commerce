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
                            <img src="${arrayData[i].image}" alt="">
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
                                <p class="ms-3 fs-subtittle1 dark-color">${arrayData[i].price}</p>
                            </div>
                            <a href="#" class="bg-rose rounded-circle icon-2-5rem d-flex justify-content-center align-items-center">
                                <img src="assets/shopping-cart 3.svg" class="icon-1-5rem" alt="">
                            </a>
                        </div>
                    </div>
                </div>`;
    }
    container.innerHTML = html;
}

generateCardProducts(products)
