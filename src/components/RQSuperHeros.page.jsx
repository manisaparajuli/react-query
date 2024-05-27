import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

const dataFetching = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHerosPage = () => {
  const [refetchTime, setRefetchTime] = useState(3000)
  const onSuccess = (data) => {
    if(data?.data.length === 4){
      setRefetchTime(false)
      console.log("Perform side effect after data fetching", data)
    }
  }
  const onError = (error) => {
    if(error){
      setRefetchTime(false)
    }
    console.log("Perform side effect after occurance of an error", error)
  }
  const{isLoading, data, isError, error, isFetching, refetch} = useQuery('super-hero', dataFetching, 
  {
    // cacheTime: 5000,
    refetchInterval: refetchTime,
    // enabled: false,
    onSuccess,
    onError
  })

  if(isLoading || isFetching){
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
