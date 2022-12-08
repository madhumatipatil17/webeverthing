


let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grapes',
        tag: '001',
        price: 25,
        inCart: 1

    },
    {
        name: 'Banana',
        tag: '002',
        price: 40,
        inCart: 1

    },
    {
        name: 'tomato',
        tag: '003',
        price: 15,
        inCart: 1

    },
    {
        name: 'orange',
        tag: '004',
        price: 70,
        inCart: 1

    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');
}

function cartNumbers(product) {
    console.log("the product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    // console.log(productNumbers);
    // console.log(typeof productNumbers);

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        // console.log(productNumbers)
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItem(product);
}



function setItem(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        // console.log(cartItems[product.tag].inCart);
        cartItems[product.tag].inCart += 1;
        // console.log(cartItems[product.tag].inCart);
    } else {
        products.inCart = 0;
        cartItems = {
            [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    // console.log("My cartCost is", cartCost)
    // console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + (product.price * product.inCart));
    } else {
        localStorage.setItem("totalCost", product.price);
    }

}
function displayCart() {

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let table = document.getElementById('displaytable')
    let cartCost = localStorage.getItem('totalCost');
    // console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {

            let tr = document.createElement('tr')
            let td = document.createElement('td')
            td.innerHTML = item.name;
            let td1 = document.createElement('td')
            td1.innerHTML = item.tag;
            let td2 = document.createElement('td')
            td2.innerHTML = item.price;
            let td3 = document.createElement('td')
            td3.innerHTML = item.inCart;
            tr.appendChild(td)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            table.appendChild(tr)


        });
        let tot = document.getElementById('totalCost')
        let cost = document.createElement('h1')
        cost.innerHTML = "Total cost :" + cartCost;
        tot.appendChild(cost)


        // localStorage.clear();
    }
}

function clearCart() {

    localStorage.clear();


}
onLoadCartNumber();



displayCart();

// $(document).ready(function () {
//     $('#example').DataTable({
//         ajax: "../data/2500.txt",
//         deferRender: true,
//         scrollY: 200,
//         scrollCollapse: true,
//         scroller: true
//     });
// });