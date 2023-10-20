import { rickAndMortyAPI } from "../API";
import { Location, PaginatedResponse } from "../types";

const episodeEndpoints = rickAndMortyAPI.injectEndpoints({
    endpoints: (builder) => ({
        locations: builder.query<PaginatedResponse<Location>, void>({query: () => `location/`}),
    })
  })

  export const {useLocationsQuery} = episodeEndpoints;
  