import { rickAndMortyAPI } from "../API";
import { Episode, PaginatedResponse } from "../types";

const episodeEndpoints = rickAndMortyAPI.injectEndpoints({
    endpoints: (builder) => ({
        episodes: builder.query<PaginatedResponse<Episode>, void>({query: () => `episode/`}),
    })
  })

  export const {useEpisodesQuery} = episodeEndpoints;
  