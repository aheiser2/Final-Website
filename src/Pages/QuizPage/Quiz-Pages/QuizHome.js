import { Button, Menu, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import "../Quiz.css";
import Categories, {} from "../Quiz-Data/QuizCategories"; 
import { useNavigate } from "react-router-dom";
import ErrorMessage, {} from "../Quiz-Components/ErrorMessage"


 
const QuizHome = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if(!category || !difficulty || !name) {
      setError(true);
      return
    }
    else {
      setError(false)
      fetchQuestions(category, difficulty);
      navigate("/quizpage");
    }
  };

  return (
    <div className='quiz-content'>
      <div className='quiz-settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className='quiz-settings_select'>
          {error && <ErrorMessage>Please Fill Out All of the Fields</ErrorMessage>}

          <TextField 
            className="quiz-name-selector"
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            className="quiz-category-selector"
            select
            style={{ marginBottom: 30 }}
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            >
            {/* <Menu
             style={{ display: "flex", flexDirection: "row", padding: 0}}
            > */}
            {Categories.map((cat) => (
              <MenuItem className="quiz-category" key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
            {/* </Menu> */}
          </TextField>  

          <TextField
          className="quiz-difficulty-selector"
            select
            style={{ marginBottom: 30 }}
            label="Select Difficulty"
            variant="outlined"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
            >
            
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
          </TextField> 

          <Button variant='contained' color="primary" size="large"
          onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/blue-green-thoughts.jpg" className="banner" alt="quiz img" />
    </div>
  );
};

export default QuizHome;
