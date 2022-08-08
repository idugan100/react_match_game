

export default function SingleCard({card}) {
  return (
    <div className='card' key={card.id}>
          <div>
            <img className='front' src={card.src} alt="front of card" />
            <img className='back' src="/img/cover.png" alt="back of card" />
          </div>
        </div>
  )
}
