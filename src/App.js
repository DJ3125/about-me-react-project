import './App.css';


import HomeScreen, {fixHome as readyHomePage} from "./homeScreen.js";
import SchoolScreen from "./schoolScreen";
import OutsideSchool from "./outsideSchoolScreen.js";
import GardeningScreen from "./gardeningScreen.js";
import NavBar from "./navBar.js";
import OffCanvasNavigation from "./offCanvasNavigation.js";

function App() {
  return (
    <div className="App" class="text-center" onLoad={render}>
        
        <NavBar/>

        <div id="displayingData" style={{"height": window.screen.height, "overflow-y": "scroll"}} data-bs-spy="scroll" data-bs-target="#myNav" data-bs-offset="20" data-bs-smooth-scroll="true" tabindex="0"  class="d-grid position-relative">
          <HomeScreen />

          <br/>

          <SchoolScreen/>
          
          <hr/>

          <OutsideSchool/>
          
          <hr/>

          <GardeningScreen/>

        </div>  
        
        <OffCanvasNavigation/>
    </div>
  );
}

function render(){
  fixDataViewing();
  readyHomePage();
}

function fixDataViewing(){
  let data = window.document.getElementById("displayingData");
  let height = window.innerHeight - data.getBoundingClientRect().top;
  data.style.height = `${height}px`;
}

export default App;
