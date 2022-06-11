"use strict";

import { products } from "./data.js";

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
    return newArray;
    
}

function changeCheckboxST(cb){
    let checkbox = document.getElementById("smartTvFilter");
    let image = document.getElementById('checkboxSmartTv');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxComputer(cb){
    let checkbox = document.getElementById("computerFilter");
    let image = document.getElementById('checkboxComputer');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxCellphone(cb){
    let checkbox = document.getElementById("cellphoneFilter");
    let image = document.getElementById('checkboxCellphone');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxTablets(cb){
    let checkbox = document.getElementById("tabletsFilter");
    let image = document.getElementById('checkboxTablets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxGadgets(cb){
    let checkbox = document.getElementById("gadgetsFilter");
    let image = document.getElementById('checkboxGadgets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxAudio(cb){
    let checkbox = document.getElementById("audioFilter");
    let image = document.getElementById('checkboxAudio');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckboxGaming(cb){
    let checkbox = document.getElementById("gamingFilter");
    let image = document.getElementById('checkboxGaming');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxAndroid(cb){
    let checkbox = document.getElementById("androidFilter");
    let image = document.getElementById('checkboxAndroid');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckboxApple(cb){
    let checkbox = document.getElementById("appleFilter");
    let image = document.getElementById('checkboxApple');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox12GB(cb){
    let checkbox = document.getElementById("12GBFilter");
    let image = document.getElementById('checkbox12GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox8GB(cb){
    let checkbox = document.getElementById("8GBFilter");
    let image = document.getElementById('checkbox8GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox6GB(cb){
    let checkbox = document.getElementById("6GBFilter");
    let image = document.getElementById('checkbox6GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox4GB(cb){
    let checkbox = document.getElementById("4GBFilter");
    let image = document.getElementById('checkbox4GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        cb(checkbox);
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