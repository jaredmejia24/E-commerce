"use strict";

import { products } from "./data.js";

function generateUserMenu() {
    // para añadir el login de los usarios, se puede optimizar que el botón también cierre el menú
    const container = document.getElementById('dropdown-header-container');
    let html = `
                <div class="col-8 d-flex justify-content-end">
                    <div class="col-3 p-3 shadow position-absolute bg-white" id="user-menu">
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn-close" aria-label="Close" onclick="event.preventDefault(),deleteUserMenu()"></button>
                        </div>
                        <div class="d-flex flex-column">
                            <p class="fs-body2 dark-color fw-semibold">Inicio de sesión o Registro</p>
                            <div class="d-flex border justify-content-center my-2">
                                <img src="assets/flat-color-icons_google.svg" class="icon-1-5rem my-2 me-4" alt="">
                                <p class="light-gray-color fs-body2 my-2">Acceder con google</p>
                            </div>
                            <div class="d-flex border justify-content-center my-2 mb-5">
                                <img src="assets/akar-icons_facebook-fill.svg" class="icon-1-5rem my-2 me-4" alt="">
                                <p class="light-gray-color fs-body2 my-2">Acceder con facebook</p>
                            </div>
                        </div>
                    </div>
                </div>
                `
    container.innerHTML = html;
}

function deleteUserMenu() {
    // para que con la 'X' se quite el espacio del login
    const container = document.getElementById('dropdown-header-container');
    let html = ''
    container.innerHTML = html;
}

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
    container.innerHTML = html;
}


generateCardProducts(products)


window.generateUserMenu = generateUserMenu

window.deleteUserMenu = deleteUserMenu

export {generateCardProducts};

