window.addEventListener("load", load_items())
card_container = document.getElementById("popular");
console.log(card_container);

async function get_all_wine() {
    console.log("Ready!");
    const response = await fetch("/alcohols/get_all_wine");

    var data = await response.json();
    return data;
}

function create_card(id, img, name, price) {
    console.log(img, name, price);
    const card_item =
    `
            <div class="product_card">
                <a href="${id}">
                    <img src="data:image/png;base64,${img}" alt="">
                </a>
                <span class="name">${name}</span>
                <span class="price">${price}</span>
                <button class="add_to_card_btn" onclick="addtolocalstorageplz('${id}', '${name}', '${price}')">add to cart</button>
            </div>
        `
    card_container.insertAdjacentHTML("afterbegin", card_item)
}

async function load_items() {
    all =  await get_all_wine();
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
function addtolocalstorageplz(id, name, price) {

    const alcohol = {
        name: name,
        price: price
    }
    localStorage.setItem(id, JSON.stringify(alcohol));

}