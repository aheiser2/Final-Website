import React from 'react';
import "../../Dictionary.css";

const Definitions = ({ word, gerMeanings, meanings, category, LightMode }) => {
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
            ) : category === "en-us" ? ( 
                meanings.map((mean) => 
                    mean.meanings.map((item) => 
                        item.definitions.map((def) => (
                            <div 
                                className='singleMean' 
                                style={{ 
                                    backgroundColor: LightMode ? "#3b5360" : "white", 
                                    color: LightMode ? "white" : "black"
                                    }}>
                                <b id="uppercase">{item.partOfSpeech}: {def.definition}</b>
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
            ) : ( 
                <div> This is in German</div>
                // meanings.map((mean) => 
                //     mean.meanings.map((item) => 
                //         item.definitions.map((def) => (
                //             <div 
                //                 className='singleMean' 
                //                 style={{ 
                //                     backgroundColor: LightMode ? "#3b5360" : "white", 
                //                     color: LightMode ? "white" : "black"
                //                     }}>
                //                 <b id="uppercase">{item.partOfSpeech}: {def.definition}</b>
                //                 <hr style={{ backgroundColor: "black", width: "100%" }}></hr>
                //                 {def.example && (
                //                     <span>
                //                         <b>Example: </b>
                //                         {def.example}
                //                     </span>
                //                 )}
                //                 {(def.synonyms.length != 0) && (
                //                     <span>
                //                         <b>Synonyms : </b>
                //                         {def.synonyms.map((s) => `${s}, `)}
                //                     </span>
                //                 )}
                //             </div>
                //         ))
                //     )
                // )
            )}
        </div>
    );
};

export default Definitions;

