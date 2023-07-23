import { CartWidget } from "./CartWidget"
import { Brand } from "./Brand"

export const NavBar = ({ barra }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid d-flex justify-content-between">
                <div class="d-flex align-items-center">
                    <Brand logo={0} />
                    <button class="navbar-toggler boton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#">Remeras</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#">Pantalones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navLink" href="#">Conjuntos</a>
                        </li>
                    </ul>
                    <div class="d-flex align-items-center justify-content-center d-block d-lg-none">
                        <CartWidget carrito={0} />
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-center d-none d-lg-block">
                    <CartWidget carrito={0} />
                </div>

            </div>

        </nav>
    )
}