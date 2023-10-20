import { useLocationsQuery } from "../../Services/rickAndMortyAPI";

export function LocationPage(): JSX.Element {
  const {data, error, isLoading } = useLocationsQuery();

  return isLoading 
    ? <h1>Carregando</h1> 
    : <>
      {  error
        ? <h1>Ih, deu rim</h1>
        : data?.results.map((location) => <p>{location.name}</p>) 

      }
    </>
}
