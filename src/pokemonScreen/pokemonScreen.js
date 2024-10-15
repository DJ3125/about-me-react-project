export default function PokemonScreen(){
    return(
        <div className="Screen" id="pokemon">
            <h3>Pokemon</h3>
            <p>I also like to collect pokemon cards! One of my favorite pokemon is:</p>
            <br/>
            <h4 id="pokemonTitle"></h4>
            <img id="pokeImage" width="50%"/>
            <p id="happy"></p>
            <p id="rate"></p>
        </div>
    );
}

async function getAPI(){
    let fetched = await fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash");
    if(!fetched.ok){
        throw "somethingWentWrong";
    }
    return await fetched.json();
}

export async function setScreen(){
    let json = await getAPI();
    window.document.getElementById("pokemonTitle").innerHTML = json.name.toUpperCase();
    // alert(json.id);
    // window.document.getElementById("pokeImage").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png";
    window.document.getElementById("happy").innerHTML = "Base Happiness is: " + json.base_happiness;
    window.document.getElementById("rate").innerHTML = "Capture rate is: " + json.capture_rate;
} 