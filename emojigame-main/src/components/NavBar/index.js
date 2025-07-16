import './index.css'

const NavBar = props => {
  const {score, topScore, game} = props
  return (
    <div className="top-sec">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="img"
          alt="emoji logo"
        />
        <h1 className="logo-name">Emoji Game</h1>
      </div>
      {game && (
        <div className="score-card">
          <p className="logo-name">Score: {score}</p>
          <p className="logo-name">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
