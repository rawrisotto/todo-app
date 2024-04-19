import moon from "/assets/icon-moon.svg"
import sun from "/assets/icon-sun.svg"

const Heading = (props) => {
  return(
    <div className="heading">
      <h1 className="heading__title">Todo</h1>
      <button className="btn" onClick={() => props.toggleDarkMode()}>
        <img src={props.darkMode ? sun : moon} alt="Toggle theme icon." />
      </button>
    </div>
  )
}

export default Heading