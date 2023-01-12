import { useState } from 'react'

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(someData); 

    return (

        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData}}> Mudar Valor </button>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number +1 )}> mudar o estado </button>
        </div>
    )
}

export default ManageData