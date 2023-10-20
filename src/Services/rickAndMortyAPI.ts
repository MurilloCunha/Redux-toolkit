import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Character, Episode, PaginatedResponse, Location, CharacterOptions } from './interfaces';

export const API_URL = 'https://rickandmortyapi.com/api/';

export const rickAndMortyAPI = createApi({
  reducerPath: 'rickAndMortyAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (builder) => ({
    characters: builder.query<PaginatedResponse<Character>, CharacterOptions | void>({
      query: (options) => ({url:`character/`, params:{...options}}),
    }),
    characterById: builder.query<Character, string | number>({
      query: (id) => ({ url:`character/${id}`}),
      
    }),
    locations: builder.query<PaginatedResponse<Location>, void>({query: () => `location/`}),
    episodes: builder.query<PaginatedResponse<Episode>, void>({query: () => `episode/`}),
  })
})

export const {useCharactersQuery, useCharacterByIdQuery, useLocationsQuery, useEpisodesQuery } = rickAndMortyAPI;