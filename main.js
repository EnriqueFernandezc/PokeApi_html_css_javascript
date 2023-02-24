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
