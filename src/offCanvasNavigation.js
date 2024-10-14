export default function OffCanvasNavigation(){
    return(
        <div>
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
    );
}