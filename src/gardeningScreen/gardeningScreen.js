import plant from "./Venus_Flytrap.jpg";
import dino from "./Dinos/compy.png";

import "./gardening.css";

let initialized = false;
export default function GardeningScreen(){
    return(
        <div id="gardening" className="Screen">
            <h3 id="Gardening"> Gardening </h3>
            <p> One of my hobbies is gardening. At home, I grow many species of plants, both exotic and normal </p>
            <img src={plant} alt="My Favorite Plant"/>
            <p> The Venus Flytrap is my favorite exotic plant.</p>
            <p> I find it so interesting how these and other plants have evolved to eat meat in order to survive. </p>  
            <div id="scrollBillBoard"><img src={dino} id="testImg"/></div>
        </div>
    );
}

export function startScreen(){
    if(initialized){return;}
    initialized = true;
    const names = ["comp2", "comp3", "compy", "dilo", "dilo2", "indom", "raptor", "raptor2"];
    for(let i of names){
        const img = window.document.createElement("img");
        img.src = dino;
        // img.style.position = "absolute";
        console.log(img.src);
        window.document.getElementById("scrollBillBoard").appendChild(img);
    }
}