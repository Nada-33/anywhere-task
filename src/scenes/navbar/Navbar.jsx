import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/stateMangament";
import { useNavigate } from "react-router-dom";
import { BsSearch, BsFillEnvelopeFill } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineUser, AiOutlineCloseCircle } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import styles from './Navbar.module.scss';
function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  //  const fullName = `${user.firstName} ${user.lastName}`;
  const image =user.picturePath
  console.log(`http://localhost:3001/assets/${image}`);
  const fullName = `nada nabil`
  return (

    <div className={styles.nav}>
      <div className={styles.container}>
        <div>
          <h3 className={styles.userName}>
            {fullName},
          </h3>
        </div>

        <div className={styles.rigth}>

          <div className={styles.SearchBar}>
            <BsSearch />
            <input type="text" placeholder="search" />
          </div>

          <div className={styles.notification}>

            <div className={styles.notifiIcon}>
              <BsFillEnvelopeFill />
            </div>
            <div className={styles.notifiIcon}>
              <IoMdNotifications />
            </div>
            <div className={`${styles.notifiIcon} ${styles.user}`}>
              {/* <AiOutlineUser/> */}
              <div className="Avtar">
              <img src={`http://localhost:3001/assets/${image}`} alt="" />
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Navbar
