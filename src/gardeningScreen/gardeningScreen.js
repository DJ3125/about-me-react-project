import plant from "./Venus_Flytrap.jpg";
import dino from "./Dinos/compy.png";
import "./gardening.css";



let initialized = false;
export default function GardeningScreen(){
    return(
        <>
            <div id="gardening" className="Screen">
                <div class="screenContent">
                    <h3 className="scrollHidden" id="Gardening"> Gardening </h3>
                    <p className="scrollHidden"> One of my hobbies is gardening. At home, I grow many species of plants, both exotic and normal </p>
                    <img src={plant} alt="My Favorite Plant" className="hoverShadow scrollHidden"/>
                    <p className="scrollHidden"> The Venus Flytrap is my favorite exotic plant.</p>
                    <p className="scrollHidden"> I find it so interesting how these and other plants have evolved to eat meat in order to survive. </p>  
                    <br/>
                    <h6>Here are some other plants I grow:</h6>
                    <div id="scrollBillBoard">
                        
                    </div>
                </div>
            </div>
        </>
    );
}

async function getAPI(scienceName){
    const formattted = scienceName.replaceAll("%20");
    let fetched = await fetch(`https://api.inaturalist.org/v1/taxa?q=${formattted}&rank=species&rank_level=10&order=desc&order_by=observations_count`);
    if(!fetched.ok){
        throw "somethingWentWrong";
    }
    return fetched.json();
}

export async function startScreen(){
    if(initialized){return;}
    initialized = true;
    const plants = await Promise.all(["Capsicum annuum", "Cucurbita pepo", "Solanum lycopersicum", "Solanum melongena", "Thymus vulgaris", "Ocimum basilicum", "Lactuca sativa", "Cucumis sativus"].map(function(name){
        return getAPI(name);
    }));
    
    const parent = window.document.getElementById("scrollBillBoard");
    const parentWidth = parent.offsetWidth;
    const childNum = 8;
    const childWidth = 150;
    const margin = (parentWidth - childNum * childWidth)/childNum;
    const children = [];
    parent.addEventListener("mouseover", function(){children.forEach(function(entry){entry.style.animationPlayState = "paused";});});
    parent.addEventListener("mouseout", function(){children.forEach(function(entry){entry.style.animationPlayState = "running";})});
    for(let i = 0; i < childNum; i++){
        const container = window.document.createElement("div");
        container.classList.add("billboardChild");
        const img = window.document.createElement("img");
        console.log(plants[i]);
        container.setAttribute("plantName", plants[i].results[0].preferred_common_name);
        img.src = plants[i].results[0].default_photo.url;
        img.style.width = "100%";
        img.style.height = "100%";
        container.style.animationDelay = `-${i * (margin + childWidth)/parentWidth * 10}s`;

        // const sideInfo = createInfoForPlant(plant.results[0]);
        // container.addEventListener("mouseover", function(){
        //     sideInfo.style.display = "visible";
        // });
        // container.addEventListener("mouseout", function(){
        //     sideInfo.style.display = "hidden";
        // });


        container.appendChild(img);
        // container.appendChild(sideInfo);
        children.push(container);
        parent.appendChild(container);
    }
    // fetching();
}

function createInfoForPlant(plant){
    const div = window.document.createElement("div");
    div.classList.add("plantSideInfo");
    const title = window.document.createElement("h5");
    title.innerHTML = plant.preferred_common_name;
    const italic = window.document.createElement("i");
    italic.innerHTML = plant.name;
    div.appendChild(title);
    div.appendChild(italic);
    return div;

    // return(<div class="plantSideInfo">
    //     <h5>{plant.preferred_common_name}</h5>
    //     <i>{plant.name}</i>
    //     <a href={plant.wikipedia_url}>Wikipedia Page</a>
    // </div>);
}