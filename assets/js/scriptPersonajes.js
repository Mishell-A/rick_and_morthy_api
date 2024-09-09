// * https://rickandmortyapi.com/api/character/ -> RICK AND MORTY

function getcharacter(id) {
  $.get(`https://rickandmortyapi.com/api/character/${id}`, function (data) {
      let charCard = $("<div></div>").addClass("caracter-card");

      // Nombre del personaje
      let nombre = $(`<a href="#" id="${id}"></a>`).text(data.name.toUpperCase()); // Corregido el uso de "data.name"
      nombre.addClass("name-personaje");

      let nombreContainer = $("<div></div>").addClass("name-container");
      nombreContainer.append(nombre);

      // Imagen del personaje
      let img = $("<img />").attr("src", data.image); // Corregido a "data.image"
      img.addClass("img-personaje");

      charCard.append(nombreContainer, img);
      $("#personajes-container").append(charCard);
  });
}

$(document).on("click", ".name-personaje", function (e) {
  console.log(e.target.id);

  $.get(`https://rickandmortyapi.com/api/character/${e.target.id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL API EN EL LOCALSTORAGE
      localStorage.setItem("rickandmorty-data", JSON.stringify(data));
  });
});

$(document).ready(function () {
  // Mostrar los personajes
  for (let i = 1; i <= 300; i++) {
      getcharacter(i); // Corregido a "getcharacter(i)"
  }
});
