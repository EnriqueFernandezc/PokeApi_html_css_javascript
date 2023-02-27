// el boton home debe blanquear la pantalla
// next es el siguiente pokemon
// back es el pokemon anterior
// el otro boton es para buscar el pokemon y mostrarlo en pantalla

let input=document.querySelector('#input');
let search=document.querySelector('#search');
let screen=document.querySelector('#screen');
let home=document.querySelector('#button-home')


search.addEventListener('click', ()=>{
    let pokemon=input.value;

    let ruta=`https://pokeapi.co/api/v2/pokemon/${pokemon}/`

    fetch(ruta)
        .then(Response=>Response.json())
        .then(data=>{

            console.log(data);
            let id=data.id;
            let name=data.name;
            let type=data.types;
            let size=data.height;
            let stats=data.stats;

            screen.innerHTML=`<img src="${data.sprites.front_default}" alt="${data.name}" width="80%">`
        
        });
});
