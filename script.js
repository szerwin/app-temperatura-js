let api_key = "a5d9dc67bbfa6fbd206b45de29d9637e";
let kelvin = 273.15;
let url ="https://api.openweathermap.org/data/2.5/weather"



  document.getElementById("botonBusqueda").addEventListener("click",() => {
    const ciudad = document.getElementById("ciudadEntrada").value
    if (ciudad) {
      datosClima(ciudad)
      
    }


  })
  function datosClima(ciudad) {
    fetch(`${url}?q=${ciudad}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => mostrarDatosDelClima(response))

    .catch(error => console.error('Error:', error));
    
  }

  function mostrarDatosDelClima(response) {
    //console.log(response) para tener en cuenta 

    const datosClima = document.getElementById("datosClima")
    datosClima.innerHTML= ""

    const  nombreCiudad = response.name
    const  nombrePais = response.sys.country
    const  temperatura = response.main.temp
    const  description = response.weather[0].description

//se generan los tituos para la información que se quiere mostarar
    const  tituloCiudad = document.createElement("h3")
    tituloCiudad.textContent = `La ciudad es: ${nombreCiudad},pais: ${nombrePais}`

    const infoClima = document.createElement("p")
    infoClima.textContent = `su temperatura es de : ${Math.floor(temperatura-kelvin)}°c `
    
    const descripcionCiudad = document.createElement("p")
    descripcionCiudad.textContent = `la ciudad de ${nombreCiudad} tiene un clima para el dia de hoy ${description} `

//esta parte es para agregara al div de datos clima para mostrar en la interfaz de la web
    datosClima.appendChild(tituloCiudad)
    datosClima.appendChild(infoClima)
    datosClima.appendChild(descripcionCiudad)

  } 
