const logged = false    ;

if(logged){
    document.getElementById("navbar").style.visibility = 'hidden';
    document.getElementById("navbar").style.display = 'none';
}else{
    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.getElementById("navbar");
        let scrolled = false;
        window.addEventListener("scroll", function () {
            if (window.scrollY > 600 && !scrolled) {
                navbar.classList.add("small");
                scrolled = true;
            } else if (window.scrollY <= 600 && scrolled) {
                navbar.classList.remove("small");
                scrolled = false;
            }
        });
    });
}


let imagenes = [
    {
        "url": "img1.jpeg",
        "nombre": "Desarrollo 1",
        "descripcion": "Descripcion Desarrollo 1"

    },
    {
        "url": "img2.jpg",
        "nombre": "Desarrollo 2",
        "descripcion": "Descripcion Desarrollo 2"

    },
    {
        "url": "img3.png",
        "nombre": "Desarrollo 3",
        "descripcion": "Descripción Desarrollo 3"

    },{
        "url": "img4.jpg",
        "nombre": "Desarrollo 4",
        "descripcion": "Descripción Desarrollo 4"

    },
]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}