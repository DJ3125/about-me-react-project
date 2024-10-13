import './App.css';
import school from "./pictures/CHS.jpg";
import plant from "./pictures/Venus_Flytrap.jpg";
import logo from "./pictures/logo.jpg";

function App() {
  return (
    <div className="App" onLoad={render}>
        {/* <p id="debug"></p> */}
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark px-3" id="myNav">
          <div class="container-fluid">
            <a class="navbar-brand" href="#home">
              <div>
                <img class="d-inline-block align-text-top" alt="logo" src={logo} width="5%" height="5%"/>
                <h2 class="d-inline align-middle ms-2">DJ</h2>
              </div>
            </a>


            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#School">School</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Outside">Outside School</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Gardening">Gardening</a>
              </li>
            </ul>
          </div>
        </nav>


        <div id="displayingData" style={{"height": window.screen.height, "overflow-y": "scroll"}} data-bs-spy="scroll" data-bs-target="#myNav" data-bs-offset="20" data-bs-smooth-scroll="true" tabindex="0"  class="d-grid position-relative">
          <div class="p-5 text-black rounded bg-secondary" id="home">
            <h1>Dylan Ja</h1>
          </div>
          <hr/>

          <div id="School">
            <h3> School Life </h3>
            <p> I'm a student at Conant High School. I'm currently in Junior Year. </p>
            <p> I'm going to do Coding Club to help kids learn how to code. </p>
            <p> The electives that I'm currently taking are Spanish and Computer Science.</p>
            <img src={school} alt="Conant High School" width="600vw"/>
            <br/>
            <a href="https://adc.d211.org/Domain/10" class="links"> Conant High School </a>
          </div>
          
          <hr/>

          <div id="Outside">
            <h3> Outside School </h3>
            <p> Outside of school, I play sports such as swimming and tennis. </p>
            <p> I also like to watch TV, go outside, and read. </p>
            <p> My favorite snack is fruit. I don't like candy or many desserts. </p>
            
          </div>
          
          <hr/>

          <div id="Gardening">
            <h3 id="Gardening" class="subheader"> Gardening </h3>
            <p> One of my hobbies is gardening. At home, I grow many species of plants, both exotic and normal </p>
            <img src={plant} alt="My Favorite Plant" width="600vw"/>
            <p> The Venus Flytrap is my favorite exotic plant.</p>
            <p> I find it so interesting how these and other plants have evolved to eat meat in order to survive. </p>
          
          </div>

          <button type="button" class="position-fixed bottom-0 start-0 btn btn-sm bg-primary" data-bs-toggle="offcanvas" data-bs-target="#navSideMenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="offcanvas offcanvas-start" id="navSideMenu">
            <div class="offcanvas-header">
              <h1>Hello!</h1>
            </div>
            <div class="offcanvas-body">
            </div>
          </div>
        </div>  
        
        
    </div>
  );
}

function debug(){return window.document.getElementById("debug");}

function render(){
  let data = window.document.getElementById("displayingData");
  let height = window.innerHeight - data.getBoundingClientRect().top;
  data.style.height = `${height}px`;

}

export default App;
