$(document).ready(function () {
    // Obtenemos el dato del lugar guardado
    const lugar = JSON.parse(localStorage.getItem("dataDetalleLugar"));

    
    $("#nombre-lugar").text(lugar.name);
    $("#tipo-lugar").text(lugar.type)
    
  
  
    if (lugar.residents.length > 0) {
        // Llenar los residentes
      for (let residente of lugar.residents) {
        $.get(residente, function (residenteData) {
          let card = $("<div></div>").addClass("detalles-card");
          let nombre = $(`<h2></h2`).text(residenteData.name);
          let img = $("<img />").attr("src", residenteData.image);
          
  
          card.append(img, nombre);
  
          $("#residentes-container").append(card);
        });
      }
    } else {
      $("#residentes-container").append("<p>Este lugar no tiene residentes</p>");
    }
   
  });