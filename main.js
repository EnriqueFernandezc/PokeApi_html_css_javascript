fetch('https://pokeapi.co/api/v2/pokemon/1/')
    .then(Response=>Response.json())
    .then(data=>{

        console.log(data);
        let id=data.id;
        let name=data.name;
        let type=data.types;
        let size=data.height;
        let stats=data.stats;
    });

    // el boton home debe blanquear la pantalla
    // next es el siguiente pokemon
    // back es el pokemon anterior
    // el otro boton es para buscar el pokemon y mostrarlo en pantalla
