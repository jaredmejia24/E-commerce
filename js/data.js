"use strict";

let products = [
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy s52", RAM: "8GB", price: 5200.00, image: "/assets/image 1.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy A12", RAM: "4GB", price: 3900.00, image: "/assets/image 3.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy A32", RAM: "12GB", price: 7000.00, image: "/assets/image 4.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy A01", RAM: "6GB", price: 4500.00, image: "/assets/image 13.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy A70", RAM: "8GB", price: 5300.00, image: "/assets/image 14.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy Z fold 3", RAM: "12GB", price: 19800.00, image: "/assets/image 15.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy s21", RAM: "12GB", price: 16500.00, image: "/assets/image 16.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy A31", RAM: "4GB", price: 2100.00, image: "/assets/image 17.jpg"},
    {category: "cellphone", device: "android", brand: "Samsung", model: "Galaxy s21", RAM: "12GB", price: 16500.00, image: "/assets/image 16.jpg"},
]
let count = 1;
for(let i of products){
    i.id = count;
    count++;
}

export {products};