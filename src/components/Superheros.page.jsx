import { useState, useEffect } from "react"
import axios from "axios"
export const SuperherosPage = () => {

  const [data, setData] = useState([])
  const [ loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes')
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    .catch((error) => {
      setError(error.message)
      setLoading(false)
    })
  }, [])

  if (loading){
    return <h2>Loading.....</h2>
  }

  if(error){
    return<h2>{error}</h2>
  }

  return (
    <div>{
      data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })  
    }</div>
  )
}