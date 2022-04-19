import React from 'react';
import { Button, Container, Switch } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
// import transitions from '@material-ui/core/styles/transitions';
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Dictionary.css';
import { ReturnButton } from '../../Return-Button';
import Header from './components/Dict-Header/Dict-Header.js';
import Definitions from './components/Definitions/Definitions.js';


export const Dictionary = () => {

  const [word, setWord] = useState("")
  const [meanings, setMeanings ] = useState([]);
  // const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: blue[300],
      "&$checked": {
        color: blue[500],
      },
      "&$checked + $track": {
        backgroundColor: blue[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setMeanings(data.data)

    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    dictionaryApi();
  // }, [word, category]);
}, [word]);

  return (
    <div className="dictionary-app" 
      style={{ 
        height: "100vh", 
        backgroundColor: LightMode ? "#fff" : "#282c34", 
        color: LightMode ? "black" : "white",
        transition: "all .5s linear"
        }}>
      <Container maxWidth="md" style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: 'space-evenly' }}>
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{LightMode ? "Dark" : "Light"} Mode</span>
          <DarkMode checked={LightMode} onChange={() => setLightMode(!LightMode)}/>
        </div>
        <Header word={word} setWord={setWord} LightMode={LightMode} setMeanings={setMeanings}/>
        {meanings && (
          <Definitions word={word} meanings={meanings} LightMode={LightMode}/>
        )}
        <ReturnButton />
      </Container>
    </div>
  );
}

// export default Dictionary;

