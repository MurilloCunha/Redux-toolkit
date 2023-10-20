import { Character } from '../../APIs/Rick&MortyApi/types';
import styles from './CharacterCard.module.css';

interface CharacterCardProps{
  onClick?(): void;
  character: Character
}

function CharacterCard({onClick,character}: CharacterCardProps): JSX.Element {
  return (
  <article 
    className={styles.wrapper} 
    style={{backgroundImage: `url(${character.image})`}}
  >
    <h3 className={styles.name}>
      {character.name}
    </h3>

    <span className={`${styles.status} ${styles[character.status]}`}>
      {character.status}
    </span>
  </article>
  )
}

export default CharacterCard;