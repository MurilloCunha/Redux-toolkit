import { useState } from "react";
import { CharacterOptions } from "../../APIs/Rick&MortyApi/types";
import { formDataToObject } from "../../Utils/formDataToObject";
import styles from './CharacterPage.module.css';
import { rickAndMortyQueries } from "../../APIs/Rick&MortyApi/endpoints";
import CharacterCard from "../../components/CharacterCard";

export function CharactersPage(): JSX.Element {
  const [characterRequestOptions, setCharacterRequestOptions] = useState<CharacterOptions>({});
  const {data, error, isLoading } = rickAndMortyQueries.getAllCharacters(characterRequestOptions);
  
  function handleFilter(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const filterOptions = formDataToObject(formData);

    setCharacterRequestOptions(filterOptions);
  }

  function handlePageNavigation(event: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    const action = event.currentTarget.dataset.action;
    const urlString = (action === 'next' ? data?.info.next : data?.info.prev ) ?? '';
    const url = new URL(urlString);
    const pageId = Number(url.searchParams.get('page'));
    
    setCharacterRequestOptions((prev) => ({...prev, page: pageId}))
  }

  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleFilter}>
        <input type='text' name="name" placeholder="character name" />
        <input type='text' name="species" placeholder="character species" />
        <select name="status">
          <option value=""> </option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
          <option value="unknown">unknown</option>
        </select>
        <select name="gender">
          <option value=""> </option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="genderless">genderless</option>
          <option value="unknown">unknown</option>
        </select>

        <button>filtrar</button>
        <button type="reset">Limpar filtro</button>
      </form>

      {
        isLoading 
          ? <h1>Carregando</h1> 
          : <>
            {  error
              ? <h1>Ih, deu rim</h1>
              : <ul className={styles.characterList}>
                {
                  data?.results?.map((character) => 
                  <li key={character.id}>
                    <CharacterCard character={character}/>
                  </li>
                  )
                }
              </ul>
            }
          </>
      }
      <button
       type="button"
       onClick={handlePageNavigation}
       disabled={!data?.info.prev}
       data-action='prev'
      >
        anterior
      </button>
      <button 
        type="button"
        onClick={handlePageNavigation}
        disabled={!data?.info.next}
        data-action='next'
      >
        próxima
      </button>
    </section>
  )
  
}
