import './index.css'

const EmojiCard = props => {
  const {each, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = each
  const addToList = () => {
    onClickEmoji(id)
  }

  return (
    <li className="card">
      <button type="submit" onClick={addToList} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
