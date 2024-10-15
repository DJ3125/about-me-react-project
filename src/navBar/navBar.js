import logo from "./logo.jpg";

export default function NavBar(){
    return(
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark px-3" id="myNav" style={{"z-index": "5"}}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#home">
              <div>
                <img class="d-inline-block align-text-top" alt="logo" src={logo} width="5%" height="5%"/>
                <h2 class="d-inline align-middle ms-2">DJ</h2>
              </div>
            </a>

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#school">School</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#outside">Outside School</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#gardening">Gardening</a>
              </li>
            </ul>
          </div>
        </nav>
    );
}