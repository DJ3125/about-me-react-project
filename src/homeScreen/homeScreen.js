import "./homeScreenStyle.css";

import raptor from "./Dinos/raptor2.png";
import raptor2 from "./Dinos/raptor.png";
import dilo from "./Dinos/dilo.png";
import compy from "./Dinos/comp2.png";

import bg from "./codingBG.jpg";

export default function HomeScreen(){
    return(
        <div>
            <div class="p-5 text-white bg-black" id="home">
                <h1 class="position-relative top-25" id="HomeTitle"></h1>
                <div id="appearingLayer" >
                    <div class="bg-light position-absolute translate-middle start-50" style={{"z-index": "1"}} id="infoTextBG">
                        <h3 id="infoTextTitle">About Me</h3>
                        <h4 id="description">Welcome to my webpage! Scroll down to learn more!</h4>
                        <img src={compy} width="25%"/>
                        <a href="#school"><button type="button" class="btn btn-primary d-block mx-auto mt-3">Lets Go!</button></a>
                    </div>
                    {/* <img src={raptor} style={{"opacity": "0", "z-index": "-1"}} height="25%" class="position-absolute translate-middle start-50 top-50" id="raptor"/>
                    <img src={dilo} style={{"opacity": "0", "z-index": "-1"}} height="25%" class="position-absolute translate-middle start-50 top-50" id="dilo"/> */}
                </div>
                
            </div>
        </div>
    );
}

export function fixHome(){
    const data = window.document.getElementById("home");
    const height = window.innerHeight - data.getBoundingClientRect().top;
    data.style.height = `${height}px`;
    document.getElementById("home").classList.add("Screen");
    initializeHome();
}

export async function initializeHome(){
    // fixHome();
    // let head = window.document.getElementById("home");
    // let rules = head.ownerDocument.defaultView.getMatchedCSSRules(head, "");




    // await addImages();


    await animateTitleLetters("Invoke-Item DJ.js");


    await animateCursor(window.document.getElementById("HomeTitle"), 3000);

    await animate(window.document.getElementById("HomeTitle"), 1000, "opacity: 0; transform: translate(0px, -150px)",
        {
            opacity: "1",
            transform: "translate(0px, 0px)"
        },
        {
            opacity: "0",
            transform: "translate(0px, -150px)"
        }
    )

    // window.document.getElementById("home").style = "background-image: url('./codingBG')";
    await addEverythingToHomeScreen();


    // await animateTitleLetters("DYLAN JA!!!!");
    // await addEverythingToHomeScreen();
    window.document.getElementById("displayingData").style.overflowY = "scroll";
}

async function animateTitleLetters(word){
    return new Promise(function(accept){
        const title = window.document.getElementById("HomeTitle");
        title.innerHTML = "";
        let count = 0;
        const loop = setInterval(function(){
            if(count >= word.length){
                title.innerHTML = word;
                window.clearInterval(loop);
                accept();
                return;
            }
            title.innerHTML = word.substring(0, count).concat("|");
            count++;
        }, 100);
    });
}


async function animateCursor(element, duration){
    return new Promise(function(accept){
        const timeInFlash = 500;
        const baseInner = element.innerHTML;
        let toggled = false;
        let count = Math.round(duration/timeInFlash);
        const loop = setInterval(function(){
            if(count < 0){
                window.clearInterval(loop);
                element.innerHTML = baseInner;
                accept();
            }
            toggled = !toggled;
            element.innerHTML = baseInner + (toggled ? "|" : "");
            count--;
        }, timeInFlash);
    });
}

async function addEverythingToHomeScreen(){
    return Promise.allSettled([
        animate(window.document.getElementById("HomeTitle"), 1000, "",
            {
                opacity: "0",
                transform: "translate(0px, -150px)"
            },
            {
                opacity: "1",
                transform: "translate(0px, 0px)"
            }
        ), 
        animate(window.document.getElementById("infoTextBG"), 1000, "opacity: 1; transform: translate(0px, 0px);", 
            {
                opacity: "0",
                transform: "translate(0px, -150px)"
            },
            {
                opacity: "1",
                transform: "translate(0px, 0px)"
            }
        ),
        animateTitleLetters("DYLAN JA!!!!"),
        animate(window.document.getElementById("dilo"), 1000, "transform: translate(-300px, 0px); z-index: -1;", 
            {
                opacity: "0",
                transform: "translate(0px, 0px)"
            },
            {
                opacity: "1",
                transform: "translate(-300px, 0px)"
            }
        )
    ]);
}

async function animate(element, duration, endStyle, ...frame){
    await element.animate(frame, duration).finished;
    element.style = endStyle;
}

async function addImages(){

    let docRaptor = window.document.createElement("img");
    docRaptor.src = dilo;
    // docRaptor.height = "300px";
    // docRaptor.width = "300px";
    docRaptor.style ="position: absolute; height: 200px; ";

    // let docDilo = window.document.createElement("img");
    // docDilo.src = dilo;
    // docDilo.height = "30%";
    // docDilo.style= "position: absolute;"

    // window.document.getElementById("home").appendChild(docDilo);
    window.document.getElementById("appearingLayer").appendChild(docRaptor);

    return Promise.all([
        animate(docRaptor, 1000, "position: absolute; height: 200px; opacity: 1; transform: translate(-300px, 0px)",
            {
                opacity: "0",
                transform: "translate(0px, 0px)"
            },
            {
                opacity: "1",
                transform: "translate(-300px, 0px)"
            }
        )
    ]);

}