import Styles from "./Welcome.module.scss"
function Welcome() {
    return (
        <div className={Styles.container}>
            <div className={Styles.exam}>
                <h1>Exams Time</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellat eveniet harum explicabo soluta incidunt minus atque nihil placeat. Ut, illum quasi! Exercitationem repellat enim porro dolore velit ullam eveniet?</p>
                <h6>something to say but the image is bad </h6>
                <button className={Styles.mybtn}>view examp tips</button>
            </div>
            <div className={Styles.theImage}>
                <img className={Styles.myImage}  src="assets/123.png" alt=""/>
            </div>

        </div>
    )
}

export default Welcome;
