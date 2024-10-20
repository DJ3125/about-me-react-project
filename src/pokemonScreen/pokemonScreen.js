let initialized = false;

export default function PokemonScreen(){
    return(
        <div className="Screen" id="pokemon">
            <h3>Pokemon</h3>
            <p>I also like to collect pokemon cards! One of my favorite pokemon is:</p>
            <br/>
            <h4 id="pokemonTitle" className="scrollHidden"></h4>
            <img id="pokeImage" className="scrollHidden"/>
            <p id="happy" className="scrollHidden"></p>
            <p id="rate" className="scrollHidden"></p>
        </div>
    );
}

//eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjo4NzA0MjM3LCJleHAiOjE3Mjk1MjY1MjR9.0hX3VUUm9inyU0XRR5cM1vFClkGpQbVUa98b_Hg_JdvrfLWtDJdvIrG3lb3y6IL_jHrpraVARGHtqY-V8Gv3eQ

async function getAPI(scienceName){
    const formattted = scienceName.replaceAll("%20");
    let fetched = await fetch(`https://api.inaturalist.org/v1/taxa?q=${formattted}&rank=species&rank_level=10&order=desc&order_by=observations_count`);
    if(!fetched.ok){
        throw "somethingWentWrong";
    }
    return fetched.json();
}

export async function setScreen(){
    if(initialized){return;}
    initialized = true;
    // console.log(await getAPI("Capsicum annuum"));

} 