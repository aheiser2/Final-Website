import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
import "../../Dictionary.css";
// import categories from "../../Dictionary-Data/Dictionary-category";
import { debounce } from 'lodash';

const Header = ({ word, setWord, LightMode, setMeanings }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#000" : "#fff",
            },
            type: LightMode ? "light" : "dark",
        },
    });

    // const handleChange = (e) => {
    //     setWord("")
    //     setMeanings([])
    // }

    const handleText = debounce((text) => {
        setWord(text);
    }, 500);

    return (
        <div className='dict-header'>
            <span className='dict-title'>{word ? word : "Dictionary"}</span>
            <div className='dict-inputs'>
                <ThemeProvider theme={darkTheme}>

                    <TextField 
                        className='dict-search'
                        id="filled-basic"
                        label="Search a Word" 
                        // value={word}
                        onChange={(e) => handleText(e.target.value)}
                        // onKeyPress={(e) => handleChange(e)}
                    />

                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
