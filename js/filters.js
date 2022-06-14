"use strict";

import { products } from "./data.js";
import {generateCardProducts} from "./script.js";

function filterText(arrayData, cb) {
    let productsFiltered = [];
    for (let i = 0; i < arrayData.length; i++) {
        if (cb(arrayData[i])) {
            productsFiltered.push(arrayData[i])
        }
    }
    return productsFiltered
}

function finderProduct(arrayData, cb, id) {
    for (let i = 0; i < arrayData.length; i++) {
        if(cb(arrayData[i], id)) {
            return arrayData[i]
        }
    }
}

function cbSearch(element) {
    const input = document.getElementById('inputSearch')
    return element.model.toLowerCase().includes(input.value.toLowerCase())
}

function filteringByInput() {
    generateCardProducts(filterText(products, cbSearch))
}

function cbID(element, id) {
    return element.id == id
}
// filterText(products, cbSearch)

export {filteringByInput, finderProduct, cbID,};

window.filteringByInput = filteringByInput