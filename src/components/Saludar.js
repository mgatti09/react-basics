import React from 'react'

export default function Saludar(props) {    
    const {userInfo, saludarFn} = props
    const {name = "Anonimo", age ="0", color="Sin color"} = userInfo    
    return (
        <div>
            <p>
                Hola {name}, tiene {age} años y
                su color favorito es el {color}
            </p>
            <button onClick={() => saludarFn(name, age)}>Saludar</button>    
        </div>
    )
}
