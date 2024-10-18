import HomeScreen, {fixHome as readyHomePage} from "./homeScreen/homeScreen.js";
import SchoolScreen, {initializeSchoolScreen as readySchool} from "./schoolScreen/schoolScreen.js";
import OutsideSchool from "./outsideSchoolScreen/outsideSchoolScreen.js";
import GardeningScreen, {startScreen as readyGardening} from "./gardeningScreen/gardeningScreen.js";
import NavBar from "./navBar/navBar.js";
import PokemonScreen, {setScreen as setPokemonScreen} from "./pokemonScreen/pokemonScreen.js";
import OffCanvasNavigation from "./offCanvasNavigation.js";

import bg from "./homeScreen/codingBG.jpg";

let dataHeight; 
function App() {
  return (
    <div className="App" class="text-center" onLoad={render}>
        
        <NavBar/>

        <div id="displayingData" style={{"scrollBehavior": "smooth", "position": "relative"}} data-bs-spy="scroll" data-bs-target="#myNav" tabIndex="0">
          <HomeScreen />
          
          <Parallax url="./homeScreen/codingBG.jpg"/>        
          
          <SchoolScreen/>
          
          <Parallax url="./homeScreen/codingBG.jpg"/>     
          
          <OutsideSchool/>
          
          <Parallax url="./homeScreen/codingBG.jpg"/>    
          
          <GardeningScreen/>

          <Parallax url="./homeScreen/codingBG.jpg"/>

          <PokemonScreen/>

        </div>  
        
        {/* <OffCanvasNavigation/> */}
    </div>
  );
}

function Parallax(url){
  return (
    <>
      <br/>
      <div className="parallax" style={{"--url": `url(${url})`}}></div>
      <br/>
    </>
  );
}


function render(){
  onScreenResize();
  window.addEventListener("resize", onScreenResize);
  readyHomePage();
  readySchool();
  setPokemonScreen();
  readyGardening();

  readyScrollAnimation();

}


function onScreenResize(){window.document.querySelector(":root").style.setProperty("--screenHeight", `${fixDataViewing()}px`);}

function fixDataViewing(){
  let data = window.document.getElementById("displayingData");
  dataHeight = window.innerHeight - data.getBoundingClientRect().top;
  return dataHeight;
}


function readyScrollAnimation(){
  window.document.getElementById("displayingData").addEventListener("scroll", function(){
    for(let i of window.document.getElementsByClassName("divider")){
      i.style.clipPath = `rect(${Math.min(Math.max(i.offsetTop - i.scrollTop, 0), dataHeight)}px, 0px, ${Math.min(Math.max(i.offsetTop - i.scrollTop + i.offsetHeight, 0), dataHeight)}, 100%)`;
    }
  });


  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add("scrollDisplay");
      }else{entry.target.classList.remove("scrollDisplay");}
    });
  });

  window.document.querySelectorAll(".Screen:not(#home) *").forEach(function(element){
    element.classList.add("scrollHidden");
    observer.observe(element);
  });
}


export default App;
