import './index.css'

const EmojiCard = ({each, onClickEmoji}) => {
  const {id, emojiName, emojiUrl} = each


  
  return (
    <li className="card" onClick={() => onClickEmoji(id)}>
      <img src={emojiUrl} alt={emojiName} />
    </li>
    

    
  )
}

export default EmojiCard