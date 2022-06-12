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

function cbSearch(element) {
    const input = document.getElementById('input-search')
    return element.model.toLowerCase().includes(input.value.toLowerCase())
}

function filteringByInput() {
    generateCardProducts(filterText(products, cbSearch))
}

// filterText(products, cbSearch)

export {filteringByInput};

window.filteringByInput = filteringByInput