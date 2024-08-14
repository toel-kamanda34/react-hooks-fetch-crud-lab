import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const[displayedQuestions , setDisplayedQuestions]=useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questionData) => setDisplayedQuestions(questionData) )
  },[])

  function handleDeleteQuestion(deletedQuestion) {
    const updatedItems = displayedQuestions.filter((displayedQuestion) => displayedQuestion.id !== deletedQuestion.id);
    setDisplayedQuestions(updatedItems);
  }

  function handleQuestionUpdate(updatedQuestion){
    
    const updatedQuestions = displayedQuestions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      }
      return question;
    });
    setDisplayedQuestions(updatedQuestions);


  }
  return (
    <section>
      <h1>Quiz Questions</h1>

      <ul>{displayedQuestions.map((displayedQuestion) =>(
        <QuestionItem  key={displayedQuestion.id} 
                       question={displayedQuestion} 
                       onDelete={handleDeleteQuestion} 
                       onChange={handleQuestionUpdate}
                       />
      ))
        }
      </ul>
    </section>
  );
}

export default QuestionList;