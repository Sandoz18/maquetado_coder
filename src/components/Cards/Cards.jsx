import styles from './Cards.module.scss';
import  cardsData  from './cardsData.js';
import {Card} from './Card.jsx';


export const Cards = () => {
console.log('🔄 Componente Cards renderizándose');
    return (
        <div className={styles.cards}>
            {cardsData.map((card) => {
                return <Card key={card.id} {...card} />;
            })}
        </div>
    )
}
