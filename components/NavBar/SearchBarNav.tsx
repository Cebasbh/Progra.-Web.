// components/NavBar/SearchBarNav.tsx
// Barra de búsqueda en el navbar

import "./SearchBar.css";

const SearchBarNav = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de búsqueda en el futuro
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="SearchBar">
        <input className="SearchInput" type="text" placeholder="Search" />
        <button className="SearchButton" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchBarNav;
