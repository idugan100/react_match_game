import './SingleCard.css'

export default function SingleCard({handleChoice, card, flipped,disabled}) {
    const handleClick=()=>{
        handleChoice(card)
    }
  return (
    <div className='card' >
          <div className={flipped ? "flipped":""}>
            <img className='front' src={card.src} alt="front of card" />
            <img className='back' onClick={!disabled? handleClick:()=>{}} src="/img/cover.png" alt="back of card" />
          </div>
        </div>
  )
}
