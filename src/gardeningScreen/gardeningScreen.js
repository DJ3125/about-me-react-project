import plant from "./Venus_Flytrap.jpg";

export default function GardeningScreen(){
    return(
        <div >
            <div id="gardening" className="Screen">
                <h3 id="Gardening"> Gardening </h3>
                <p> One of my hobbies is gardening. At home, I grow many species of plants, both exotic and normal </p>
                <img src={plant} alt="My Favorite Plant"/>
                <p> The Venus Flytrap is my favorite exotic plant.</p>
                <p> I find it so interesting how these and other plants have evolved to eat meat in order to survive. </p>  
            </div>
        </div>
    );
}