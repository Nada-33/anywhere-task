import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWork } from "../../state/stateMangament";
import styles from "./List.module.scss"
function List() {
    const token = useSelector((state) => state.token);
    const work = useSelector((state) => state.work);
    console.log(work)
    console.log("nada");
    const dispatch = useDispatch();
    useEffect(() => {
        const getQuiz = async () => {
            try {
                const response = await fetch(`http://localhost:3001/course/quiz`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                dispatch(setWork(data));
            } catch (error) {
                console.error("Error fetching quize:", error);
            }
        };

        getQuiz();
    }, [dispatch, token]);
    const formatDate = (dateString) => {
        const dueDate = new Date(dateString);
        return dueDate.toLocaleDateString();
    };
    return (
        <div className={styles.list}>
            <div className={styles.title}>

                <p className={styles.titleFont}>Whats due</p>
                <span>smth else to say</span>
            </div>


            {work && work.length > 0 ? (
                work.map((item) => (
                    <div key={item.id} >
                        <p className={styles.titleMargin}>{item.topic}</p>
                        <div className={styles.container}>

                            <div className={styles.left}>
                                <p>course:</p>
                                <p>topic</p>
                                <p>Due</p>
                            </div>
                            <div className={styles.rigth}>
                                <p>Math</p>
                                <p>{item.topic}</p>
                                <p>{formatDate(item.dueDate)}</p>
                            </div>
                        </div>
                        <div className={styles.last}>
                            <button className={styles.mybtn}><p>start {item.type}</p> </button>
                            <hr className={styles.myHr} />
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>

    )
}

export default List
