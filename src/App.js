import {useState} from 'react'

import EmojiCard from './components/EmojiCard'
import WinLoseCard from './components/WinLoseCard'

import './App.css'

import NavBar from './components/NavBar'

import {useEffect} from 'react'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]



function App() {
  const [clickedList, setClickedList] = useState([])
  const [score, setScore] = useState(0)
  const [isGameOn, setIsGameOn] = useState(true)
  const [isWon, setIsWon] = useState(false)
  const [topScore, setTopScore] = useState(0)
  const [time, setTime] = useState(30)
  const [hasStarted, setHasStarted] = useState(false)
  
  const [shuffledList, setShuffledList] = useState(emojisList)

  const shuffleEmojis = () => {
  const newList = [...emojisList].sort(() => Math.random() - 0.5)
  setShuffledList(newList)
}



const onPlayAgain = () => {
  setClickedList([])
  setScore(0)
  setIsGameOn(true)
  setIsWon(false)
  setTime(30)
  setHasStarted(false)  // reset start state
  setShuffledList(emojisList) //  reset order
}

useEffect(() => {
  if (!isGameOn || !hasStarted) return

  const timer = setInterval(() => {
    setTime(prev => prev - 1)
  }, 1000)

  return () => clearInterval(timer)
}, [isGameOn, hasStarted])


useEffect(() => {
  if (time === 0) {
    setIsGameOn(false)
    setIsWon(false)
  }
}, [time])


const onClickEmoji = id => {

  if (!hasStarted) {
    setHasStarted(true)  //  start timer on first click
  }


  if (clickedList.includes(id)) {
  setIsGameOn(false)
  setIsWon(false)

  //setTopScore(prev => Math.max(prev, score)) // important
 } else {
      if (score + 1 === emojisList.length) {
      setIsGameOn(false)
      setIsWon(true)
      setTopScore(prev => Math.max(prev, score + 1))
      }
      else {
      const newScore = score + 1
      setClickedList(prev => [...prev, id])
      setScore(prev => prev + 1)
      // update topScore immediately
      setTopScore(prev => Math.max(prev, newScore))

      shuffleEmojis()  //  ONLY here
}
  }
}




//const shuffledList = [...emojisList].sort(() => Math.random() - 0.5)  - bcz , the emoji;s are shuffling for every second withput even clicking..


return (


  <div className="container">

  

  <NavBar 
  score={score} 
  topScore={topScore} 
  isGameOn={isGameOn} 
  time={time}   // add this
 />


  {isGameOn ? (
    <ul className="emoji-list">
      {shuffledList.map(each => (
        <EmojiCard
          key={each.id}
          each={each}
          onClickEmoji={onClickEmoji}
        />
      ))}
    </ul>
  ) : (
    <WinLoseCard
      isWon={isWon}
      score={score}
      onPlayAgain={onPlayAgain}
    />
  )}
</div>
 
)
  
}

export default App