use('products');

// Mobiles Data
db.ecommerce.insertMany([
    {
        name: "Google Pixel Mobile",
        image: '/Assests/Mobile/google_mobile.jpeg',
        price: 300,
        category: "mobile",
        rating: 5,
        createdAt: new Date()
    },
    {
        name: "OnePlus Mobile",
        image: '/Assests/Mobile/oneplus_mobile.jpeg',
        price: 340,
        category: "mobile",
        rating: 3.4,
        createdAt: new Date()
    },
    {
        name: "Oppo Mobile",
        image: '/Assests/Mobile/oppo_mobile.webp',
        price: 199,
        category: "mobile",
        rating: 4,
        createdAt: new Date() 
    },
    {
        name: "Redmi Mobile",
        image: '/Assests/Mobile/redmi_mobile.jpeg',
        price: 499,
        category: "mobile",
        rating: 1.9,
        createdAt: new Date() 
    },
    {
        name: "Vivo Mobile",
        image: '/Assests/Mobile/vivo_mobile.jpeg',
        price: 299,
        category: "mobile",
        rating: 3.9,
        createdAt: new Date() 
    },
])

// Fashion Data
db.ecommerce.insertMany([
    {
        name: "Fashion Tshirt 1",
        image: '/Assests/Fashion/tshirt_one.webp',
        price: 49,
        category: "fashion",
        rating: 4.9,
        createdAt: new Date() 
    },
    {
        name: "Fashion Tshirt 2",
        image: '/Assests/Fashion/tshirt_two.jpeg',
        price: 56,
        category: "fashion",
        rating: 4,
        createdAt: new Date() 
    },
    {
        name: "Fashion Tshirt 3",
        image: '/Assests/Fashion/tshirt_three.jpeg',
        price: 30,
        category: "fashion",
        rating: 5,
        createdAt: new Date() 
    },
    {
        name: "Fashion Tshirt 4",
        image: '/Assests/Fashion/tshirt_four.jpeg',
        price: 29,
        category: "fashion",
        rating: 2,
        createdAt: new Date() 
    },
])

// Toys Data
db.ecommerce.insertMany([
    {
        name: "Toy 1",
        image: '/Assests/Toys/toy_one.jpeg',
        price: 8.3,
        category: "toys",
        rating: 3,
        createdAt: new Date() 
    },
    {
        name: "Toy 2",
        image: '/Assests/Toys/toy_two.jpeg',
        price: 4.99,
        category: "toys",
        rating: 4.99,
        createdAt: new Date() 
    },
    {
        name: "Toy 3",
        image: '/Assests/Toys/toy_three.jpeg',
        price: 2.99,
        category: "toys",
        rating: 1,
        createdAt: new Date() 
    },
    {
        name: "Toy 4",
        image: '/Assests/Toys/toy_four.jpeg',
        price: 12,
        category: "toys",
        rating: 4.32,
        createdAt: new Date() 
    },
])

// TV Data
db.ecommerce.insertMany([
    {
        name: "TV one",
        image: '/Assests/TV/tv_one.jpeg',
        price: 1200,
        category: "tv",
        rating: 3.99,
        createdAt: new Date() 
    },
    {
        name: "TV two",
        image: '/Assests/TV/tv_two.jpeg',
        price: 1000,
        category: "tv",
        rating: 4.2,
        createdAt: new Date() 
    },
    {
        name: "TV three",
        image: '/Assests/TV/tv_three.jpeg',
        price: 960,
        category: "tv",
        rating: 4.1,
        createdAt: new Date() 
    },
    {
        name: "TV four",
        image: '/Assests/TV/tv_four.jpeg',
        price: 2300,
        category: "tv",
        rating: 1.3,
        createdAt: new Date() 
    },
])

// Computer Data
db.ecommerce.insertMany([
    {
        name: "Computer one",
        image: '/Assests/TV/computer_one.jpeg',
        price: 280,
        category: "computer",
        rating: 4.1,
        createdAt: new Date()  
    },
    {
        name: "Computer two",
        image: '/Assests/TV/computer_two.jpeg',
        price: 300,
        category: "computer",
        rating: 5,
        createdAt: new Date()  
    },
    {
        name: "Computer three",
        image: '/Assests/TV/computer_three.png',
        price: 190,
        category: "computer",
        rating: 3.99,
        createdAt: new Date()  
    },
    {
        name: "Computer four",
        image: '/Assests/TV/computer_four.jpeg',
        price: 999,
        category: "computer",
        rating: 2,
        createdAt: new Date()  
    }
])