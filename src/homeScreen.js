import ""

export default function HomeScreen(){
    return(
        <div class="p-5 text-white bg-black" id="home">
            <h1 class="position-relative top-25">Dylan Ja</h1>
        </div>
    );
}

export function fixHome(){
    let data = window.document.getElementById("home");
    let height = window.innerHeight - data.getBoundingClientRect().top;
    data.style.height = `${height}px`;
}