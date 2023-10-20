import { rickAndMortyQueries } from "../../APIs/Rick&MortyApi/endpoints";

export function EpisodePage(): JSX.Element {
  const {data, error, isLoading } = rickAndMortyQueries.getAllEpisodes();
  return isLoading 
    ? <h1>Carregando</h1> 
    : <>
      {  error
        ? <h1>Ih, deu rim</h1>
        : data?.results.map((episode) => <p>{episode.name}</p>) 

      }
    </>
}
