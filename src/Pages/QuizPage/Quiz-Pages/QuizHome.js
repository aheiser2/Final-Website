import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import "./Quiz.css";
import Categories, {} from "../Quiz-Data/QuizCategories"; 
import { useNavigate } from "react-router-dom";
import ErrorMessage, {} from "../Quiz-Components/ErrorMessage"


 
const Home = ({ name, setName, fetchQuestions }) => {

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
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className='settings_select'>
          {error && <ErrorMessage>Please Fill Out All of the Fields</ErrorMessage>}

          <TextField 
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Category"
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>  

          <TextField
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
      <img src="./QuizPage/undraw_quiz-nlyh.png" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
