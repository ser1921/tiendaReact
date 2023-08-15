import { useEffect, useState } from "react";
 
const ItemListContainer =(props) =>{   
    

    return (
        <section>
            <h2>Nuestros Productos:</h2>
            {props.children}
        </section>
    )
}

export {ItemListContainer}