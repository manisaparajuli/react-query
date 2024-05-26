import axios from "axios"
import { useQuery } from "react-query"

const dataFetching = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHerosPage = () => {
  const{isLoading, data, isError, error, isFetching, refetch} = useQuery('super-hero', dataFetching, 
  {
    // cacheTime: 5000,
    refetchInterval: 2000,
  })

  if(isLoading){
    return <h2>Loading....</h2>
  }
  if (isError){
    return <h2>{error.message}</h2>
  }

  console.log({isLoading, isFetching})

  return (
    <div>
      <h2>UseQuery result</h2>
      <button onClick={refetch}>Fetch Heros</button>
      {
        data?.data.map((hero) => {
          return <p key={hero.id}>{hero.name}</p>
        })
      }
    </div>
  )
}
