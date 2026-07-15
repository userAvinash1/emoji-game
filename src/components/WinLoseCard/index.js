

import './index.css'

const WinLoseCard = ({isWon, score, onPlayAgain}) => {
  const heading = isWon ? 'You Won 🎉' : 'You Lose 😢'
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="result-card">
      <div className="text-section">
        <h1>{heading}</h1>
        <p className="label">{isWon ? 'Best Score' : 'Score'}</p>
        <p className="score">{isWon ? '12/12' : `${score}/12`}</p>

        <button onClick={onPlayAgain} className="play-btn">
          Play Again
        </button>
      </div>

      <img src={imageUrl} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinLoseCard