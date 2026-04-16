import { applySearch, clearSearch } from "../../handling/searchHandling.js";

function Search() {
    const searchInput = document.querySelector('.header__search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query) {
                applySearch(query);
            } else {
                clearSearch();
            }
        });
    }
}

export default Search;