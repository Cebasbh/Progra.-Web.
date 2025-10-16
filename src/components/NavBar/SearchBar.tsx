import "./SearchBar.css"
const SearchBar = () => {
    return(
        <div className="SearchBar">
            <input className = "SearchInput"type="text" placeholder="Search"/>
            <button className="SearchButton"><i className="bi bi-search"></i></button>
        </div>
    )
}
export default SearchBar;