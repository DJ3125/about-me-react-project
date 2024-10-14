import logo from "./pictures/logo.jpg";

export default function NavBar(){
    return(
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
    );
}