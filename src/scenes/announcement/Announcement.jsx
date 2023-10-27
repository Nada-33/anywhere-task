import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAnnouncements } from "../../state/stateMangament";
import styles from "./Announcement.module.scss"
function Announcement({ userId }) {
    const token = useSelector((state) => state.token);
    const announcements = useSelector((state) => state.announcements);
    console.log(announcements)
    const dispatch = useDispatch();
    useEffect(() => {
        const getAnnouncements = async () => {
            try {
                const response = await fetch(`http://localhost:3001/announcements`, {
                    method: "GET",
                    headers: { Authorization: `Bearer ${token}` },
                });
                const data = await response.json();
                dispatch(setAnnouncements(data));
            } catch (error) {
                console.error("Error fetching announcements:", error);
            }
        };

        getAnnouncements();
    }, [dispatch]);


    return (
        <div className={styles.announcement}>
            <div className={styles.title}>
                <p className={styles.titleFont}>Annnouncements</p>
                <p>something about announncement</p>
            </div>
            {announcements && announcements.length > 0 ? (
                announcements.map((announcement) => (
                    <div key={announcement.id} className={styles.container}>
                        <div className={styles.left}>

                            <div className={styles.user}>
                                <img src={`http://localhost:3001/assets/${announcement.picturePath}`} alt="" />
                            </div>

                            <div className={styles.userInfo}>
                                <div>{announcement.firstName} {announcement.lastName}</div>
                                <div>{announcement.courseName}</div>
                            </div>

                        </div>
                        <div className={styles.rigth}>
                            <div>{announcement.content}</div>
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

export default Announcement
