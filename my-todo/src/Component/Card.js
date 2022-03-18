

export default function Card ({image, title, content,day,id,cards, setCards, forceUpdate}) {

  
  function handleRemove(id) {
    //const newCard = CardList.filter((card) => card.id !== id);
    //setCards(newCard);
    const index = cards.findIndex((i) => i.id == id);
    cards.splice(index, 1);

    setCards(cards);
    forceUpdate();
    //console.log(id, cards, index);
  }




    return (

    <div className="col">

      <div className="card">
      {/* <img src={image} class="card-img-top" alt="..." />  */}
         <div className="card-body">
             <h5 className="card-title">{title}</h5>
             <p className="card-text">{content}</p>
             <p className="card-text">{day}</p>
             <button className=" btn btn-danger px-4" onClick={() => {
               handleRemove(id);
             }} >Delet</button>
         </div>
    </div>
  </div>
    )
}