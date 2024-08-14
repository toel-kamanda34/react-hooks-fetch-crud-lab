import React from "react";

function QuestionItem({ question, onDelete, onChange}) {


  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

 function handleDelete(){
 
  fetch(`http://localhost:4000/questions/${id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDelete(question));

  }

  
  function handleChange(event){

    const newCorrectIndex= parseInt(event.target.value)


     fetch(`http://localhost:4000/questions/${id}`, {
       method: "PATCH",
       headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify({
         "correctIndex": newCorrectIndex
      }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        
        onChange(updatedQuestion)

        console.log(updatedQuestion)
      
      });
   
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;