import Calling from "./calling";




export default function Menu () {
    <nav class="navbar sticky-top navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={goose} height="60" width="60" />
        Krusty Krab!
      </a>
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Menu!</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
}