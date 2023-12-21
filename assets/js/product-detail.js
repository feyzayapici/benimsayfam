
window.basketStorage = localStorage.getItem('basket');

const basketContainer = document.querySelector('.basket-container')
const basketItems = document.querySelector('.basket-container-items')


function refreshBasket() {
    let totalPrice = 0

    basketContainer.style.display = "block";

    basketItems.innerHTML = "";

    window.basketStorage.forEach(p => {
        totalPrice += p.price;

        basketItems.insertAdjacentHTML('beforeend', `

             <div class="product-item">
                            <a href="urun-detay.html?id=${p.id}">
                                <div class="product-img">
                                    
                                    <img src="${p.image}" />
                                </div>
                            </a>
                        <div class="product-name">${p.title}</div>
                        <div class="product-price">${p.price} TL</div>
                       
                </div>
                <hr />
              
    `)
    })

    basketItems.insertAdjacentHTML('beforeend', `

             <div class="product-total-price">
                          
                        <div class="product-price">Toplam Tutar: <b>${totalPrice} TL</b></div>
                       
                </div>
                
              
    `)
}

if(window.basketStorage) {
    window.basketStorage = JSON.parse(basketStorage)

    refreshBasket();


} else {
    window.basketStorage = []
}

const product = window.products.find(p => "?id=" + p.id === location.search)

const itemContents = document.querySelector('.item-content')

function addBasket() {
    basketStorage.push(product)
    localStorage.setItem('basket', JSON.stringify(basketStorage))

    refreshBasket();
}

if(product) {
    itemContents.insertAdjacentHTML('beforeend', `
             <div class="product-item">
                        <div class="product-img">
                            <div class="new">Yeni</div>
                            <img src="${product.image}" />
                        </div>
                        <div class="product-name">${product.title}</div>
                        <div class="product-cat">Kategori: ${product.category}</div>
                        <div class="product-price">${product.price} TL</div>
                        <button class="add-basket" onclick="addBasket()">Sepete Ekle</button>
                </div>
    `)
}




