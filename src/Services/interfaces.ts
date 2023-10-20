interface RequestInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface PaginatedResponse<Response> {
  info: RequestInfo;
  results: Response[];
}

type Status =  'alive' | 'dead' | 'unknown';
type Gender = 'female' | 'male' | 'genderless' | 'unkown';

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export interface CharacterOptions {
  id?: number;
  name?: string;
  status?: Status;
  species?: string;
  type?: string;
  gender?: Gender;
  page?: number;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: Date;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: Date;
}
