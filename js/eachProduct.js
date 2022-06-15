"use strict";

import { products } from "./data.js";
import {likeButton } from "./script.js";
console.log(likeButton);

function generateCardProductsInEachProduct(arrayData){
    const container = document.getElementById('everyProduct');
    let html = '';
    for(let i = 0; i < arrayData.length; i++) {
        html += `
                <div class="col-4 mx-3 w-25">
                    <div class="border p-3">
                        <div class="d-flex justify-content-end">
                            <div>
                                <img onclick="likeButton(this, ${arrayData[i].id})" src="/assets/heart 1.svg" class="icon-1rem unliked" alt="">
                             </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <a href="/modelOfEachProduct.html">
                                <img onclick="getInfoImage(this)" class="products-images-home" src="${arrayData[i].image}" alt="">
                            </a>
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

function generateSpecs(){
    let object = getObject();
    const container = document.getElementById('containerInfo');
    let html = `
    <table class="w-100 specs-table">
                    <tr>
                        <th>Tipo de pantalla</th>
                        <td>Super amoled</td>
                        <th>Camara frontal</th>
                        <td>20mp</td>
                    </tr>
                    <tr>
                        <th>Tamaño de pantalla</th>
                        <td>6.4''</td>
                        <th>Sistema operativo</th>
                        <td>Android 11 One UI 3</td>
                    </tr>
                    <tr>
                        <th>RAM</th>
                        <td>${object.RAM}</td>
                        <th>Puerto de carga</th>
                        <td>Usb Tipo C</td>
                    </tr>
                    <tr>
                        <th>Bateria</th>
                        <td>5000 mAh</td>
                        <th>Memoria expandible</th>
                        <td>Hasta 512 GB</td>
                    </tr>
                    <tr>
                        <th>Camara principal</th>
                        <td>64 + 8 +5+5mp</td>
                        <th>NFC</th>
                        <td>No</td>
                    </tr>
                </table>
    `;
    container.innerHTML = html;
}

function generateDescription(){
    const container = document.getElementById('containerInfo');
    let html = `
    <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
                <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
                <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
    `;
    container.innerHTML = html;
}

function getObject(){
    let image = JSON.parse(localStorage.getItem('image'));
    let object = {};
    if(image.includes("/assets/image")){
        image = image.replace("%20", " ");
        let index = image.search("/assets/image");
        image = image.slice(index, image.length);
    }
    for(let i of products){
        if(i.image==image){
            object = i;
        }
    }
    return object;
}

function generateEachProduct(){
    let object = getObject();
    let html = "";
    html = `
    <div id="eachProduct">
    <div class="row">
        <div class="d-flex ">
            <div style="width: auto;" class="col-2 ms-4 mt-4">
                <div>
                    <h2 class="fs-subtittle2">Home</h2>
                </div>
            </div>
            <div style="width: auto;" class="col-1">
                <img class="dot-icon" src="/assets/dot.svg">
            </div>
            <div style="width: auto;" class="col-1 mt-4">
                <h2 class="fs-subtittle1">${object.model}</h2>
            </div>
            <div class="search-container" class="col-6">
                <div style="width: 30rem;" id="searchBarHome" class="input-group mt-5">
                        <input id="inputSearch" type="search" class="form-control" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" />
                        <button onclick="event.preventDefault(), filteringByInput()" type="button" class="btn btn-outline-primary" id="btnSearch">
                        <img src="assets/search 1.svg" alt="search btn" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="d-grid container-upper-info pt-4">
                <div class="d-flex flex-column align-items-center">
                    <img class="ms-3" style="width: 10rem;" src="/assets/Group 114.jpg">
                    <img class="ms-3" style="width: 10rem;" src="/assets/Group 115.jpg">
                    <img class="ms-3" style="width: 10rem;" src="/assets/image 7.jpg">
                </div>
                <div class="d-flex justify-content-center">
                    <div class="pt-1">
                        <div class="d-flex align-items-center flex-column">
                            <div class="w-75 d-flex justify-content-end">
                                <div>
                                    <img onclick="likeButton(this, ${object.id})" src="/assets/heart 1.svg" class="w-75 unliked" alt="">
                                </div>
                            </div>
                            <div>
                                <img style="width: 30rem;" class="products-images-home" src="${object.image}" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div style="width: 25rem;">
                    <p class="m-0 fs-body2 light-gray-color fw-semibold">${object.brand.toUpperCase()}</p>
                    <p class="fs-subtittle1 dark-color">${object.model}</p>
                    <div class="d-flex justify-content-end">
                        <a href="#" class="shop-icon bg-rose rounded-circle icon-2-5rem d-flex justify-content-center align-items-center">
                            <img src="assets/shopping-cart 3.svg" class="icon-1-5rem" alt="">
                        </a>
                    </div>
                    <div>
                        <p class="fs-subtittle1 dark-color">${object.RAM} RAM</p>
                        <p class="fs-body2 dark-color">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                            Precio
                        </p>
                        <p class="m-0 fs-body2 light-gray-color fw-semibold">Precio</p>
                        <p class="fs-subtittle1 dark-color">$${object.price}.00</p>
                        <div class="negative-margin-top d-flex justify-content-end">
                            <select id="select" class="copies-product">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <p class="fs-subtittle2 dark-color">Color</p>
                        <div class="d-flex justify-content-center gap-5">
                            <img src="/assets/image 9.jpg">
                            <img src="/assets/image 10.jpg">
                            <img src="/assets/image 11.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex w-75 justify-content-center">
        <div class="col-2">
            <p onclick="generateDescription()" style="width: 15rem;" class="hover-text fs-body2 dark-color text-center">Descipcion del producto</p>
        </div>
        <div class="col-6">
            <p onclick="generateSpecs()" style="width: 15rem;" class="hover-text fs-body2 dark-color text-center">Especificaciones</p>
        </div>
    </div>
    <div class="row w-75 m-auto">
        <div class="col">
            <div id="containerInfo">
                <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
                <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
                <p class="fs-body2 dark-color">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur rerum laudantium vel dolorem velit sed soluta, distinctio, praesentium iure nemo quae possimus corporis eos dolorum perferendis asperiores? Dolores, voluptate asperiores.
                    Precio
                </p>
        </div>
    </div>
    <div class="row">
        <div class="col ms-5 mt-4">
            <h3 class="fs-body2 rose-color">Otras opciones...</h3>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div id="everyProduct" class="d-flex each-product mx-5 mt-3 scroll">

            </div>
        </div>
    </div>
    </div>
</div>
    `;
    const container = document.getElementById('eachProduct');
    container.innerHTML = html;
}

function generateEachProductOnLoad(){
    generateEachProduct();
}

function generateCardProductsInEachProductDelay(){
    generateCardProductsInEachProduct(products);
}

function getInfoImage(image){
    localStorage.setItem('image', JSON.stringify(image.src));
}  

setTimeout(generateCardProductsInEachProductDelay, 200);

window.getInfoImage = getInfoImage;
window.generateEachProductOnLoad = generateEachProductOnLoad;
window.generateDescription = generateDescription;
window.generateSpecs = generateSpecs;
/* window.getInfoImage = getInfoImage; */