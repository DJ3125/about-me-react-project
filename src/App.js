import HomeScreen, {fixHome as readyHomePage} from "./homeScreen/homeScreen.js";
import SchoolScreen, {initializeSchoolScreen as readySchool} from "./schoolScreen/schoolScreen.js";
import OutsideSchool from "./outsideSchoolScreen/outsideSchoolScreen.js";
import GardeningScreen from "./gardeningScreen/gardeningScreen.js";
import NavBar from "./navBar/navBar.js";
import PokemonScreen, {setScreen} from "./pokemonScreen/pokemonScreen.js";
import OffCanvasNavigation from "./offCanvasNavigation.js";

import bg from "./homeScreen/codingBG.jpg";

let dataHeight;

function App() {
  return (
    <div className="App" class="text-center" onLoad={render}>
        
        <NavBar/>

        <div id="displayingData" style={{"height": window.screen.height, "scroll-behavior": "smooth"}} data-bs-spy="scroll" data-bs-target="#myNav" data-bs-offset="20" data-bs-smooth-scroll="true" tabindex="0"  class="d-grid position-relative">
          <HomeScreen />

          <br/>
          <div className="parallax"></div>          

          <SchoolScreen/>
          
          <hr/>
          <div className="parallax"></div>

          <OutsideSchool/>
          
          <hr/>
          <div className="parallax"></div>

          <GardeningScreen/>

          <hr/>

          <PokemonScreen/>

        </div>  
        
        {/* <OffCanvasNavigation/> */}
    </div>
  );
}

function render(){
  fixDataViewing();
  readyHomePage();
  readySchool();
  setScreen();

  window.document.getElementById("displayingData").addEventListener("scroll", function(){
    // alert("scrolled");
    for(let i of window.document.getElementsByClassName("divider")){
      i.style.clipPath = `rect(${Math.min(Math.max(i.offsetTop - i.scrollTop, 0), dataHeight)}px, 0px, ${Math.min(Math.max(i.offsetTop - i.scrollTop + i.offsetHeight, 0), dataHeight)}, 100%)`;
    }
  });


  const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("scrollDisplay");
      }else{
        entry.target.classList.remove("scrollDisplay");
      }
    });
  });

  const elements = window.document.querySelectorAll(".Screen:not(#home) *");
  // alert(elements.length);
  elements.forEach(function(element){
    element.classList.add("scrollHidden");
    observer.observe(element);
  });

}

function fixDataViewing(){
  let data = window.document.getElementById("displayingData");
  let height = window.innerHeight - data.getBoundingClientRect().top;
  data.style.height = `${height}px`;
  dataHeight = height;
}

export default App;
