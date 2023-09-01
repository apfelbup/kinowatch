import { useParams } from "react-router";
import { useGetPersonByIdQuery } from "../../services/streamberryAPI";
import styles from "./index.module.scss";



const Person = () => {
    const { id } = useParams();

    const {data} = useGetPersonByIdQuery(id);

    const person = data?.docs[0];

    return(
        <section className={styles.person}>
            <div className={styles.personBlock}>
                <div className={styles.photo}>
                    <img src={person?.photo} alt="person_photo" />
                </div> 

                <div className={styles.personInfo}>
                    <span className={styles.name}>
                        {person?.name}
                    </span>
                    <span className={styles.enName}>
                        {person?.enName}
                    </span>
                    <span className={styles.sex}>
                        Пол: {person?.sex}
                    </span>
                    <span className={styles.age}>
                        Возраст: {person?.age}
                    </span>
                    <span className={styles.profession}>
                        Род деятельности: {person?.profession?.map((item:{value:string}) => <span key={item.value}>{item.value}</span>)}
                    </span>
                    <div className={styles.films}>
                        Фильмы: <ul>{person?.movies?.filter((item:{name:string}) => item.name).slice(0, 30).map((item:{name:string}) => <li>{item.name}</li>
                        )}</ul>
                    </div>
                </div>
            </div>
            <div className={styles.facts}>
                <span className={styles.title}>
                    Интересные факты:
                </span>
                <ol className={styles.list}>
                    {person?.facts?.map((item:{value:string}) => <li key={item.value}  dangerouslySetInnerHTML={{ __html: item.value ?? '' }} />)}
                </ol>
            </div>

        </section>
    )
}

export default Person;