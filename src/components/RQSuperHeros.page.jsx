import axios from "axios"
import { useQuery } from "react-query"

const dataFetching = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHerosPage = () => {
  const{pending, data, isError, error} = useQuery('super-hero', dataFetching)

  if(pending){
    return <h2>Loading....</h2>
  }
  if (isError){
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <h2>UseQuery result</h2>
      {
        data?.data.map((hero) => {
          return <p key={hero.id}>{hero.name}</p>
        })
      }
    </div>
  )
}
