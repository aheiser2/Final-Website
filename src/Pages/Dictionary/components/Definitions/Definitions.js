import React from 'react';
import "../../Dictionary.css";

const Definitions = ({ word, meanings, category, LightMode }) => {
  return (
        <div className='dict-meanings'>

            { meanings[0] && word && category==="en" && (
                <audio 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    style={{backgroundColor: "#fff", borderRadius: 10 }}
                    controls
                >
                    Your Browser doesn't support audio element.
                </audio>
            )}


            {word === "" ? (
                <span className='dict-subTitle'>Start by typing a word in search</span>
            ) : ( 
                meanings.map((mean) => 
                    mean.meanings.map((item) => 
                        item.definitions.map((def) => (
                            <div key={def.definition}
                                className='singleMean' 
                                style={{ 
                                    backgroundColor: LightMode ? "#3b5360" : "white", 
                                    color: LightMode ? "white" : "black"
                                    }}>
                                <p><b id="uppercase">{item.partOfSpeech} </b>: {def.definition}</p>
                                <hr style={{ backgroundColor: "black", width: "100%" }}></hr>
                                {def.example && (
                                    <span>
                                        <b>Example: </b>
                                        {def.example}
                                    </span>
                                )}
                                {(def.synonyms.length != 0) && (
                                    <span>
                                        <b>Synonyms : </b>
                                        {def.synonyms.map((s) => `${s}, `)}
                                    </span>
                                )}
                            </div>
                        ))
                    )
                )
            )}
        </div>
    );
};

export default Definitions;

