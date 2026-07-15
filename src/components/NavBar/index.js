import './index.css'

const NavBar = ({score, topScore, isGameOn, time}) => {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Emoji Game</h1>
      </div>

      {isGameOn && (
        <div className="scores">
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
          <p>Time: {time}</p>
        </div>
      )}
    </div>
  )
}



export default NavBar