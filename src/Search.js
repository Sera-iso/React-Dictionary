import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handleImagesResponse(response) {
        setPhotos(response.data.photos);
    }

    function handleSearch(event){
        event.preventDefault();

        // Dictionary API documentation https://dictionaryapi.dev/
        let dictionaryApiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

        // Images API documentation https://www.pexels.com/api/documentation/
        let imagesApiKey= '563492ad6f91700001000001291af85a5f9740ac9f25fa533940d361';
        let header = { Authorization: `Bearer ${imagesApiKey}` };
        let imagesApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        axios.get(imagesApiUrl, { headers: header } ).then(handleImagesResponse);
    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Search">
            <section>
                <form onSubmit={handleSearch}>
                    <input type="search" onChange={handleKeyword} />
                </form>
            </section>
            <Results results={results} />
            <Photos photos={photos} />
        </div>
    )
}