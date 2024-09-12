//* https://rickandmortyapi.com/api/location */
function getLocation(id) {
    $.get(`https://rickandmortyapi.com/api/location/${id}`, function (data) {
        let locationCard = $("<div></div>").addClass("location-card");

        let nombre = $(`<a href="./detallesLugar.html" id="${id}"></a>`).text(data.name.toUpperCase());
        nombre.addClass("name-lugares");

        let nombreContainer = $("<div></div>").addClass("name-container");
        nombreContainer.append(nombre);

        locationCard.append(nombreContainer);
        $("#lugares-container").append(locationCard);
    });
}

$(document).on("click", ".name-lugares", function (e) {
    console.log(e.target.id);

    $.get(`https://rickandmortyapi.com/api/location/${e.target.id}`, function (data) {
        
        localStorage.setItem("dataDetalleLugar", JSON.stringify(data));
    });
});

$(document).ready(function () {
    console.log(1);
   
    for (let i = 1; i <= 126; i++) {
        getLocation(i);
    }
});

