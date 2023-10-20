import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
export const API_URL = 'https://rickandmortyapi.com/api/';

export const rickAndMortyAPI = createApi({
  reducerPath: 'rickAndMortyAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: () => ({})
})
