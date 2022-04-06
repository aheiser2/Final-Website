import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core';
import React from 'react';
// import "./Header.css";
// import "./Dictionary.css";
import categories from "../../Dictionary-Data/Dictionary-category";
import { debounce } from 'lodash';

const Header = ({ category, setCategory, word, setWord, LightMode, setMeanings }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#000" : "#fff",
            },
            type: LightMode ? "light" : "dark",
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("")
        setMeanings([])
    }

    const handleText = debounce((text) => {
        setWord(text);
    }, 1000);

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>

                    <TextField 
                        className='search'
                        id="filled-basic"
                        label="Search a Word" 
                        // value={word}
                        onChange={(e) => handleText(e.target.value)}
                    />
                    <TextField
                        className='select'
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e)}
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default Header;
