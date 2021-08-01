import React from "react";
import Synonyms from "./Synonyms";
import "./Definitions.css";

export default function Definitions(props) {
    return (
        <div className="Definitions">
            <h3>{props.definition.partOfSpeech}</h3>
            {props.definition.definitions.map(function(explanation, index) {
                return (
                    <div key={index}>
                        <div className="text">
                        {explanation.definition}
                        </div>
                        <div className="example">
                        "{explanation.example}"
                        </div>
                        <Synonyms synonyms={explanation.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}