$ (document).ready(function() {
    obtenerUniversidad();
    obtenerinstitucion();
  });
  
      function obtenerUniversidad() {
    $.ajax({
      url: "https://www.datos.gov.co/resource/iwb2-skc4.json",
      type: "GET",
      data: {
        "$limit" : 5000,
        "$$app_token" : "62OChBFCv8CFfsptSbxLEAJnE"
      }
    }).done(function(data) {
    const universidades =data.map(element =>{
      return element.nombreinstitucion;
    });
  
  
    const nuni = [...new Set(universidades)];
    $("#uni").autocomplete({
      source: nuni
    });
    console.log(nuni)
    console.log(universidades);
    });
  }