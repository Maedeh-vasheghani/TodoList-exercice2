import React, {useState} from "react";

export default function Form(props){

    const [formTitle , setFormTitle ] = useState ( );
    const [formContent , setFormContent ] = useState ( );
    const [formDay , setFormDay ] = useState ( );

    const handleTitleChange = e =>{
        setFormTitle(e.target.value);
    }
    const handleContentChange = e =>{
        setFormContent(e.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(props.cards.length + 1 <= 5) {
        console.log(formContent, formTitle);
        props.setCards(previousState => [...previousState, {id: props.cards.length + 1, title: formTitle, content: formContent}]);
        } else {
            alert('You Can make only 5 item per day')
        }
    }

    return (
        <form className="my-5 mx-auto" style={{maxWidth:'750px'}} onSubmit={handleSubmit}>
  <div className="mb-3">
       <label htmlFor="exampleInputEmail1" className="fw-bold">Your Work </label>
       <input type="text" className="form-control mt-3" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleTitleChange}/>
  </div>
  <div className="mb-4 mt-4">
    <label htmlFor="exampleInputPassword1" className="fw-bold">Description</label>
    <input type="text" className="form-control mt-3" id="exampleInputPassword1" onChange={handleContentChange}/>
  </div>
  
  <div className="text-center">
  <button type="submit" className="btn btn-primary mx-auto px-5 ">Submit</button>
  </div>

</form>
    )
}