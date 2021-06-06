import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
    return (
        <div className="Definitions">
            <h3>{props.definition.partOfSpeech}</h3>
            {props.definition.definitions.map(function(explanation, index) {
                return (
                    <div key={index}>
                        <p>
                        {explanation.definition}
                        <br />
                        {explanation.example}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}