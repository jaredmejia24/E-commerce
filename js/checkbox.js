"use strict";

import { products } from "./data.js";
import {generateCardProducts} from "./script.js";


function generateCategory(checkbox){
    /* let form = document.forms["filterHome"];
    let checked = form.querySelectorAll('input[type="checkbox"]'); */
    let index = checkbox.name.indexOf("Filter");
    let filter = checkbox.name.slice(0, index);
    let newArray = [];
    filter = filter.toLowerCase();
    for(let i of products){
        i.category = i.category.toLowerCase();
        if(i.category==filter){
            newArray.push(i);
        }
    }
    return newArray;
}

function generateBrand(checkbox){
    /* let form = document.forms["filterHome"];
    let checked = form.querySelectorAll('input[type="checkbox"]'); */
    let index = checkbox.name.indexOf("Filter");
    let filter = checkbox.name.slice(0, index);
    let newArray = [];
    filter = filter.toLowerCase();
    for(let i of products){
        i.device = i.device.toLowerCase();
        if(i.device==filter){
            newArray.push(i);
        }
    }
    return newArray;
}

function generateRam(checkbox){
    /* let form = document.forms["filterHome"];
    let checked = form.querySelectorAll('input[type="checkbox"]'); */
    let index = checkbox.name.indexOf("Filter");
    let filter = checkbox.name.slice(0, index);
    let newArray = [];
    filter = filter.toLowerCase();
    for(let i of products){
        i.RAM = i.RAM.toLowerCase();
        if(i.RAM==filter){
            newArray.push(i);
        }
    }
    /* console.log(newArray); */
    return newArray;
    
}

