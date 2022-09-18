window.addEventListener('load', function() {

    fetch('https://restcountries.com/v2/all')
    .then(function  (respuesta){
    return respuesta.json()
    })
    
    .then(function(data) {
    console.log(data)
   
   for (let i= 0; i < data.length; i ++){
        let nameCountries = '<p>' + 'Nombre del Pais : ' + data[i].name + '</p>';
        let region = '<p>' +  'Region : ' + data[i].region + '</p>';
        let capital = '<p>' + 'Capital : ' + data[i].capital + '</p>';
        let flag = '<p>' + 'Bandera : ' +"<img src=" + data[i].flags.png + ">" + '</p>';
        let languages = '<p>' + 'Idioma : ' +data[i].languages[0].name + '</p>';
        let population = '<p>' +'Cantidad de Poblacion : ' + data[i].population + '</p>';
    
        document.querySelector('ul').innerHTML += '<li>' +region + nameCountries + capital+ languages +population+ flag +'</li>'

    }
    
    });

    fetch('https://restcountries.com/v2/all')
    //fetch ('https://api.giphy.com/v1/gifs/trending?api_key=&limit=25&rating=g')
    .then(function  (respuesta){
    return respuesta.json()
    })
    
    .then(function(data) {
    console.log(data)
   
   for (let i= 0; i < data.length; i ++){
        let nameCountries = '<p>' + data[i].name + '</p>';
        let region = '<p>' + data[i].region + '</p>';
        let population = '<p>' + data[i].population + '</p>';
        let capital = '<p>' + data[i].capital + '</p>';
        

        document.querySelector('#poblacion').innerHTML += '<li>'+ population +'</li>'
        document.querySelector('#pais').innerHTML += '<li>'+ nameCountries +'</li>'
        document.querySelector('#region').innerHTML += '<li>'+ region +'</li>'
        document.querySelector('#capital').innerHTML += '<li>'+ capital +'</li>'
       
    }
    
    });

  

    })
