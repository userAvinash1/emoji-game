import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {list: [], topScore: 0, score: 0, isWon: false, game: true}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  highScoreAchieved = () => {
    this.setState({isWon: true, list: [], game: false, score: 0, topScore: 12})
  }

  onClickEmoji = id => {
    const {list, score, topScore, isWon, isLoose, game} = this.state
    if (score === 12) {
      this.setState({isWon: true, list: [], game: false})
    } else if (!list.includes(id)) {
      this.setState(prevState => ({
        list: [...prevState.list, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({isWon: false, list: [], game: false})
    }
  }

  onClickPlayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({
        list: [],
        score: 0,
        isWon: false,
        game: true,
        topScore: score,
      })
    } else {
      this.setState({
        list: [],
        score: 0,
        isWon: false,
        game: true,
      })
    }
  }

  render() {
    const {isWon, score, topScore, game, list} = this.state
    console.log(list)

    const randomList = this.shuffledEmojisList()
    if (score === 12) {
      this.highScoreAchieved()
    }

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} game={game} />
        {game && (
          <ul className="emojis-card">
            {randomList.map(each => (
              <EmojiCard
                each={each}
                onClickEmoji={this.onClickEmoji}
                key={each.id}
              />
            ))}
          </ul>
        )}
        {!game && (
          <WinOrLoseCard
            isWon={isWon}
            score={score}
            topScore={topScore}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
