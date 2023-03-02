let input=document.querySelector('#input');
let search=document.querySelector('#search');
let screen=document.querySelector('#screen');
let home=document.querySelector('#btn-home');
let info=document.getElementById('pokedex_info_container');

let next=document.querySelector('#btn-next');


home.addEventListener('click', ()=>{
    screen.style.backgroundColor='';
});

search.addEventListener('click', ()=>{
    let pokemon=input.value;

    let ruta=`https://pokeapi.co/api/v2/pokemon/${pokemon}/`

    fetch(ruta)
        .then(Response=>Response.json())
        .then(data=>{

            console.log(data);

            info.innerHTML=`
            <div class="mt-2">
            <ul>
                <li>Id: ${data.id}</li>
                <li>Nombre: ${data.name}</li>
                <li>Altura: ${data.height}</li>
                <li>Peso: ${data.weight}</li>
                <li>Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}</li>  
            </ul>
            </div>
            `
            screen.innerHTML=`<img src="${data.sprites.front_default}" alt="${data.name}" width="80%">`
        
        })
        .catch(err=>console.log(err));
});

// ${data.abilities.map(ability => ability.ability.name).join(', ')}
// Este código es una línea de código JavaScript. El mensaje impreso es una cadena de texto que incluye una lista de habilidades en el formato "Habilidades: habilidad1, habilidad2, habilidad3, ...". Esta lista de habilidades es construida a partir de los datos del objeto data que se pasa como argumento a la función.
// La lista de habilidades se construye utilizando la función map() de JavaScript, que toma un arreglo y devuelve otro arreglo con cada elemento modificado por una función que se pasa como argumento. En este caso, se utiliza la función ability => ability.ability.name para obtener el nombre de cada habilidad en el arreglo data.abilities.
// Finalmente, la lista de nombres de habilidades se une en una cadena de texto separada por comas utilizando la función join(',') antes de ser incluida en el mensaje impreso por console.log(). La cadena completa se incluye dentro de una plantilla de texto (conocida como template literal) que se encierra en acentos graves ( ) y que incluye una expresión ${} que permite incluir variables o expresiones de JavaScript dentro del texto.

next.addEventListener('click', ()=>{
    cambioPokemon();
})

let pokemonId=1;
function cambioPokemon(){
    pokemonId++;
    if(pokemonId>1008){
        pokemonId=1;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
        .then(Response=>Response.json())
        .then(data=>{

            info.innerHTML=`
            <div class="mt-2">
            <ul>
                <li>Id: ${data.id}</li>
                <li>Nombre: ${data.name}</li>
                <li>Altura: ${data.height}</li>
                <li>Peso: ${data.weight}</li>
                <li>Habilidades: ${data.abilities.map(ability => ability.ability.name).join(', ')}</li>  
            </ul>
            </div>
            `
            screen.innerHTML=`<img src="${data.sprites.front_default}" alt="${data.name}" width="80%">`
        
        })
        .catch(err=>console.log(err));
}

const btnhome = document.getElementById("btn-home");
btnhome.addEventListener("click", clear);

function clear() {
    screen.innerHTML = "";
}