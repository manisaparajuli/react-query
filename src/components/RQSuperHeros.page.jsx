import axios from "axios"
import { useQuery } from "react-query"

const dataFetching = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHerosPage = () => {
  const{pending, data} = useQuery('super-hero', dataFetching)

  if(pending){
    <h2>Loading....</h2>
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
