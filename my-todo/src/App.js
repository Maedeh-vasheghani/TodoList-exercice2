import React, {useReducer, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { CardList } from "./Data/CardList";
import Card from "./Component/Card";
import IncrButton from "./Component/IncrButton";
import IncrButtonFonction from "./Component/IncrButton";
import Form from "./Component/Form";


export default function App() {

    const [cards, setCards] = useState(CardList);
    const [ignored, forceUpdate] = useReducer(x => x+1, 0);
  

    return (
        <>
        <Form cards={cards} setCards={setCards}/>
        <div className="row row-cols-2 row-cols-md-4 g-2 p-5">
        {cards.map(
            (card, index) =>{
                return (
                    <Card forceUpdate={forceUpdate} cards={cards} setCards={setCards} title={card.title} content={card.content} day ={card.day} key={card.id} id={index} />
                )
            }
        )}
        </div>

         {/* <div className="mt-5">
            <IncrButton />
            <IncrButtonFonction />
        </div>  */}
    </>

    )
}