import { rickAndMortyQueries } from "../../APIs/Rick&MortyApi/endpoints";

export function LocationPage(): JSX.Element {
  const {data, error, isLoading } = rickAndMortyQueries.getAllLocations();

  return isLoading 
    ? <h1>Carregando</h1> 
    : <>
      {  error
        ? <h1>Ih, deu rim</h1>
        : data?.results.map((location) => <p>{location.name}</p>) 

      }
    </>
}
