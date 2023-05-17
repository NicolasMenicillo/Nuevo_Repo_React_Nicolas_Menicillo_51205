import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [response, setResponse] = useState({})
    const [error, setError] = useState({})
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {

        setLoad(true)
        fetch(url)
            .then((response) => {
                setResponse(response)
                return response.json()
            })
            .then((dataJson) => {
                setData(dataJson)
                setLoad(false)
            })
            .catch((_error) => {
                setError(_error)
            })
    }, [url])

    return [data, load, response, error]
}

export default useFetch