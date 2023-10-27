import Announcement from "../announcement/Announcement";
import Navbar from "../navbar/Navbar";
import SideNavbar from "../sideNav/SideNavbar"
import Welcome from "../welcome/Welcome"
import Styles from "./HomePage.module.scss"
import List from "../list/List";
function HomePage() {
  return (
    <div className={Styles.container}>

      <SideNavbar />
      <div className={Styles.theBody}>
        <div>

          <Navbar />
        </div>
        <div className={Styles.theExamBody}>

          <  Welcome />
        </div>
        <div className={Styles.secound}>

          <div className={Styles.announcement}>
            <Announcement />
          </div>

          <div className={Styles.list}>
            <List />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
