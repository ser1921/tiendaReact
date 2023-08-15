import { useEffect, useState } from "react"
import { json } from "react-router-dom";


function Productos() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                console.log(json);
                setProducts([...json])
            })
            .catch(error => console.error(error))
            .finally(() => setIsLoading(false));

    }, [])
    if (isLoading) return <div>Cargando...</div>

    return <div>Productos
        {products.map((product) => (
            <article key={product.id}>
                <h4>{product.title}</h4>
                <p>Descripcion: {product.description}</p>
                <span>Precio: ${product.price}</span>
                <button>Agregar al carrito</button>
            </article>
        ))}
    </div>
}

export default Productos