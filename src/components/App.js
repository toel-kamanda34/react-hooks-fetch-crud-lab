import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] =useState([])

  function handleNewQuestions(addedQuestion){
    setQuestions([...questions,addedQuestion])
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddedQuestion={handleNewQuestions} /> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;