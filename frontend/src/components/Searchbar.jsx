import { useState } from "react";
import "../components/Searchbar.css";

const Searchbar = ({ onSearch }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(text); // Call the onSearch function with the current text
        }
    };

    return (
        <div className="Searchbody">
            <div>
                <h3 className="bodytext">How can we help?</h3>
            </div>
            <div className="searchbar">
                <form className="formcontainer" onSubmit={handleSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Search"
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            <i className="fa-solid fa-right-long"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Searchbar;
