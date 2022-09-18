window.addEventListener('load', function () {


    fetch('https://api.giphy.com/v1/gifs/trending?api_key=tZKayqts1Wfw96LDt5XVXfjplo6vsC79&limit=25&rating=g')
        .then(function (respuesta) {
            return respuesta.json()
        })

        .then(function (informacion) {
            console.log(informacion.data)

            for (let i = 0; i < 4; i++) {
                let gifTitle = '<p>' +  informacion.data[i].title + '</p>';
                let picture = '<p>' + "<img src=" + informacion.data[i].images.original.url + ">" + '</p>';
                let dateTime = '<p>' + 'Fecha que alcanzó el Trending Topic : ' +  informacion.data[i].trending_datetime + '</p>';
            
                document.querySelector('ol').innerHTML += '<li>' + gifTitle + picture + dateTime + '</li>'


            }


        });
        fetch('https://api.giphy.com/v1/gifs/search?api_key=tZKayqts1Wfw96LDt5XVXfjplo6vsC79&q=bridget+jones&limit=25&offset=0&rating=g&lang=en')
        .then(function (respuesta) {
            return respuesta.json()
        })

        .then(function (informacion) {
            console.log(informacion.data)

           for (let i = 0; i < 5; i++) {
                let gifTitleBj = '<p>' +  informacion.data[i].title + '</p>';
                let pictureBj = '<p>' + "<img src=" + informacion.data[i].images.original.url + ">" + '</p>';
                
            
                document.querySelector('ol').innerHTML += '<li>' + gifTitleBj + pictureBj + '</li>'


            }


        });

        fetch('https://api.giphy.com/v1/gifs/search?api_key=tZKayqts1Wfw96LDt5XVXfjplo6vsC79&q=the+office&limit=25&offset=0&rating=g&lang=en')
        .then(function (respuesta) {
            return respuesta.json()
        })

        .then(function (informacion) {
            console.log(informacion.data)

           for (let i = 0; i < 5; i++) {
                let gifTitleOffice = '<p>' +  informacion.data[i].title + '</p>';
                let pictureOffice = '<p>' + "<img src=" + informacion.data[i].images.original.url + ">" + '</p>';
                
            
                document.querySelector('ol').innerHTML += '<li>' + gifTitleOffice + pictureOffice + '</li>'


            }


        })


})

