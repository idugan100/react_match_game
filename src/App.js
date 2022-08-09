import './App.css';
import { useState,useEffect } from 'react';
import SingleCard from './components/SingleCard';

const cardImages=[
  {'src':'/img/helmet-1.png', matched:false},
  {'src':'./img/potion-1.png', matched:false},
  {'src':'./img/ring-1.png', matched:false},
  {'src':'./img/scroll-1.png', matched:false},
  {'src':'./img/shield-1.png', matched:false},
  {'src':'./img/sword-1.png', matched:false}
]

function App() {
  const[cards,setCards]=useState([])
  const[turns,setTurns]=useState(0);
  const[choiceOne,setChoiceOne]=useState(null);
  const [choiceTwo,setChoiceTwo]=useState(null);
//shuffle cards
  const shuffleCards=()=>{
    const shuffledCards=[...cardImages, ...cardImages].sort(()=>(Math.random()-0.5))
    .map((card)=>({...card,id:Math.random()}));
    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
  }
  useEffect(shuffleCards,[])
  //resets turn
  const resetTurn=()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev)=>(prev+1))
  }
  //compare cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      if(choiceOne.src==choiceTwo.src){
        setCards((prevCards)=>{

           return prevCards.map((card)=>{
            if(card.src==choiceOne.src){
              return{...card, matched:true}
            }
            else{
              return card;
            }
          })
        })
      }
      else{
        
      }

      setTimeout(()=>resetTurn(),1000);

    }
  },[choiceOne,choiceTwo])
//handle a choice
  const handleChoice=(card)=>{
    choiceOne ? setChoiceTwo(card):setChoiceOne(card);
  }

  

  return (
    <div className="App">
     <h1>Magic Match</h1>

     <button onClick={shuffleCards}>new game</button>

     <div className="card-grid">
      {cards.map((card)=>(
        <SingleCard key={card.id} handleChoice={handleChoice}card={card} flipped={card===choiceOne
          || card===choiceTwo || card.matched===true} disabled={choiceOne&&choiceTwo}/>
      ))}
      </div>
      <p>Turns: {turns}</p>

    </div>
  );
}

export default App;
