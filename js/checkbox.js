"use strict";

import { products } from "./data.js";
import {generateCardProducts} from "./script.js";

function filter(category, device, RAM, priceArray){
    category = category.toLowerCase();
    device = device.toLowerCase();
    RAM = RAM.toLowerCase();
    for(let i of priceArray){
        Number(i);
    }
    let newArray = [];
    for(let i of products){
        i.category = i.category.toLowerCase();
        i.device = i.device.toLowerCase();
        i.RAM = i.RAM.toLowerCase();
        if(priceArray[0]==0 || priceArray[1]==0){
            if(category!='' && device!="" && RAM!=""){
                if(i.category==category && i.device==device && i.RAM == RAM){
                    newArray.push(i);
                }
            }
            else if(category!="" && device!=""){
                if(i.category==category && i.device==device){
                    newArray.push(i);
                }
            }
            else if(category!="" && RAM!=""){
                if(i.category==category && i.RAM == RAM){
                    newArray.push(i);
                }
            }
            else if(device!="" && RAM!=""){
                if(i.device==device && i.RAM == RAM){
                    newArray.push(i);
                }
            }
            else if(category!=""){
                if(i.category==category){
                    newArray.push(i);
                }
            }
            else if(device!=""){
                if(i.device==device){
                    newArray.push(i);
                }
            }
            else if(RAM!=""){
                if(i.RAM==RAM){
                    newArray.push(i);
                }
            }
        }
        else{
            if(category!='' && device!="" && RAM!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.category==category && i.device==device && i.RAM == RAM && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(category!="" && device!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.category==category && i.device==device && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(category!="" && RAM!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.category==category && i.RAM == RAM && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(device!="" && RAM!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.device==device && i.RAM == RAM && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(category!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.category==category && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(device!="" && priceArray[0]!=0 && priceArray[1]!=0){
                if(i.device==device && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
            else if(RAM!="" && priceArray[0]>=priceTo[1]){
                if(i.RAM==RAM && i.price<=priceArray[1] && i.price>=priceArray[0]){
                    newArray.push(i);
                }
            }
        }
    }
    return newArray;
}



function changeCheckboxST(){
    let checkbox = document.getElementById("smartTvFilter");
    let image = document.getElementById('checkboxSmartTv');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}

function changeCheckboxComputer(){
    let checkbox = document.getElementById("computerFilter");
    let image = document.getElementById('checkboxComputer');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}

function changeCheckboxCellphone(){
    let checkbox = document.getElementById("cellphoneFilter");
    let image = document.getElementById('checkboxCellphone');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}


function changeCheckboxTablets(){
    let checkbox = document.getElementById("tabletsFilter");
    let image = document.getElementById('checkboxTablets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}

function changeCheckboxGadgets(){
    let checkbox = document.getElementById("gadgetsFilter");
    let image = document.getElementById('checkboxGadgets');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}

function changeCheckboxAudio(){
    let checkbox = document.getElementById("audioFilter");
    let image = document.getElementById('checkboxAudio');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}
function changeCheckboxGaming(){
    let checkbox = document.getElementById("gamingFilter");
    let image = document.getElementById('checkboxGaming');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
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
    }
}

function changeCheckboxAndroid(){
    let checkbox = document.getElementById("androidFilter");
    let image = document.getElementById('checkboxAndroid');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckboxApple();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckboxApple(){
    let checkbox = document.getElementById("appleFilter");
    let image = document.getElementById('checkboxApple');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckboxAndroid();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}

function changeCheckbox12GB(){
    let checkbox = document.getElementById("12GBFilter");
    let image = document.getElementById('checkbox12GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckbox8GB();
        changeUnCheckbox6GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}


function changeCheckbox8GB(){
    let checkbox = document.getElementById("8GBFilter");
    let image = document.getElementById('checkbox8GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckbox12GB();
        changeUnCheckbox6GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox6GB(){
    let checkbox = document.getElementById("6GBFilter");
    let image = document.getElementById('checkbox6GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckbox12GB();
        changeUnCheckbox8GB();
        changeUnCheckbox4GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
    }
}
function changeCheckbox4GB(){
    let checkbox = document.getElementById("4GBFilter");
    let image = document.getElementById('checkbox4GB');
    if(checkbox.checked){
        checkbox.style.display = 'none';
        image.innerHTML = '<img class="mx-4 image-checkbox" src="/assets/check_box 3.svg">';
        changeUnCheckbox12GB();
        changeUnCheckbox8GB();
        changeUnCheckbox6GB();
    }
    else{
        checkbox.style.display = 'inline-block';
        image.innerHTML = '';
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

function checkCheckboxes(){
    let input = document.querySelectorAll('input[type="checkbox"]:checked');
    if(input.length==0){
        generateCardProducts(products);
    }
    else{
        let RAM = "";
        let category = "";
        let device = "";
        let array = [];
        for(let i of input){
            if(i.name.includes("GB")){
                let index = i.name.indexOf("Filter");
                RAM = i.name.slice(0, index);
            }
            else if(i.name.includes("android")|| i.name.includes("apple")){
                let index = i.name.indexOf("Filter");
                device = i.name.slice(0, index);
            }
            else{
                let index = i.name.indexOf("Filter");
                category = i.name.slice(0, index);
            }
        }

        array = filter(category, device, RAM, checkPrice());
        generateCardProducts(array);
    }
}

function checkPrice(){
    let pricefrom = document.getElementById("priceFrom");
    let priceTo = document.getElementById("priceTo");
    return [pricefrom.value, priceTo.value];
}

function priceGenerate(){
    let priceArray = checkPrice();
    let newArray = [];
    for(let i of priceArray){
        Number(i);
    }
    if(priceArray[0]!=0 && priceArray[1]!=0){
        for(let i of products){
            if(i.price<=priceArray[1] && i.price>=priceArray[0]){
                newArray.push(i);
            }
        }
    generateCardProducts(newArray);
    }
    else{
        generateCardProducts(products);
    }
}

window.priceGenerate = priceGenerate;
window.checkPrice = checkPrice;
window.checkCheckboxes = checkCheckboxes;
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