function changeCheckboxST(cb){
    let checkbox = document.getElementById("smartTvFilter");
    let image = document.getElementById('checkboxSmartTv');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxComputer();
        changeUnCheckboxCellphone();
        changeUnCheckboxTablets();
        changeUnCheckboxGadgets();
        changeUnCheckboxAudio();
        changeUnCheckboxGaming();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxComputer(cb){
    let checkbox = document.getElementById("computerFilter");
    let image = document.getElementById('checkboxComputer');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxST();
        changeUnCheckboxCellphone();
        changeUnCheckboxTablets();
        changeUnCheckboxGadgets();
        changeUnCheckboxAudio();
        changeUnCheckboxGaming();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxCellphone(cb){
    let checkbox = document.getElementById("cellphoneFilter");
    let image = document.getElementById('checkboxCellphone');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxComputer();
        changeUnCheckboxTablets();
        changeUnCheckboxGadgets();
        changeUnCheckboxAudio();
        changeUnCheckboxGaming();
        changeUnCheckboxST();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}


function changeCheckboxTablets(cb){
    let checkbox = document.getElementById("tabletsFilter");
    let image = document.getElementById('checkboxTablets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxST();
        changeUnCheckboxComputer();
        changeUnCheckboxCellphone();
        changeUnCheckboxGadgets();
        changeUnCheckboxAudio();
        changeUnCheckboxGaming();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxGadgets(cb){
    let checkbox = document.getElementById("gadgetsFilter");
    let image = document.getElementById('checkboxGadgets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxST();
        changeUnCheckboxComputer();
        changeUnCheckboxCellphone();
        changeUnCheckboxTablets();
        changeUnCheckboxAudio();
        changeUnCheckboxGaming();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxAudio(cb){
    let checkbox = document.getElementById("audioFilter");
    let image = document.getElementById('checkboxAudio');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxST();
        changeUnCheckboxComputer();
        changeUnCheckboxCellphone();
        changeUnCheckboxTablets();
        changeUnCheckboxGadgets();
        changeUnCheckboxGaming();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}
function changeCheckboxGaming(cb){
    let checkbox = document.getElementById("gamingFilter");
    let image = document.getElementById('checkboxGaming');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxST();
        changeUnCheckboxComputer();
        changeUnCheckboxCellphone();
        changeUnCheckboxTablets();
        changeUnCheckboxGadgets();
        changeUnCheckboxAudio();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxAndroid(cb){
    let checkbox = document.getElementById("androidFilter");
    let image = document.getElementById('checkboxAndroid');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxApple();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckboxApple(cb){
    let checkbox = document.getElementById("appleFilter");
    let image = document.getElementById('checkboxApple');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckboxAndroid();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeCheckbox12GB(cb){
    let checkbox = document.getElementById("12GBFilter");
    let image = document.getElementById('checkbox12GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        let array = cb(checkbox);
        generateCardProducts(array);
        changeUnCheckbox8GB();
        changeUnCheckbox6GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}
function changeCheckbox8GB(cb){
    let checkbox = document.getElementById("8GBFilter");
    let image = document.getElementById('checkbox8GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckbox12GB();
        changeUnCheckbox6GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}
function changeCheckbox6GB(cb){
    let checkbox = document.getElementById("6GBFilter");
    let image = document.getElementById('checkbox6GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        generateCardProducts(cb(checkbox));
        changeUnCheckbox12GB();
        changeUnCheckbox8GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}
function changeCheckbox4GB(cb){
    let checkbox = document.getElementById("4GBFilter");
    let image = document.getElementById('checkbox4GB');
    let input = document.querySelectorAll('input[type="checkbox"]:checked');
    /* for(let i of input){
        if(i == checkbox){
            continue;
        }
        else{
            
        }
    } */
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';

        generateCardProducts(cb(checkbox));
        changeUnCheckbox12GB();
        changeUnCheckbox8GB();
        changeUnCheckbox6GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
        generateCardProducts(products);
    }
}

function changeUnCheckboxST(){
    let checkbox = document.getElementById("smartTvFilter");
    let image = document.getElementById('checkboxSmartTv');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckboxComputer(){
    let checkbox = document.getElementById("computerFilter");
    let image = document.getElementById('checkboxComputer');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeUnCheckboxCellphone(){
    let checkbox = document.getElementById("cellphoneFilter");
    let image = document.getElementById('checkboxCellphone');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}


function changeUnCheckboxTablets(){
    let checkbox = document.getElementById("tabletsFilter");
    let image = document.getElementById('checkboxTablets');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckboxGadgets(){
    let checkbox = document.getElementById("gadgetsFilter");
    let image = document.getElementById('checkboxGadgets');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckboxAudio(){
    let checkbox = document.getElementById("audioFilter");
    let image = document.getElementById('checkboxAudio');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeUnCheckboxGaming(){
    let checkbox = document.getElementById("gamingFilter");
    let image = document.getElementById('checkboxGaming');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckboxAndroid(){
    let checkbox = document.getElementById("androidFilter");
    let image = document.getElementById('checkboxAndroid');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckboxApple(){
    let checkbox = document.getElementById("appleFilter");
    let image = document.getElementById('checkboxApple');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeUnCheckbox12GB(){
    let checkbox = document.getElementById("12GBFilter");
    let image = document.getElementById('checkbox12GB');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeUnCheckbox8GB(){
    let checkbox = document.getElementById("8GBFilter");
    let image = document.getElementById('checkbox8GB');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
    
}
function changeUnCheckbox6GB(){
    let checkbox = document.getElementById("6GBFilter");
    let image = document.getElementById('checkbox6GB');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
   
}
function changeUnCheckbox4GB(){
    let checkbox = document.getElementById("4GBFilter");
    let image = document.getElementById('checkbox4GB');
    checkbox.checked = false;
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

window.generateRam = generateRam
window.generateCategory = generateCategory;
window.generateBrand = generateBrand;
window.changeCheckboxST = changeCheckboxST;
window.changeCheckboxComputer = changeCheckboxComputer;
window.changeCheckboxCellphone = changeCheckboxCellphone;
window.changeCheckboxTablets = changeCheckboxTablets;
window.changeCheckboxGadgets = changeCheckboxGadgets;
window.changeCheckboxAudio = changeCheckboxAudio;
window.changeCheckboxGaming = changeCheckboxGaming;
window.changeCheckboxAndroid = changeCheckboxAndroid;
window.changeCheckboxApple = changeCheckboxApple;
window.changeCheckbox12GB = changeCheckbox12GB;
window.changeCheckbox8GB = changeCheckbox8GB;
window.changeCheckbox6GB = changeCheckbox6GB;
window.changeCheckbox4GB = changeCheckbox4GB;