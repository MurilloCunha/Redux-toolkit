import { useEpisodesQuery } from "../../Services/rickAndMortyAPI";

export function EpisodePage(): JSX.Element {
  const {data, error, isLoading } = useEpisodesQuery();
  return isLoading 
    ? <h1>Carregando</h1> 
    : <>
      {  error
        ? <h1>Ih, deu rim</h1>
        : data?.results.map((episode) => <p>{episode.name}</p>) 

      }
    </>
}
