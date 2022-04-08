import "./Result.css";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-ui/core";

const Result = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if(!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className='result'>
      <span className='title'>Final Score : {score} </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Return to Home
      </Button>
    </div>
  );
};

export default Result;
