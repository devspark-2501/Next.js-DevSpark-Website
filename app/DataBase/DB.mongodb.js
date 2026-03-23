use('products');

db.products.insertMany([
    {
        name: "Black Headphones",
        price: 120,
        stock: "in stock",
        image: './assets/Black_Headphones.png'
    },
    {
        name: "Blue Headphones",
        price: 110,
        stock: "in stock",
        image: './assets/Blue_Headphones.png'
    },
    {
        name: "Gaming Keyboard",
        price: 150,
        stock: "out of stock",
        image: './assets/Gaming_Keyboard.png'
    },
    {
        name: "Keyboard",
        price: 80,
        stock: "in stock",
        image: './assets/Keyboard.png'
    },
    {
        name: "Monitor",
        price: 300,
        stock: "in stock",
        image: './assets/Monitor.png'
    },
    {
        name: "Mouse",
        price: 40,
        stock: "in stock",
        image: './assets/Mouse.png'
    },
    {
        name: "Red Headphones",
        price: 130,
        stock: "out of stock",
        image: './assets/Red_Headphones.png'
    },
    {
        name: "White Keyboard",
        price: 90,
        stock: "in stock",
        image: './assets/White_Keyboard.png'
    },
    {
        name: "Black Headphones 2",
        price: 140,
        stock: "in stock",
        image: './assets/2Black_Headphones.png'
    },
    {
        name: "Blue Headphones 2",
        price: 135,
        stock: "out of stock",
        image: './assets/2Blue_Headphones.png'
    }
])