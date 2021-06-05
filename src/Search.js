import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function handleSearch(event){
        event.preventDefault();
        let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <form onSubmit={handleSearch}>
                <input type="search" onChange={handleKeyword} />
            </form>
        </div>
    )
}