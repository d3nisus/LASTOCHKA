window.addEventListener("load", load_items())
card_container = document.getElementById("popular");

async function get_all_beer() {
    const response = await fetch("/alcohols/get_all_beer");

    var data = await response.json();
    return data;
}

function create_card(id, img, name, price) {
    const card_item =
    `
        <div class="product_card">
            <a href="${id}">
                <img src="data:image/png;base64,${img}" alt="">
            </a>
            <span class="name">${name}</span>
            <span class="price">${price}</span>
            <button class="add_to_card_btn">add to cart</button>
        </div>
    `
    // `
    //     <div class="card">
    //         <div class="card_top">
    //             <a href="${id}" class="card_img">
    //                 <img class="card_img" src="data:image/png;base64,${img}" alt="beluga" width="220px">
    //             </a>
    //         </div>
    //         <div class="card_bottom">
    //             <div class="card_price">${price}</div>
    //             <a href="#" class="card_title">${name}</a>
    //             <a href="#" class="card_btn">В корзину</a>
    //         </div>
    //     </div>
    // `
    card_container.insertAdjacentHTML("afterbegin", card_item)
}

async function load_items() {
    all =  await get_all_beer();
    for (let i = 0; i < all.length; i++) {
        const element = all[i];
        var id = element.id;
        var description = element.description;
        var img = element.img;
        var manufacturer = element.manufacturer;
        var name = element.name;
        var price = element.price;
        var type = element.type;
        create_card(id, img, name, price);
    }

}