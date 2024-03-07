let products = {
    data: [{
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "images/products/white-tshirt.jpg",
    },
    {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "images/products/short-skirt.jpg",
    },
    {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "images/products/sporty-smartwatch.jpg",
    },
    {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "images/products/knitted-top.jpg",
    },
    {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "images/products/black-leather-jacket.jpg",
    },
    {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "images/products/pink-trousers.jpg",
    },
    {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "images/products/brown-jacket.jpg",
    },
    {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "images/products/comfy-gray-pants.jpg",
    },
    ],
};

for (let i of products.data) {

    let card = document.createElement("div");

    card.classList.add("card", "i.category");

    let imageContainer = document.createElement("img");
    imageContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
}