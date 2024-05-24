import { useState, useEffect } from "react"
import axios from "axios"
export const SuperherosPage = () => {

  const [data, setData] = useState([])
  const [ loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes')
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
  }, [])

  if (loading){
    return <h2>Loading.....</h2>
  }

  return (
    <div>{
      data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })  
    }</div>
  )
}