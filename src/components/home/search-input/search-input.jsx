import {useState} from "react";
import classes from "./searchinput.module.scss";
const SearchInput = () => {
    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        searchText.length > 0 &&
            window.open("http://google.com/search?q=" + searchText, "_blank");
        setSearchText("");
    };
    const handlePressEnter = (e) => {
        const isInputFocused = document.activeElement.id === "search-input";
        if (e.keyCode === 13 && isInputFocused) {
            handleSearch();
        }
    };
    return (
        <div className="w-100 px-3">
            <div className={classes.inputContainer}>
                <input
                    className={classes.input}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    onKeyUp={handlePressEnter}
                    value={searchText}
                    id="search-input"
                    type="text"
                    placeholder="search ..."
                />
                <button onClick={handleSearch} className={classes.searchBtn}>
                    <i className="bi-search"></i>
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
