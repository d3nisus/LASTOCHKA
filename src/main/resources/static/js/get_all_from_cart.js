console.log(localStorage);
card_container = document.getElementById("popular");
var final_cost = 0;
for(var i = 0; i < localStorage.length; i++){
    var alcohol_data = JSON.parse(localStorage.getItem(localStorage.key(i)));

    const item =
    `
        <div>
            <span>${alcohol_data.name}</span>
            <div>
                    <span>${alcohol_data.price}</span>
            </div>
        </div>
    `
    card_container.insertAdjacentHTML("afterbegin", item)

    final_cost+=Number(alcohol_data.price)
//    console.log(alcohol_data.name + " " + alcohol_data.price);
//    console.log(alcohol_data.price);

}
var span = document.getElementById('vstavka');
span.textContent=final_cost;











