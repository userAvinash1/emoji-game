import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="winLose-card">
      <div className="display-score">
        {isWon && <h1 className="head1">You Won</h1>}
        {!isWon && <h1 className="head1">You Lose</h1>}
        {isWon && <p className="para1">Best Score</p>}
        {!isWon && <p className="para1">Score</p>}
        {isWon && <p className="blue">12/12</p>}
        {!isWon && <p className="blue">{score}/12</p>}
        <button type="submit" className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      {isWon && (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="image"
        />
      )}
      {!isWon && (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="image"
        />
      )}
    </div>
  )
}

export default WinOrLoseCard
