import { rickAndMortyAPI } from "../API";
import { Character, CharacterOptions, PaginatedResponse } from "../types";

const charactersEndpoints = rickAndMortyAPI.injectEndpoints({
    endpoints: (builder) => ({
      characters: builder.query<PaginatedResponse<Character>, CharacterOptions | void>({
        query: (options) => ({url:`character/`, params:{...options}}),
      }),
      characterById: builder.query<Character, string | number>({
        query: (id) => ({ url:`character/${id}`}),
        
      }),
    })
  })

  export const {useCharacterByIdQuery, useCharactersQuery} = charactersEndpoints;
  