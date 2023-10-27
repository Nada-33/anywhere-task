import styles from "./SideNavbar.module.scss";
import { FaHome } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import { GiGraduateCap } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiAnnouncement } from "react-icons/tfi";
import { useState } from 'react';
//AiOutlineMenu GrSchedule  BiSolidBook GiGraduateCap BsGraphUpArrow TfiAnnouncement
function SideNavbar() {

    return (
        <div className={styles.sidebar} >
            <div className={styles.logo}>
                <h3 className={styles.logoName} >coligo</h3>

            </div>
            <ul className={styles.navList}>
                <li>
                    <a>
                        <FaHome className={styles.myIcon} />
                        <span className={styles.linkName}>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a>
                        <MdOutlineDateRange className={styles.myIcon} />
                        <span className={styles.linkName}>Schedule</span>
                    </a>
                </li>
                <li>
                    <a>
                        <BiSolidBook className={styles.myIcon} />
                        <span className={styles.linkName}> courses</span>
                    </a>
                </li>
                <li>
                    <a>
                        <GiGraduateCap className={styles.myIcon} />
                        <span className={styles.linkName}> Gradebook</span>
                    </a>
                </li>
                <li>
                    <a>
                        <BsGraphUpArrow className={styles.myIcon} />
                        <span className={styles.linkName}> Performance</span>
                    </a>
                </li>
                <li>
                    <a>
                        <TfiAnnouncement className={styles.myIcon} />
                        <span className={styles.linkName}> Announcement</span>
                    </a>
                </li>
            </ul>


        </div>
    )
}

export default SideNavbar;
