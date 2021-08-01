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
                        <p>
                        <strong>Definition</strong>: {explanation.definition}
                        <br />
                        <strong>Example</strong>: <em>{explanation.example}</em>
                        </p>
                        <Synonyms synonyms={explanation.synonyms} />
                    </div>
                )
            })}
        </div>
    )
}