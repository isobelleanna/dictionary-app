import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h4>{props.meaning.partOfSpeech}</h4> 
            {props.meaning.definitions.map(function (definition, index) {
                return (
                     <div key={index}>
                         <span>
                             <strong>
                             {definition.definition}
                            </strong>
                            <br />
                              <em>{definition.example}</em>
                              <br />
                              <Synonyms synonyms= {definition.synonyms} />
                              <hr />
                               </span>
                    </div>
                     );
                     })}
        </div>
    );

}