import { useState, useEffect } from 'react'


// 4 custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // hook para ser chamado apenas uma vez
    // 5- Refatorando o POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    // 6 -- loading
    const [loading, setLoading] = useState(false);

    // ,7 - tratando erros
    const [error, setError] = useState(null);


    // 8 - Desafio Removendo:
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);

        } else if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setMethod(method);
            setItemId(data);
        }

    }

    useEffect(() => {

        const fetchData = async () => {

            // 6 loading 
            setLoading(true);

            try {
                const res = await fetch(url)
                const json = await res.json()

                // seta os dados na variavel com o hook
                setData(json)
            } catch (error) {
                console.log(error.message);
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false);

        }

        // Chama a funçao
        fetchData()

    }, [url, callFetch])

    // 5 - Refatorando POST
    useEffect(() => {
        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions)

                const json = await res.json()

                setCallFetch(json)

            } else if(method === "DELETE") {
                const deleteURL = `${url}/${itemId}`

                const res = await fetch(deleteURL, config)
                
                const json = await res.json()

                setCallFetch(json)

            }
        }
        httpRequest();
    }, [config, method, url])
    // exportamos o hook como uma função completa, mas utilizamos so algumas partes dele.
    return { data, httpConfig, loading, error };
}