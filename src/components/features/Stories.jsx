import styles from './Stories.module.css';

export default function stories()
{
    const card=[1,2,3]
    return(
        <>
            <div className={styles.stories}>
                <h1>Stories From Our Travellers</h1>
                <h4>Real adventures from real people who trusted us with their journey.</h4>
            </div>
            <div className={styles.storyMainCards}>
                {card.map((cards)=>{
                    return(
                        <div className={styles.storyCards} key={cards}>
                            {cards}
                        </div>
                    )
                })}
            </div>
        </>
    )
}