import me from '../Images/me.jpg'
import "../App.css"

const Navigation = () => {
    return (
        <>
         <nav className="MeSection">
        <div className="nameSection">
          <img className="meImage" src={me} alt="Jmari Wyatt"></img>
          <p>J'mari Wyatt</p>
        </div>
        <ul className="navList">
          <li>Home</li>
          <li>About Me</li>
          <li>Photo Gallery</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <div>
        </div>
      </nav>

        </>
    )
}

export default Navigation();