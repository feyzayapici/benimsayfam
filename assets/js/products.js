const itemContents = document.querySelector('.item-content')

products.forEach(p => {

    itemContents.insertAdjacentHTML('beforeend', `
             <div class="product-item">
                            <a href="urun-detay.html?id=${p.id}">
                                <div class="product-img">
                                    <div class="new">Yeni</div>
                                    <img src="${p.image}" />
                                </div>
                            </a>
                        <div class="product-name">${p.title}</div>
                        <div class="product-cat">Kategori: ${p.category}</div>
                        <div class="product-price">${p.price} TL</div>
                </div>
    `)
})

