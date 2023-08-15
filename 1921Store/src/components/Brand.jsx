import { Link } from "react-router-dom"

export const Brand = ({ logo }) => {
    return (
        <div class="container-fluid d-flex ">
            <Link><img src="./src/assets/logo.png" alt="logo" class="logo" /></Link>
           
            <h1 class="d-flex align-items-center justify-content-center">1921</h1>
        </div>
    )
}