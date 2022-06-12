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
    {category: "computer", device: "apple", brand: "Mac", model: "Mac Pro", RAM: "12GB", price: 100000.00, image: "https://images.macrumors.com/article-new/2019/06/2019-mac-pro-side-and-front-800x581.jpg"},
    {category: "smartTV", device: "android", brand: "Samsung", model: "Crystal UHD", RAM: "12GB", price: 30500.00, image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"},
]
let count = 1;
for(let i of products){
    i.id = count;
    count++;
}

export {products};