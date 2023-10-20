import { useCharacterByIdQuery, useCharactersQuery } from "./characters";
import { useEpisodesQuery } from "./episodes";
import { useLocationsQuery } from "./locations";

export const rickAndMortyQueries = {
    getAllCharacters: useCharactersQuery,
    getCharacterById: useCharacterByIdQuery,
    getAllEpisodes: useEpisodesQuery,
    getAllLocations: useLocationsQuery,
  }