var currentUrl = window.location.href;
currentUrl = currentUrl.split("/").at(-1)


fetch("/alcohols/getBy" + currentUrl, {
    method: 'GET',
    headers: {
        // Добавляем необходимые заголовки
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => {
    if(!response.ok) {
        throw new Error("Your response status code: " + response.status);
    } else {
        return response.json();
        }
    }).then(data => {
        var data = JSON.parse(JSON.stringify(data));
        document.getElementById("type_and_name").innerHTML = data.type + " " + data.name;
        // document.getElementById('name').innerHTML = data.name;
        document.getElementById('type').innerHTML = data.type;
        document.getElementById('description').innerHTML = data.description;
        document.getElementById("big_description").innerHTML = data.description;
        document.getElementById('price').innerHTML = data.price;
        document.getElementById('manufacturer').innerHTML = data.manufacturer;
        // document.getElementById('type').innerHTML = data.type;
    //    console.log("/" + data.img.split("/")[5] + "/" + data.img.split("/")[6] + "/" + data.img.split("/")[7]);
//        document.getElementById('image').src = "/" + data.img.split("/")[5] + "/" + data.img.split("/")[6] + "/" + data.img.split("/")[7];    
        document.getElementById('alc_image').src = `data:image/png;base64,${data.img}`;
    });
